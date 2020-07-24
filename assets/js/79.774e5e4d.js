(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{404:function(a,t,s){"use strict";s.r(t);var e=s(12),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[a._v("#")]),a._v(" Summary")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("单元测试即文档")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/tests/View/SummaryDoc.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("基于原始文档 tests/View/SummaryDoc.php 自动构建"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("QueryPHP 内置三种方式的模板引擎，一种是类似于 Smart 模板的 Code 语法，一种是 HTML 标签式的 Node 语法，例外还有一种类 Javascript 的语法与 Twig 比较相似。")]),a._v(" "),s("ul",[s("li",[a._v("code 语法，侧重简单实用")]),a._v(" "),s("li",[a._v("Node 语法，严谨务实")]),a._v(" "),s("li",[a._v("JS 语法，现代潮流")])]),a._v(" "),s("p",[a._v("例外，三种语法随心嵌套，随意使用，QueryPHP 模板引擎底层分析器和编译器非常健壮，完美运行 8 年。")]),a._v(" "),s("p",[a._v("QueryPHP 模板引擎技术来自于 Jecat,一款无与伦比的技术大餐，有幸在 2010 接触到这个框架，通过这个框架学到了很多。")]),a._v(" "),s("h2",{attrs:{id:"code-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" Code 语法")]),a._v(" "),s("p",[a._v("侧重简单实用。")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("{$name}\n\n{if $name == 'You'}\n    欢迎进入 QueryPHP 开发者世界！\n{/if}\n")])])]),s("h2",{attrs:{id:"node-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" Node 语法")]),a._v(" "),s("p",[a._v("严谨务实。")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("condition")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("$name eq "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("'")]),a._v("You"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    欢迎进入 QueryPHP 开发者世界！\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"现代化类-js-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现代化类-js-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 现代化类 JS 语法")]),a._v(" "),s("p",[a._v("现代潮流。")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("{{ i + 1 }}\n")])])]),s("h2",{attrs:{id:"拒绝交叉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拒绝交叉","aria-hidden":"true"}},[a._v("#")]),a._v(" 拒绝交叉")]),a._v(" "),s("p",[a._v("下面这种写法就是错误的，模板引擎将无法正确解析。")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("<$name>\n\n{if condition=\"$name eq 'You'\"}\n    欢迎进入 QueryPHP 开发者世界！\n{/if}\n")])])]),s("h2",{attrs:{id:"php-方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-方式","aria-hidden":"true"}},[a._v("#")]),a._v(" PHP 方式")]),a._v(" "),s("p",[a._v("如果你不习惯使用使用内置的模板引擎，你也可以完全使用 PHP 自生来写。")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'You'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n    欢迎进入 QueryPHP 开发者世界！\n"),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("endif")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])])]),s("h2",{attrs:{id:"扩展支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 扩展支持")]),a._v(" "),s("p",[a._v("为了减少学习成本，系统还支持 PHP 自身作为 UI 模板。")])])},[],!1,null,null,null);t.default=r.exports}}]);