(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{73:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.markdown=r.LiveDemo=void 0;var a=u(t(0)),n=(u(t(5)),t(3));function u(e){return e&&e.__esModule?e:{default:e}}var m=function(){return a.default.createElement("div",null,a.default.createElement(n.Breadcrumb,{seperator:">"},a.default.createElement(n.Breadcrumb.Item,null,"首页"),a.default.createElement(n.Breadcrumb.Item,null,a.default.createElement("a",{href:""},"应用中心")),a.default.createElement(n.Breadcrumb.Item,null,a.default.createElement("a",{href:""},"应用列表")),a.default.createElement(n.Breadcrumb.Item,null,"zeroUI 组件库")))};r.LiveDemo=function(){return a.default.createElement(m,null)};r.markdown={subject:"自定义分隔符",desc:"通过 seperator=&quot;&gt;&quot;设置自定义分隔符",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Breadcrumb } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div>\n            <Breadcrumb seperator=\">\">\n                <Breadcrumb.Item>首页</Breadcrumb.Item>\n                <Breadcrumb.Item>\n                    <a href=\"\">应用中心</a>\n                </Breadcrumb.Item>\n                <Breadcrumb.Item>\n                    <a href=\"\">应用列表</a>\n                </Breadcrumb.Item>\n                <Breadcrumb.Item>zeroUI 组件库</Breadcrumb.Item>\n            </Breadcrumb>\n        </div>\n    )\n}\n",css:""}}}]);