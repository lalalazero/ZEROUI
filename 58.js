(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{114:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var c=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var c=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};c.get||c.set?Object.defineProperty(n,t,c):n[t]=e[t]}return n.default=e,n}(t(0)),l=t(3);var r=function(){return c.default.createElement("div",null,c.default.createElement(l.Tree,{treeData:[{title:"1",key:"1",children:[{title:"1-1",key:"1-1"},{title:"1-2",key:"1-2",children:[{title:"1-2-1",key:"1-2-1"},{title:"1-2-2",key:"1-2-2"}]},{title:"1-3",key:"1-3",children:[{title:"1-3-1",key:"1-3-1"}]}]},{title:"2",key:"2",children:[{title:"2-1",key:"2-1"},{title:"2-2",key:"2-2",children:[{title:"2-2-1",key:"2-2-1"}]},{title:"2-3",key:"2-3"}]}],onCheck:function(e,n,t){console.log("checkedKeys ",e),console.log("checkItem ",n),console.log("event ",t)}}))};n.LiveDemo=function(){return c.default.createElement(r,null)};n.markdown={subject:"基本用法",desc:"一个基本的 Tree 展示",code:"import React, { useState } from 'react'\nimport { Tree } from 'zero-ui-react'\n\nconst App = () => {\n    const treeData = [\n        {\n            title: '1',\n            key: '1',\n            children: [\n                {\n                    title: '1-1',\n                    key: '1-1',\n                },\n                {\n                    title: '1-2',\n                    key: '1-2',\n                    children: [\n                        {\n                            title: '1-2-1',\n                            key: '1-2-1',\n                        },\n                        {\n                            title: '1-2-2',\n                            key: '1-2-2',\n                        },\n                    ],\n                },\n                {\n                    title: '1-3',\n                    key: '1-3',\n                    children: [\n                        {\n                            title: '1-3-1',\n                            key: '1-3-1',\n                        },\n                    ],\n                },\n            ],\n        },\n        {\n            title: '2',\n            key: '2',\n            children: [\n                {\n                    title: '2-1',\n                    key: '2-1',\n                },\n                {\n                    title: '2-2',\n                    key: '2-2',\n                    children: [\n                        {\n                            title: '2-2-1',\n                            key: '2-2-1',\n                        },\n                    ],\n                },\n                {\n                    title: '2-3',\n                    key: '2-3',\n                },\n            ],\n        },\n    ]\n\n    const handleCheck = (checkedKeys, checkItem, event) => {\n        console.log('checkedKeys ', checkedKeys)\n        console.log('checkItem ', checkItem)\n        console.log('event ', event)\n    }\n\n    return (\n        <div>\n            <Tree treeData={treeData} onCheck={handleCheck} />\n        </div>\n    )\n}\n",css:""}}}]);