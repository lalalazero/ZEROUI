(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{72:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(n,t,o):n[t]=e[t]}return n.default=e,n}(t(0)),r=t(3);var c=function(){return o.default.createElement("div",null,o.default.createElement(r.Checkbox,{onChange:function(e,n){console.log("checkbox change: ",n)}},"单身狗"))};n.LiveDemo=function(){return o.default.createElement(c,null)};n.markdown={subject:"基本用法",desc:"一个简单的 checkbox",code:"import React, { useState } from 'react'\nimport { Checkbox } from 'zero-ui-react'\n\nconst App = () => {\n    const handleChange = (name, newCheck) => {\n        console.log('checkbox change: ', newCheck)\n    }\n    return (\n        <div>\n            <Checkbox onChange={handleChange}>单身狗</Checkbox>\n        </div>\n    )\n}\n",css:""}}}]);