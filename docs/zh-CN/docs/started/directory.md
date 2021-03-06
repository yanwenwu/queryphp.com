# 目录结构

::: tip Testing Is Documentation
[tests/Docs/Started/DirectoryDoc.php](https://github.com/hunzhiwange/framework/blob/master/tests/Docs/Started/DirectoryDoc.php)
:::
    
QueryPHP 遵循 **“约定优于配置”** 的原则，主张通过领域驱动设计来构建更可靠的软件。

## 基本结构

下面是整个应用基本目录结构，系统结构可以自由定义。

```
.
├── apis Swagger API 目录
├── application
│   ├── admin （后台应用）通用后台 API 接口
│   ├── app （默认应用）
│   │   ├── App 应用层（Application）
│   │   ├── Domain 领域模型层（Domain Model）
│   │   │   └── Entity 实体 (Entity)
│   │   │   └── Event 事件（Event）
│   │   │   └── Listener 监听器（Listener）
│   │   ├── Infra 基础设施层（Infrastructure）
│   │   │   └── Provider 服务提供者 (Provider)
│   │   │   └── Repository 仓储 (Repository)
│   │   ├── ui 用户界面 User Interface（表现层 Presentation）
│-- build 一些脚本
│-- common 公共组件 (结构类 application/app)
│-- database 数据库迁移
│   ├── migrations 数据库迁移
│   ├── seeds 填充数据
│-- frontend 基于 Vue2+IView 前端通用权限管理系统
│-- i18n 语言包
│   ├── zh-CN 中文
│   ├── zh-TW 台湾繁体
│   ├── en-US 美国英语
│-- option 配置目录
│-- public 静态资源目录，比如图片、CSS
│-- runtime 运行缓存目录
│-- storage 文件上传目录
│-- tests 单元测试目录
│-- themes 视图文件目录
│-- vendor Composer 第三方库目录
│-- www Web 入口目录
│-- ...
│-- .env 环境变量
│-- .env.phpunit 单元测试环境变量
│-- .php_cs.dist 统一团队风格配置
│-- .travis.yml Travis 持续集成配置
│-- composer.json Composer 配置
│-- leevel 命令行工具集 php leevel
│-- package.json 前端包
│-- phinx.php 数据库迁移配置
│-- phpunit.xml.dist PHPUnit 配置
│-- phpunit.xml.html PHPUnit 生成 HTML 覆盖率配置，需要安装 xdebug
└── ...
```

::: warning 注意
请留意目录名的大写。
:::

::: danger
在 Mac 或者 Linux 环境下面，注意需要设置 `runtime`、`bootstrap` 和 `storage` 目录权限为 0777。
:::


## 多应用

QueryPHP 设计了一个很简单的规则来访问多应用，只需要加 `:` 即可，该目录会自动识别为应用，例如:

```
http://127.0.0.1:9527/ 默认应用首页
http://127.0.0.1:9527/:admin/ Admin 应用首页
http://127.0.0.1:9527/api/show 默认应用 API 控制器 show 方法
http://127.0.0.1:9527/:admin/api/show Admin 应用 API 控制器 show 方法
```