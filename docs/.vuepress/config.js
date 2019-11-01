const path = require('path')

module.exports = {
  dest: 'vuepress',
  port: 8088,
  locales: {
    '/': {
      lang: 'en-Us',
      title: 'QueryPHP',
      description: 'High Performance PHP Progressive Coroutine Framework Engine.'
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'QueryPHP',
      description: '高性能 PHP 渐进式协程框架引擎.'
    },
    '/zh-TW/': {
      lang: 'zh-TW',
      title: 'QueryPHP',
      description: '高性能 PHP 漸進式協程框架引擎.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'hunzhiwange/queryphp.com',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    // algolia: {
    //   apiKey: '',
    //   indexName: ''
    // },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'View this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en-US'),
        sidebar: {
          '/guide/': genSidebarConfig({title1:'Guide'}),
          '/docs/': genSidebarConfigDoc({
            title1: 'Preface',
            title2: 'Started',
            title3:'Architecture', 
            title4:'Routing',
            title5:'Template',
            title6:'Database',
            title7:'Add',
            title8:'Delete',
            title9:'Update',
            title10:'Query',
            title11:'Query lang',
            title12:'ORM',
            title13:'Component',
            title14:'Developer',
          }),
        }
      },
      '/zh-CN/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上查看此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh-CN'),
        sidebar: {
          '/zh-CN/guide/': genSidebarConfig({title1:'指南'}),
          '/zh-CN/docs/': genSidebarConfigDoc({
            title1: '序言',
            title2: '入门',
            title3:'架构', 
            title4:'路由',
            title5:'模板',
            title6:'数据库',
            title7:'新增',
            title8:'删除',
            title9:'更新',
            title10:'查询',
            title11:'查询语言',
            title12:'ORM',
            title13:'组件',
            title14:'开发者',
          }),
        }
      },
      '/zh-TW/': {
        label: '繁体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上查看此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh-TW'),
        sidebar: {
          '/zh-TW/guide/': genSidebarConfig({title1:'指南'}),
          '/zh-TW/docs/': genSidebarConfigDoc({
            title1: '序言',
            title2: '入門',
            title3:'架構', 
            title4:'路由',
            title5:'模板',
            title6:'資料庫',
            title7:'新增',
            title8:'删除',
            title9:'更新',
            title10:'査詢',
            title11:'査詢語言',
            title12:'ORM',
            title13:'組件',
            title14:'開發者',
          }),
        }
      }
    }
  },
  plugins: {
    '@vuepress/i18n-ui': false,
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/plugin-medium-zoom': true,
    //'@vuepress/notification': true,
    'flowchart': true
  },
  clientRootMixin: path.resolve(__dirname, 'mixin.js')
}

function genSidebarConfig (title) {
  return [
    {
      title: title.title1,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}

function genSidebarConfigDoc (title) {
  return [
    {
      title: title.title1,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: title.title2,
      collapsable: true,
      children: [
        'started/',
        'started/install',
        'started/specification',
        'started/directory',
      ]
    },
    {
      title: title.title3,
      collapsable: true,
      children: [
        'architecture/',
        'architecture/ioc',
        'architecture/fn',
      ]
    },
    {
      title: title.title4,
      collapsable: true,
      children: [
        'router/',
      ]
    },
    {
      title: title.title5,
      collapsable: true,
      children: [
        'template/',
        'template/var',
        'template/assign',
        'template/quick',
        'template/if',
        'template/for',
        'template/list',
        'template/lists',
        'template/while',
        'template/break',
        'template/php',
        'template/include',
        'template/css',
        'template/tagself',
      ]
    },
    {
      title: title.title6,
      collapsable: true,
      children: [
        'database/',
        'database/config',
        {
          title: title.title7 + ' Create',
          collapsable: true,
          'children': [
            'database/create/insert',
            'database/create/insertall',
          ],
        },
        {
          title: title.title8 + ' Delete',
          collapsable: true,
          'children': [
            'database/delete/delete',
            'database/truncate',
          ],
        },
        {
          title: title.title9 + ' Update',
          collapsable: true,
          'children': [
            'database/update/update',
            'database/update/updatecolumn',
            'database/update/updateincrease',
            'database/update/updatedecrease',
          ],
        },
        {
          title: title.title10 + ' Read',
          collapsable: true,
          'children': [
            'database/read/aggregate',
            'database/read/find',
            'database/read/findall',
            'database/read/findone',
            'database/read/finddynamics',
            'database/read/select',
            'database/read/lists',
            'database/read/valuepull',
          ],
        },
        {
          title: title.title11,
          collapsable: true,
          'children': [
            'database/query/flow',
            'database/query/sql',
            'database/query/table',
            'database/query/columns',
            'database/query/where',
            'database/query/wheredate',
            'database/query/prefix',
            'database/query/forceindex',
            'database/query/bind',
            'database/query/join',
            'database/query/union',
            'database/query/orderby',
            'database/query/groupby',
            'database/query/having',
            'database/query/havingdate',
            'database/query/distinct',
            'database/query/aggregate',
            'database/query/limit',
            'database/query/forupdate',
            'database/query/reset',
          ],
        },
      ]
    },
    {
      title: title.title12,
      collapsable: true,
      children: [
        'orm/',
        'orm/create',
        'orm/unitofwork',
      ]
    },
    {
      title: title.title13,
      collapsable: true,
      children: [
        'component/support/str',
        'component/support/arr',
        'component/debug',
        'component/encryption',
        'component/safe',
        'component/collection',
      ]
    },
    {
      title: title.title14,
      collapsable: true,
      children: [
        'developer/',
      ]
    }
  ]
}