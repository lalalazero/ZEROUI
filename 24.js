(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var r=l(n(0)),a=(l(n(5)),n(3));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{style:{background:"#ccc",padding:20}},r.default.createElement(a.Row,{gutter:16},r.default.createElement(a.Col,{span:8},r.default.createElement(a.Card,{title:"标题",bordered:!1},r.default.createElement("p",null,"卡片内容"))),r.default.createElement(a.Col,{span:8},r.default.createElement(a.Card,{title:"标题",bordered:!1},r.default.createElement("p",null,"卡片内容"))),r.default.createElement(a.Col,{span:8},r.default.createElement(a.Card,{title:"标题",bordered:!1},r.default.createElement("p",null,"卡片内容"))))))};t.LiveDemo=function(){return r.default.createElement(d,null)};t.markdown={subject:"栅格卡片",desc:"和栅格进行配合",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Card, Row, Col } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <>\n            <div style={{ background: '#ccc', padding: 20 }}>\n                <Row gutter={16}>\n                    <Col span={8}>\n                        <Card title=\"标题\" bordered={false}>\n                            <p>卡片内容</p>\n                        </Card>\n                    </Col>\n                    <Col span={8}>\n                        <Card title=\"标题\" bordered={false}>\n                            <p>卡片内容</p>\n                        </Card>\n                    </Col>\n                    <Col span={8}>\n                        <Card title=\"标题\" bordered={false}>\n                            <p>卡片内容</p>\n                        </Card>\n                    </Col>\n                </Row>\n            </div>\n        </>\n    )\n}\n",css:""}}}]);