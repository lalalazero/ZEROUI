(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{113:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var c,a=(c=o(0))&&c.__esModule?c:{default:c},t=o(3);var d=function(){return a.default.createElement("div",null,a.default.createElement(t.Radio,{onChange:function(e,n,o){console.log("checked..",o)}},"单身狗"))};n.LiveDemo=function(){return a.default.createElement(d,null)};n.markdown={subject:"基本用法",desc:"一个简单的单选框",code:"import React from 'react'\nimport { Radio } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, value, checked) => {\n        console.log('checked..', checked)\n    }\n    return (\n        <div>\n            <Radio onChange={handleChange}>单身狗</Radio>\n        </div>\n    )\n}\n",css:""}}}]);