(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{102:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var a,l=(a=o(0))&&a.__esModule?a:{default:a},t=o(3);var c=function(){return l.default.createElement("div",null,l.default.createElement(t.Radio.Group,{onChange:function(e,n){console.log("checked..",n)},options:[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"},{label:"D",value:"D"}]},"单身狗"))};n.LiveDemo=function(){return l.default.createElement(c,null)};n.markdown={subject:"一组互斥的单选框",desc:"只能选择一个",code:"import React from 'react'\nimport { Radio } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, checked) => {\n        console.log('checked..', checked)\n    }\n\n    const options = [\n        {\n            label: 'A',\n            value: 'A',\n        },\n        {\n            label: 'B',\n            value: 'B',\n        },\n        {\n            label: 'C',\n            value: 'C',\n        },\n        {\n            label: 'D',\n            value: 'D',\n        },\n    ]\n    return (\n        <div>\n            <Radio.Group onChange={handleChange} options={options}>\n                单身狗\n            </Radio.Group>\n        </div>\n    )\n}\n",css:""}}}]);