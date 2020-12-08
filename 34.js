(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{84:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var o,r=(o=e(0))&&o.__esModule?o:{default:o},i=e(2);function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(e,!0).forEach(function(n){l(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a=function(){var t={title:"标题",body:"通知内容"},n=function(n){n?i.notification.open(u({},t)):i.Notification.getInstance({placement:n},function(n){n.open(u({},t))})};return r.default.createElement("div",null,r.default.createElement(i.Button,{onClick:function(){return n()}},"右上角弹出"),r.default.createElement(i.Button,{onClick:function(){return n("topLeft")}},"左上角弹出"),r.default.createElement(i.Button,{onClick:function(){return n("bottomRight")}},"右下角弹出"),r.default.createElement(i.Button,{onClick:function(){return n("bottomLeft")}},"左下角弹出"),r.default.createElement(i.Button,{onClick:function(){return n("topCenter")}},"中间顶部弹出"),r.default.createElement(i.Button,{onClick:function(){return n("bottomCenter")}},"中间底部弹出"))};n.LiveDemo=function(){return r.default.createElement(a,null)};n.markdown={subject:"弹出位置",desc:"指定弹出位置",code:"import React from 'react'\nimport { notification, Notification, Button } from 'zero-ui-react'\n\nconst App = () => {\n    const defaultConfig = {\n        title: '标题',\n        body: '通知内容',\n    }\n    const onClick = (placement) => {\n        if (placement) {\n            notification.open({ ...defaultConfig })\n        } else {\n            Notification.getInstance(\n                {\n                    placement,\n                },\n                (instance) => {\n                    instance.open({ ...defaultConfig })\n                }\n            )\n        }\n    }\n    return (\n        <div>\n            <Button onClick={() => onClick()}>右上角弹出</Button>\n            <Button onClick={() => onClick('topLeft')}>左上角弹出</Button>\n            <Button onClick={() => onClick('bottomRight')}>右下角弹出</Button>\n            <Button onClick={() => onClick('bottomLeft')}>左下角弹出</Button>\n            <Button onClick={() => onClick('topCenter')}>中间顶部弹出</Button>\n            <Button onClick={() => onClick('bottomCenter')}>\n                中间底部弹出\n            </Button>\n        </div>\n    )\n}\n",css:""}}}]);