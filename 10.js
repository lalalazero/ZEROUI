(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var l=r(n(0)),a=(r(n(4)),n(3));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(){return l.default.createElement("div",null,l.default.createElement(a.Card,{title:"默认大小卡片"},l.default.createElement("p",null,"卡片内容"),l.default.createElement("p",null,"卡片内容"),l.default.createElement("p",null,"卡片内容"),l.default.createElement("p",null,"卡片内容")),l.default.createElement("div",{style:{height:20}}),l.default.createElement(a.Card,{title:"小尺寸卡片",size:"small"},l.default.createElement("p",null,"卡片内容"),l.default.createElement("p",null,"卡片内容"),l.default.createElement("p",null,"卡片内容"),l.default.createElement("p",null,"卡片内容")))};t.LiveDemo=function(){return l.default.createElement(u,null)};t.markdown={subject:"基本使用",desc:"包含标题和内容的典型卡片",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Card } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div>\n            <Card title={'默认大小卡片'}>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n            </Card>\n            <div style={{ height: 20 }}></div>\n            <Card title=\"小尺寸卡片\" size=\"small\">\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n                <p>卡片内容</p>\n            </Card>\n        </div>\n    )\n}\n",css:""}}}]);