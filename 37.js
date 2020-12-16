(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o,r=(o=n(0))&&o.__esModule?o:{default:o},u=n(3);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){var t={title:r.default.createElement("h4",null,"标题"),body:"通知内容"},e=function(e){return u.notification.open(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{placement:e}))};return r.default.createElement("div",{className:"btn-wrapper"},r.default.createElement(u.Button,{onClick:function(){return e("topRight")}},"topRight"),r.default.createElement(u.Button,{onClick:function(){return e("topLeft")}},"topLeft"),r.default.createElement(u.Button,{onClick:function(){return e("bottomRight")}},"bottomRight"),r.default.createElement(u.Button,{onClick:function(){return e("bottomLeft")}},"bottomLeft"),r.default.createElement(u.Button,{onClick:function(){return e("topCenter")}},"topCenter"),r.default.createElement(u.Button,{onClick:function(){return e("bottomCenter")}},"bottomCenter"))};e.LiveDemo=function(){return r.default.createElement(l,null)};e.markdown={subject:"弹出位置",desc:"指定弹出位置",code:"import React from 'react'\nimport { notification, Button } from 'zero-ui-react'\n\nconst App = () => {\n    const defaultConfig = {\n        title: <h4>标题</h4>,\n        body: '通知内容',\n    }\n    const open = (placement) =>\n        notification.open({ ...defaultConfig, placement })\n    return (\n        <div className=\"btn-wrapper\">\n            <Button onClick={() => open('topRight')}>topRight</Button>\n            <Button onClick={() => open('topLeft')}>topLeft</Button>\n            <Button onClick={() => open('bottomRight')}>bottomRight</Button>\n            <Button onClick={() => open('bottomLeft')}>bottomLeft</Button>\n            <Button onClick={() => open('topCenter')}>topCenter</Button>\n            <Button onClick={() => open('bottomCenter')}>bottomCenter</Button>\n        </div>\n    )\n}\n",css:".btn-wrapper > .zeroUI-button {\n    margin: 5px;\n}"}}}]);