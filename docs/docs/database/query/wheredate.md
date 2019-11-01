# Query lang.whereDate

::: tip 单元测试即文档
[基于原始文档 tests/Database/Query/TimeTest.php 自动构建](https://github.com/hunzhiwange/framework/blob/master/tests/Database/Query/TimeTest.php)
:::
    
**引入相关类**

 * use Tests\Database\DatabaseTestCase as TestCase;

## whereDate 时间查询

``` php
public function testBaseUse(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $value = strtotime('+5 month');
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->whereDate('create_date', '+5 month')
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## whereDay 时间查询

``` php
public function testWhereDay(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $date = getdate();
    $value = mktime(0, 0, 0, $date['mon'], 5, $date['year']);
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->whereDay('create_date', 5)
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## whereMonth 时间查询

``` php
public function testWhereMonth(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $date = getdate();
    $value = mktime(0, 0, 0, 5, 1, $date['year']);
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->whereMonth('create_date', 5)
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## whereYear 时间查询

``` php
public function testWhereYear(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $value = mktime(0, 0, 0, 1, 1, 2018);
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->whereYear('create_date', 2018)
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## time().where.endTime 时间查询，等价于 whereDate

``` php
public function testTime(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $value = strtotime('+5 month');
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->time()
                ->where('create_date', '+5 month')
                ->endTime()
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## time(date).where.endTime 时间查询，等价于 whereDate

``` php
public function testTimeDateIsDefault(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $value = strtotime('+5 month');
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->time('date')
                ->where('create_date', '+5 month')
                ->endTime()
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## time(day).where.endTime 时间查询，等价于 whereDay

``` php
public function testTimeDay(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $date = getdate();
    $value = mktime(0, 0, 0, $date['mon'], 5, $date['year']);
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->time('day')
                ->where('create_date', 5)
                ->endTime()
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## time(month).where.endTime 时间查询，等价于 whereMonth

``` php
public function testTimeMonth(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $date = getdate();
    $value = mktime(0, 0, 0, 5, 1, $date['year']);
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->time('month')
                ->where('create_date', 5)
                ->endTime()
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```
    
## time(year).where.endTime 时间查询，等价于 whereYear

``` php
public function testTimeYear(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` WHERE `test_query`.`create_date` = %d LIMIT 1",
            [],
            false,
            null,
            null,
            []
        ]
        eot;

    $value = mktime(0, 0, 0, 1, 1, 2018);
    $value2 = $value + 1;
    $value3 = $value + 2;

    $this->assertTimeRange(
        $this->varJson(
            $connect
                ->table('test_query')
                ->time('year')
                ->where('create_date', 2018)
                ->endTime()
                ->findOne(true)
        ),
        sprintf($sql, $value),
        sprintf($sql, $value2),
        sprintf($sql, $value3)
    );
}
```