(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var l=t(o(0)),c=(t(o(4)),o(3));function t(n){return n&&n.__esModule?n:{default:n}}var r=function(){return l.default.createElement("div",{className:"col-with-bg"},l.default.createElement(c.Row,null,l.default.createElement(c.Col,{span:18,push:6},"col-1 col-span-18-push-6"),l.default.createElement(c.Col,{span:6,pull:18},"col-2 col-span-6-pull-18")))};e.LiveDemo=function(){return l.default.createElement(r,null)};e.markdown={subject:"栅格排序",desc:"通过使用 <code>push</code> 和 <code>pull</code> 改变列的顺序。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Row, Col } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div className=\"col-with-bg\">\n            <Row>\n                <Col span={18} push={6}>\n                    col-1 col-span-18-push-6\n                </Col>\n                <Col span={6} pull={18}>\n                    col-2 col-span-6-pull-18\n                </Col>\n            </Row>\n        </div>\n    )\n}\n",css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n}\n.zeroUI-col {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.zeroUI-col:nth-child(even) {\n    background-color: #87e8de;\n}\n.zeroUI-col:nth-child(odd) {\n    background-color: #36cfc9;\n}"}}}]);