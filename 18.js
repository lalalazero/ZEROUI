(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{77:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var t=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,l):{};t.get||t.set?Object.defineProperty(n,l,t):n[l]=e[l]}return n.default=e,n}(l(0)),o=l(3);var a=function(){return t.default.createElement("div",null,t.default.createElement("p",null,"选择最喜欢吃的三种水果"),t.default.createElement(o.Checkbox.Group,{onChange:function(e,n){console.log("handle change..",n)},options:[{label:"苹果",value:"苹果"},{label:"橘子",value:"橘子"},{label:"梨",value:"梨"},{label:"香蕉",value:"香蕉"},{label:"西瓜",value:"西瓜"}],maxLen:3},"单身狗"))};n.LiveDemo=function(){return t.default.createElement(a,null)};n.markdown={subject:"最大可选项",desc:"限定复选框可选个数",code:"import React, { useState } from 'react'\nimport { Checkbox } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, checked) => {\n        console.log('handle change..', checked)\n    }\n    const options = [\n        {\n            label: '苹果',\n            value: '苹果',\n        },\n        {\n            label: '橘子',\n            value: '橘子',\n        },\n        {\n            label: '梨',\n            value: '梨',\n        },\n        {\n            label: '香蕉',\n            value: '香蕉',\n        },\n        {\n            label: '西瓜',\n            value: '西瓜',\n        },\n    ]\n    return (\n        <div>\n            <p>选择最喜欢吃的三种水果</p>\n            <Checkbox.Group\n                onChange={handleChange}\n                options={options}\n                maxLen={3}\n            >\n                单身狗\n            </Checkbox.Group>\n        </div>\n    )\n}\n",css:""}}}]);