(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{116:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var l=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};l.get||l.set?Object.defineProperty(n,t,l):n[t]=e[t]}return n.default=e,n}(t(0)),c=t(3);var o=function(){var e=[{title:"parent 1",key:"1",children:[{title:"parent 1-1",key:"1-1",disabled:!0,children:[{title:"leaf",key:"1-1-1",disableCheckbox:!0},{title:"leaf",key:"1-1-2"}]},{title:l.default.createElement("span",{style:{color:"pink"}},"parent 1-2"),key:"1-2",children:[{title:"sss",key:"1-2-1"}]}]}];return l.default.createElement("div",null,l.default.createElement(c.Tree,{treeData:e,onCheck:function(e,n,t){console.log("checkedKeys ",e),console.log("checkItem ",n),console.log("event ",t)},onSelect:function(e,n){console.log("selectedKeys ",e),console.log("node ",n)},defaultExpandKeys:["1","1-1"],defaultCheckedKeys:["1","1-1","1-2","1-1-2"],defaultSelectedKeys:["1-1-1"]}))};n.LiveDemo=function(){return l.default.createElement(o,null)};n.markdown={subject:"基本用法",desc:"一个基本的 Tree，包含可勾选、可展开、可选中、禁用等功能",code:"import React, { useState } from 'react'\nimport { Tree } from 'zero-ui-react'\n\nconst App = () => {\n    const treeData = [\n        {\n            title: 'parent 1',\n            key: '1',\n            children: [\n                {\n                    title: 'parent 1-1',\n                    key: '1-1',\n                    disabled: true,\n                    children: [\n                        {\n                            title: 'leaf',\n                            key: '1-1-1',\n                            disableCheckbox: true,\n                        },\n                        {\n                            title: 'leaf',\n                            key: '1-1-2',\n                        },\n                    ],\n                },\n                {\n                    title: <span style={{ color: 'pink' }}>parent 1-2</span>,\n                    key: '1-2',\n                    children: [\n                        {\n                            title: 'sss',\n                            key: '1-2-1',\n                        },\n                    ],\n                },\n            ],\n        },\n    ]\n\n    const handleCheck = (checkedKeys, checkItem, event) => {\n        console.log('checkedKeys ', checkedKeys)\n        console.log('checkItem ', checkItem)\n        console.log('event ', event)\n    }\n\n    const handleSelect = (selectedKeys, node) => {\n        console.log('selectedKeys ', selectedKeys)\n        console.log('node ', node)\n    }\n\n    return (\n        <div>\n            <Tree\n                treeData={treeData}\n                onCheck={handleCheck}\n                onSelect={handleSelect}\n                defaultExpandKeys={['1', '1-1']}\n                defaultCheckedKeys={['1', '1-1', '1-2', '1-1-2']}\n                defaultSelectedKeys={['1-1-1']}\n            />\n        </div>\n    )\n}\n",css:""}}}]);