(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{66:function(l,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var n=r(o(0)),d=(r(o(3)),o(2));function r(l){return l&&l.__esModule?l:{default:l}}var t=function(){return n.default.createElement("div",{className:"col-with-bg"},n.default.createElement(d.Row,null,n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col"),n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col"),n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col"),n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col"),n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col"),n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col"),n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col"),n.default.createElement(d.Col,{xs:24,sm:12,md:8,lg:6,xl:4,xxl:3},"col")),n.default.createElement(d.Row,null,n.default.createElement(d.Col,{md:{span:12,offset:1,pull:1,push:1,order:1},lg:{span:10,offset:2,pull:2,push:2,order:2}},"col-1 md-order-1 lg-order-2"),n.default.createElement(d.Col,{md:{span:12,offset:2,pull:2,push:1,order:2},lg:{span:10,offset:2,pull:2,push:2,order:1}},"col-2 md-order-2 lg-order-1")))};e.LiveDemo=function(){return n.default.createElement(t,null)};e.markdown={subject:"响应式布局",desc:"预设 6 个响应式尺寸：<code>xs</code> <code>sm</code> <code>md</code> <code>lg</code> <code>xl</code> <code>xxl</code>",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Row, Col } from 'zero-ui-react'\nconst App = () => {\n    return (\n        <div className=\"col-with-bg\">\n            <Row>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n                <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>\n                    col\n                </Col>\n            </Row>\n            <Row>\n                <Col\n                    md={{ span: 12, offset: 1, pull: 1, push: 1, order: 1 }}\n                    lg={{ span: 10, offset: 2, pull: 2, push: 2, order: 2 }}\n                >\n                    col-1 md-order-1 lg-order-2\n                </Col>\n                <Col\n                    md={{ span: 12, offset: 2, pull: 2, push: 1, order: 2 }}\n                    lg={{ span: 10, offset: 2, pull: 2, push: 2, order: 1 }}\n                >\n                    col-2 md-order-2 lg-order-1\n                </Col>\n            </Row>\n        </div>\n    )\n}\n",css:".zeroUI-row {\n    margin: 20px 0;\n    color: #fff;\n}\n.zeroUI-col {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.zeroUI-col:nth-child(even) {\n    background-color: #87e8de;\n}\n.zeroUI-col:nth-child(odd) {\n    background-color: #36cfc9;\n}"}}}]);