(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{419:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"for-循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-循环"}},[t._v("#")]),t._v(" For 循环")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Testing Is Documentation")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/hunzhiwange/framework/blob/master/tests/View/Compiler/CompilerForTest.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests/View/Compiler/CompilerForTest.php"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("如果我们需要在模板中使用 for 循环，那么通过 for 标签可以很方便地输出。")]),t._v(" "),s("h2",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" code")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testBaseUse(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("{for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1;$i<10;$i++}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("QueryPHP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("代码版本for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {/for}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("QueryPHP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("代码版本for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n        eot;\n\n    $this->assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-简单版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-简单版"}},[t._v("#")]),t._v(" node 简单版")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testForNode(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            QueryPHP - node - for "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("QueryPHP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n        eot;\n\n    $this->assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"node-完整版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-完整版"}},[t._v("#")]),t._v(" node 完整版")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testForNode2(): void\n{\n    $parser = $this->createParser();\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("myValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("step")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            QueryPHP for "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$myValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$myValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$myValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("QueryPHP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n        eot;\n\n    $this->assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-风格版-例-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-风格版-例-1"}},[t._v("#")]),t._v(" JS 风格版: 例 1")]),t._v(" "),s("p",[t._v("最终生成一个 foreach 结果，简单的循环。")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testForJsStyle(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("navigation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("%}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ item.href }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.caption }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {% /for %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$navigation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("caption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endforeach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n        eot;\n\n    $this->assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-风格版-例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-风格版-例-2"}},[t._v("#")]),t._v(" JS 风格版: 例 2")]),t._v(" "),s("p",[t._v("可以使用逗号分割建和值，逗号连接不能有空格。")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testForJsStyle2(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mykey,item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("navigation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("%}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ item.href }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.caption }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {% /for %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$navigation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$mykey")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("caption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endforeach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n        eot;\n\n    $this->assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])]),s("h2",{attrs:{id:"js-风格版-例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-风格版-例-3"}},[t._v("#")]),t._v(" JS 风格版: 例 3")]),t._v(" "),s("p",[t._v("可以使用空格分割建和值。")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("public function testForJsStyle3(): void\n{\n    $parser = $this->createParser();\n\n    $source = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mykey")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("navigation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("%}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ item.href }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.caption }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {% /for %}\n        eot;\n\n    $compiled = <<"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("'eot'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$navigation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$mykey")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("caption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endforeach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n        eot;\n\n    $this->assertSame($compiled, $parser->doCompile($source, null, true));\n}\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);