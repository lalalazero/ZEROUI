(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{67:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var a=o(t(0)),r=(o(t(5)),t(3));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.Badge,{dot:!0},a.default.createElement(r.Icon,{name:"laba"})),a.default.createElement(r.Badge,{dot:!0},a.default.createElement("a",{href:"#",style:{marginLeft:20}},"查看更新")))};n.LiveDemo=function(){return a.default.createElement(d,null)};n.markdown={subject:"小红点",desc:"没有具体的通知数字",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Badge, Icon } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div>\n            <Badge dot>\n                <Icon name=\"laba\" />\n            </Badge>\n\n            <Badge dot>\n                <a href=\"#\" style={{ marginLeft: 20 }}>\n                    查看更新\n                </a>\n            </Badge>\n        </div>\n    )\n}\n",css:""}}}]);