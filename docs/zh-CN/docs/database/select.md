# 数据库查询

::: tip Testing Is Documentation
[tests/Database/SelectTest.php](https://github.com/hunzhiwange/framework/blob/master/tests/Database/SelectTest.php)
:::
    
**Uses**

``` php
<?php

use I18nMock;
use Leevel\Collection\Collection;
use Leevel\Database\Condition;
use Leevel\Database\Page;
use Leevel\Di\Container;
use Leevel\Page\Page as BasePage;
use stdClass;
use Tests\Database\DatabaseTestCase as TestCase;
```

## master 设置是否查询主服务器

``` php
public function testMaster(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test`.* FROM `test`",
            [],
            true
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            $connect
                ->table('test')
                ->master(true)
                ->findAll(true)
        )
    );
}
```
    
## asSome 设置以某种包装返会结果

**fixture 定义**

**Tests\Database\AsSomeDemo**

``` php
namespace Tests\Database;

class AsSomeDemo
{
    public $name;
    public $content;

    public function __construct(array $data)
    {
        $this->name = $data['name'];
        $this->content = $data['content'];
    }
}
```


``` php
public function testAsSome(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    $this->assertSame(
        1,
        $connect
            ->table('guest_book')
            ->insert($data),
    );

    $result = $connect
        ->table('guest_book')
        ->asSome(fn (...$args): AsSomeDemo => new AsSomeDemo(...$args))
        ->where('id', 1)
        ->setColumns('name,content')
        ->findOne();

    $json = <<<'eot'
        {
            "name": "tom",
            "content": "I love movie."
        }
        eot;

    $this->assertSame(
        $json,
        $this->varJson(
            (array) $result
        )
    );

    $this->assertInstanceof(AsSomeDemo::class, $result);

    $this->assertSame('tom', $result->name);
    $this->assertSame('I love movie.', $result->content);
}
```
    
## asCollection 设置是否以集合返回

``` php
public function testAsCollectionAsDefaultFindAll(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 5; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $result = $connect
        ->table('guest_book')
        ->asCollection()
        ->setColumns('name,content')
        ->findAll();

    $json = <<<'eot'
        [
            {
                "name": "tom",
                "content": "I love movie."
            },
            {
                "name": "tom",
                "content": "I love movie."
            },
            {
                "name": "tom",
                "content": "I love movie."
            },
            {
                "name": "tom",
                "content": "I love movie."
            },
            {
                "name": "tom",
                "content": "I love movie."
            },
            {
                "name": "tom",
                "content": "I love movie."
            }
        ]
        eot;

    $this->assertSame(
        $json,
        $this->varJson(
            $result->toArray()
        )
    );

    $this->assertInstanceof(Collection::class, $result);
    $this->assertCount(6, $result);

    $n = 0;
    foreach ($result as $key => $value) {
        $this->assertSame($key, $n);
        $this->assertInstanceof(stdClass::class, $value);
        $this->assertSame('tom', $value->name);
        $this->assertSame('I love movie.', $value->content);
        $n++;
    }
}
```
    
## asArray 设置返会结果为数组

``` php
public function testAsArray(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    $this->assertSame(
        1,
        $connect
            ->table('guest_book')
            ->insert($data),
    );

    $result = $connect
        ->table('guest_book')
        ->asArray()
        ->where('id', 1)
        ->setColumns('name,content')
        ->findOne();

    $json = <<<'eot'
        {
            "name": "tom",
            "content": "I love movie."
        }
        eot;

    $this->assertSame(
        $json,
        $this->varJson(
            $result
        )
    );

    $this->assertIsArray($result);
    $this->assertSame('tom', $result['name']);
    $this->assertSame('I love movie.', $result['content']);
}
```
    
## asArray 设置返会结果为数组支持闭包处理

``` php
public function testAsArrayWithClosure(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    $this->assertSame(
        1,
        $connect
            ->table('guest_book')
            ->insert($data),
    );

    $result = $connect
        ->table('guest_book')
        ->asArray(function (array $value): array {
            $value['hello'] = 'world';

            return $value;
        })
        ->where('id', 1)
        ->setColumns('name,content')
        ->findOne();

    $json = <<<'eot'
        {
            "name": "tom",
            "content": "I love movie.",
            "hello": "world"
        }
        eot;

    $this->assertSame(
        $json,
        $this->varJson(
            $result
        )
    );

    $this->assertIsArray($result);
    $this->assertSame('tom', $result['name']);
    $this->assertSame('I love movie.', $result['content']);
}
```
    
## value 返回一个字段的值

``` php
public function testValue(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    $this->assertSame(
        1,
        $connect
            ->table('guest_book')
            ->insert($data),
    );

    $name = $connect
        ->table('guest_book')
        ->where('id', 1)
        ->value('name');

    $content = $connect
        ->table('guest_book')
        ->where('id', 1)
        ->value('content');

    $this->assertSame('tom', $name);
    $this->assertSame('I love movie.', $content);
}
```
    
## list 返回一列数据

``` php
public function testList(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    $this->assertSame(
        1,
        $connect
            ->table('guest_book')
            ->insert($data),
    );

    $result = $connect
        ->table('guest_book')
        ->where('id', 1)
        ->list('name');

    $json = <<<'eot'
        [
            "tom"
        ]
        eot;

    $this->assertSame(
        $json,
        $this->varJson(
            $result
        )
    );
}
```
    
## list 返回一列数据支持 2 个字段

``` php
public function testList2(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    $this->assertSame(
        1,
        $connect
            ->table('guest_book')
            ->insert($data),
    );

    $result = $connect
        ->table('guest_book')
        ->where('id', 1)
        ->list('content', 'name');

    $json = <<<'eot'
        {
            "tom": "I love movie."
        }
        eot;

    $this->assertSame(
        $json,
        $this->varJson(
            $result
        )
    );
}
```
    
## list 返回一列数据支持英文逗号分隔字段

``` php
public function testList3(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    $this->assertSame(
        1,
        $connect
            ->table('guest_book')
            ->insert($data),
    );

    $result = $connect
        ->table('guest_book')
        ->where('id', 1)
        ->list('content,name');

    $json = <<<'eot'
        {
            "tom": "I love movie."
        }
        eot;

    $this->assertSame(
        $json,
        $this->varJson(
            $result
        )
    );
}
```
    
## chunk 数据分块处理

``` php
public function testChunk(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 5; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $n = 1;
    $connect
        ->table('guest_book')
        ->chunk(2, function ($result, $page) use (&$n) {
            $this->assertInstanceof(stdClass::class, $result[0]);
            $this->assertSame($n * 2 - 1, (int) $result[0]->id);
            $this->assertSame('tom', $result[0]->name);
            $this->assertSame('I love movie.', $result[0]->content);
            $this->assertStringContainsString(date('Y-m'), $result[0]->create_at);

            $this->assertInstanceof(stdClass::class, $result[1]);
            $this->assertSame($n * 2, (int) $result[1]->id);
            $this->assertSame('tom', $result[1]->name);
            $this->assertSame('I love movie.', $result[1]->content);
            $this->assertStringContainsString(date('Y-m'), $result[1]->create_at);

            $this->assertCount(2, $result);
            $this->assertSame($n, $page);

            $n++;
        });
}
```
    
## chunk 数据分块处理支持返回 false 中断

``` php
public function testChunkWhenReturnFalseAndBreak(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 5; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $n = 1;
    $connect
        ->table('guest_book')
        ->chunk(2, function ($result, $page) use (&$n) {
            $this->assertInstanceof(stdClass::class, $result[0]);
            $this->assertSame($n * 2 - 1, (int) $result[0]->id);
            $this->assertSame('tom', $result[0]->name);
            $this->assertSame('I love movie.', $result[0]->content);
            $this->assertStringContainsString(date('Y-m'), $result[0]->create_at);

            $this->assertInstanceof(stdClass::class, $result[1]);
            $this->assertSame($n * 2, (int) $result[1]->id);
            $this->assertSame('tom', $result[1]->name);
            $this->assertSame('I love movie.', $result[1]->content);
            $this->assertStringContainsString(date('Y-m'), $result[1]->create_at);

            $this->assertCount(2, $result);
            $this->assertSame($n, $page);

            // It will break.
            if (2 === $n) {
                return false;
            }

            $n++;
        });
}
```
    
## each 数据分块处理依次回调

``` php
public function testEach(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 5; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $n = $p = 1;
    $connect
        ->table('guest_book')
        ->each(2, function ($value, $key, $page) use (&$n, &$p) {
            $this->assertInstanceof(stdClass::class, $value);
            $this->assertSame($n, (int) $value->id);
            $this->assertSame('tom', $value->name);
            $this->assertSame('I love movie.', $value->content);
            $this->assertStringContainsString(date('Y-m'), $value->create_at);
            $this->assertSame(($n + 1) % 2, $key);
            $this->assertSame($p, $page);

            if (1 === ($n + 1) % 2) {
                $p++;
            }

            $n++;
        });

    $this->assertSame(7, $n);
}
```
    
## each 数据分块处理依次回调支持返回 false 中断

``` php
public function testEachBreak(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 5; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $n = $p = 1;
    $connect
        ->table('guest_book')
        ->each(2, function ($value, $key, $page) use (&$n, &$p) {
            if (3 === $n) {
                return false;
            }

            $this->assertInstanceof(stdClass::class, $value);
            $this->assertSame($n, (int) $value->id);
            $this->assertSame('tom', $value->name);
            $this->assertSame('I love movie.', $value->content);
            $this->assertStringContainsString(date('Y-m'), $value->create_at);
            $this->assertSame(($n + 1) % 2, $key);
            $this->assertSame($p, $page);

            if (1 === ($n + 1) % 2) {
                $p++;
            }

            $n++;
        });

    $this->assertSame(3, $n);
}
```
    
## pageCount 取得分页查询记录数量

``` php
public function testPageCount(): void
{
    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 5; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $this->assertSame(
        6,
        $connect
            ->table('guest_book')
            ->pageCount(),
    );

    $this->assertSame(
        6,
        $connect
            ->table('guest_book')
            ->pageCount('*'),
    );

    $this->assertSame(
        6,
        $connect
            ->table('guest_book')
            ->pageCount('id'),
    );
}
```
    
## page 分页查询

``` php
public function testPage(): void
{
    $this->initI18n();

    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 25; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $page = $connect
        ->table('guest_book')
        ->page(1);
    $result = $page->toArray()['data'];

    $this->assertInstanceof(BasePage::class, $page);
    $this->assertInstanceof(Page::class, $page);
    $this->assertCount(10, $result);

    $n = 0;
    foreach ($result as $key => $value) {
        $this->assertSame($key, $n);
        $this->assertInstanceof(stdClass::class, $value);
        $this->assertSame('tom', $value->name);
        $this->assertSame('I love movie.', $value->content);

        $n++;
    }

    $data = <<<'eot'
        <div class="pagination"> <span class="pagination-total">共 26 条</span> <button class="btn-prev disabled">&#8249;</button> <ul class="pager">  <li class="number active"><a>1</a></li><li class="number"><a href="?page=2">2</a></li><li class="number"><a href="?page=3">3</a></li>  </ul> <button class="btn-next" onclick="window.location.href='?page=2';">&#8250;</button> <span class="pagination-jump">前往<input type="number" link="?page={jump}" onkeydown="var event = event || window.event; if (event.keyCode == 13) { window.location.href = this.getAttribute('link').replace( '{jump}', this.value); }" onfocus="this.select();" min="1" value="1" number="true" class="pagination-editor">页</span> </div>
        eot;

    $this->assertSame(
        $data,
        $page->render()
    );

    $this->assertSame(
        $data,
        $page->toHtml()
    );

    $this->assertSame(
        $data,
        $page->__toString()
    );

    $this->assertSame(
        $data,
        (string) ($page)
    );

    $data = <<<'eot'
        {
            "per_page": 10,
            "current_page": 1,
            "total_page": 3,
            "total_record": 26,
            "total_macro": false,
            "from": 0,
            "to": 10
        }
        eot;

    $this->assertSame(
        $data,
            $this->varJson(
                $page->toArray()['page']
            )
    );

    $this->assertSame(
        $data,
            $this->varJson(
                $page->jsonSerialize()['page']
            )
    );

    $data = <<<'eot'
        {"per_page":10,"current_page":1,"total_page":3,"total_record":26,"total_macro":false,"from":0,"to":10}
        eot;

    $this->assertSame(
        $data,
        json_encode($page->toArray()['page'])
    );

    $this->clearI18n();
}
```
    
## pageMacro 创建一个无限数据的分页查询

``` php
public function testPageMacro(): void
{
    $this->initI18n();

    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 25; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $page = $connect
        ->table('guest_book')
        ->pageMacro(1);
    $result = $page->toArray()['data'];

    $this->assertInstanceof(BasePage::class, $page);
    $this->assertInstanceof(Page::class, $page);
    $this->assertCount(10, $result);

    $n = 0;
    foreach ($result as $key => $value) {
        $this->assertSame($key, $n);
        $this->assertInstanceof(stdClass::class, $value);
        $this->assertSame('tom', $value->name);
        $this->assertSame('I love movie.', $value->content);

        $n++;
    }

    $data = <<<'eot'
        <div class="pagination">  <button class="btn-prev disabled">&#8249;</button> <ul class="pager">  <li class="number active"><a>1</a></li><li class="number"><a href="?page=2">2</a></li><li class="number"><a href="?page=3">3</a></li><li class="number"><a href="?page=4">4</a></li><li class="number"><a href="?page=5">5</a></li><li class="number"><a href="?page=6">6</a></li> <li class="btn-quicknext" onclick="window.location.href='?page=6';" onmouseenter="this.innerHTML='&raquo;';" onmouseleave="this.innerHTML='...';">...</li> </ul> <button class="btn-next" onclick="window.location.href='?page=2';">&#8250;</button> <span class="pagination-jump">前往<input type="number" link="?page={jump}" onkeydown="var event = event || window.event; if (event.keyCode == 13) { window.location.href = this.getAttribute('link').replace( '{jump}', this.value); }" onfocus="this.select();" min="1" value="1" number="true" class="pagination-editor">页</span> </div>
        eot;

    $this->assertSame(
        $data,
        $page->render()
    );

    $this->assertSame(
        $data,
        $page->toHtml()
    );

    $this->assertSame(
        $data,
        $page->__toString()
    );

    $this->assertSame(
        $data,
        (string) ($page)
    );

    $data = <<<'eot'
        {
            "per_page": 10,
            "current_page": 1,
            "total_page": 100000000,
            "total_record": 999999999,
            "total_macro": true,
            "from": 0,
            "to": null
        }
        eot;

    $this->assertSame(
        $data,
            $this->varJson(
                $page->toArray()['page']
            )
    );

    $this->assertSame(
        $data,
            $this->varJson(
                $page->jsonSerialize()['page']
            )
    );

    $data = <<<'eot'
        {"per_page":10,"current_page":1,"total_page":100000000,"total_record":999999999,"total_macro":true,"from":0,"to":null}
        eot;

    $this->assertSame(
        $data,
        json_encode($page->toArray()['page'])
    );

    $this->clearI18n();
}
```
    
## pagePrevNext 创建一个只有上下页的分页查询

``` php
public function testPagePrevNext(): void
{
    $this->initI18n();

    $connect = $this->createDatabaseConnect();

    $data = ['name' => 'tom', 'content' => 'I love movie.'];

    for ($n = 0; $n <= 25; $n++) {
        $connect
            ->table('guest_book')
            ->insert($data);
    }

    $page = $connect
        ->table('guest_book')
        ->pagePrevNext(1, 15);
    $result = $page->toArray()['data'];

    $this->assertInstanceof(BasePage::class, $page);
    $this->assertInstanceof(Page::class, $page);
    $this->assertCount(15, $result);

    $n = 0;
    foreach ($result as $key => $value) {
        $this->assertSame($key, $n);
        $this->assertInstanceof(stdClass::class, $value);
        $this->assertSame('tom', $value->name);
        $this->assertSame('I love movie.', $value->content);

        $n++;
    }

    $data = <<<'eot'
        <div class="pagination">  <button class="btn-prev disabled">&#8249;</button> <ul class="pager">    </ul> <button class="btn-next" onclick="window.location.href='?page=2';">&#8250;</button> <span class="pagination-jump">前往<input type="number" link="?page={jump}" onkeydown="var event = event || window.event; if (event.keyCode == 13) { window.location.href = this.getAttribute('link').replace( '{jump}', this.value); }" onfocus="this.select();" min="1" value="1" number="true" class="pagination-editor">页</span> </div>
        eot;

    $this->assertSame(
        $data,
        $page->render()
    );

    $this->assertSame(
        $data,
        $page->toHtml()
    );

    $this->assertSame(
        $data,
        $page->__toString()
    );

    $this->assertSame(
        $data,
        (string) ($page)
    );

    $data = <<<'eot'
        {
            "per_page": 15,
            "current_page": 1,
            "total_page": null,
            "total_record": null,
            "total_macro": false,
            "from": 0,
            "to": null
        }
        eot;

    $this->assertSame(
        $data,
            $this->varJson(
                $page->toArray()['page']
            )
    );

    $this->assertSame(
        $data,
            $this->varJson(
                $page->jsonSerialize()['page']
            )
    );

    $data = <<<'eot'
        {"per_page":15,"current_page":1,"total_page":null,"total_record":null,"total_macro":false,"from":0,"to":null}
        eot;

    $this->assertSame(
        $data,
        json_encode($page->toArray()['page'])
    );

    $this->clearI18n();
}
```
    
## forPage 根据分页设置条件

``` php
public function testForPage(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test`.* FROM `test` LIMIT 114,6",
            [],
            false
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            $connect
                ->table('test')
                ->forPage(20, 6)
                ->findAll(true)
        )
    );
}
```
    
## makeSql 获得查询字符串

``` php
public function testMakeSql(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test`.* FROM `test`"
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            [
                $connect
                    ->table('test')
                    ->makeSql(),
            ]
        )
    );
}
```
    
## makeSql 获得查询字符串支持集合为一个条件

``` php
public function testMakeSqlWithLogicGroup(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "(SELECT `test`.* FROM `test`)"
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            [
                $connect
                    ->table('test')
                    ->makeSql(true),
            ]
        )
    );
}
```