(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{106:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o=a(t(0)),r=(a(t(5)),t(3));function a(n){return n&&n.__esModule?n:{default:n}}var u=function(){return o.default.createElement(r.NumberInput,{min:1,max:10,onChange:function(n,e){console.log("change..",e)},type:"type2"})};e.LiveDemo=function(){return o.default.createElement(u,null)};e.markdown={subject:"增减按钮左右分开",desc:"增减按钮在左右两边",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { NumberInput } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, value) => {\n        console.log('change..', value)\n    }\n    return (\n        <NumberInput\n            min={1}\n            max={10}\n            onChange={handleChange}\n            type=\"type2\"\n        ></NumberInput>\n    )\n}\n",css:""}}}]);