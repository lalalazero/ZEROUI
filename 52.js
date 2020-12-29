(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{109:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var l,t=(l=a(0))&&l.__esModule?l:{default:l},o=a(3);var d=function(){var e={display:"block"};return t.default.createElement("div",null,t.default.createElement(o.Radio.Group,{onChange:function(e,n){console.log("checked..",n)},name:"test",checked:"C"},t.default.createElement(o.Radio,{value:"A",style:e},t.default.createElement("span",{style:{color:"red"}},"A")),t.default.createElement(o.Radio,{value:"B",style:e},t.default.createElement("span",{style:{color:"green"}},"B")),t.default.createElement(o.Radio,{value:"C",style:e},t.default.createElement("span",{style:{color:"blue"}},"C")),t.default.createElement(o.Radio,{value:"D",style:e},t.default.createElement("span",{style:{color:"purple"}},"D"))))};n.LiveDemo=function(){return t.default.createElement(d,null)};n.markdown={subject:"自定义 Radio",desc:"可以对 Radio 的样式和内容进行定制",code:"import React from 'react'\nimport { Radio } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, checked) => {\n        console.log('checked..', checked)\n    }\n\n    const radioStyle = { display: 'block' }\n\n    return (\n        <div>\n            <Radio.Group onChange={handleChange} name=\"test\" checked=\"C\">\n                <Radio value={'A'} style={radioStyle}>\n                    <span style={{ color: 'red' }}>A</span>\n                </Radio>\n                <Radio value={'B'} style={radioStyle}>\n                    <span style={{ color: 'green' }}>B</span>\n                </Radio>\n                <Radio value={'C'} style={radioStyle}>\n                    <span style={{ color: 'blue' }}>C</span>\n                </Radio>\n                <Radio value={'D'} style={radioStyle}>\n                    <span style={{ color: 'purple' }}>D</span>\n                </Radio>\n            </Radio.Group>\n        </div>\n    )\n}\n",css:""}}}]);