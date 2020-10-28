(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{56:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var l=c(o(0)),a=(c(o(3)),o(2));function c(e){return e&&e.__esModule?e:{default:e}}var t=function(){return l.default.createElement("div",{className:"col-with-bg"},l.default.createElement(a.Row,null,l.default.createElement(a.Col,{span:12},"col-span-12"),l.default.createElement(a.Col,{span:12},"col-span-12")),l.default.createElement(a.Row,null,l.default.createElement(a.Col,{span:8},"col-span-8"),l.default.createElement(a.Col,{span:8},"col-span-8"),l.default.createElement(a.Col,{span:8},"col-span-8")),l.default.createElement(a.Row,null,l.default.createElement(a.Col,{span:6},"col-span-6"),l.default.createElement(a.Col,{span:6},"col-span-6"),l.default.createElement(a.Col,{span:6},"col-span-6"),l.default.createElement(a.Col,{span:6},"col-span-6")))};n.LiveDemo=function(){return l.default.createElement(t,null)};n.markdown={subject:"基础栅格",desc:"使用单一的一组 <code>Row</code> 和 <code>Col</code> 组件，创建一个 24 等分的网格系统，所有列<code>Col</code>必须放在<code>Row</code>内。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Row, Col } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div className=\"col-with-bg\">\n            <Row>\n                <Col span={12}>col-span-12</Col>\n                <Col span={12}>col-span-12</Col>\n            </Row>\n            <Row>\n                <Col span={8}>col-span-8</Col>\n                <Col span={8}>col-span-8</Col>\n                <Col span={8}>col-span-8</Col>\n            </Row>\n            <Row>\n                <Col span={6}>col-span-6</Col>\n                <Col span={6}>col-span-6</Col>\n                <Col span={6}>col-span-6</Col>\n                <Col span={6}>col-span-6</Col>\n            </Row>\n        </div>\n    )\n}\n",css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n}\n.zeroUI-col {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.zeroUI-col:nth-child(even) {\n    background-color: #87e8de;\n}\n.zeroUI-col:nth-child(odd) {\n    background-color: #36cfc9;\n}"}}}]);