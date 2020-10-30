(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var a=r(n(0)),l=(r(n(3)),n(2));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement("div",null,a.default.createElement("div",{className:"layout-example-wrapper"},a.default.createElement(l.Layout,null,a.default.createElement(l.Header,null,"Header"),a.default.createElement(l.Content,null,"Content"),a.default.createElement(l.Footer,null,"Footer"))),a.default.createElement("div",{className:"layout-example-wrapper"},a.default.createElement(l.Layout,null,a.default.createElement(l.Header,null,"Header"),a.default.createElement(l.Layout,null,a.default.createElement(l.Sider,null,"Sider"),a.default.createElement(l.Content,null,"Content")),a.default.createElement(l.Footer,null,"Footer"))),a.default.createElement("div",{className:"layout-example-wrapper"},a.default.createElement(l.Layout,null,a.default.createElement(l.Header,null,"Header"),a.default.createElement(l.Layout,null,a.default.createElement(l.Content,null,"Content"),a.default.createElement(l.Sider,null,"Sider")),a.default.createElement(l.Footer,null,"Footer"))),a.default.createElement("div",{className:"layout-example-wrapper"},a.default.createElement(l.Layout,null,a.default.createElement(l.Sider,null,"Sider"),a.default.createElement(l.Layout,null,a.default.createElement(l.Header,null,"Header"),a.default.createElement(l.Content,null,"Content"),a.default.createElement(l.Footer,null,"Footer")))))};t.LiveDemo=function(){return a.default.createElement(o,null)};t.markdown={subject:"基本结构",desc:"典型的页面布局",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Layout, Header, Sider, Footer, Content } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div>\n            <div className="layout-example-wrapper">\n                <Layout>\n                    <Header>Header</Header>\n                    <Content>Content</Content>\n                    <Footer>Footer</Footer>\n                </Layout>\n            </div>\n            <div className="layout-example-wrapper">\n                <Layout>\n                    <Header>Header</Header>\n                    <Layout>\n                        <Sider>Sider</Sider>\n                        <Content>Content</Content>\n                    </Layout>\n                    <Footer>Footer</Footer>\n                </Layout>\n            </div>\n            <div className="layout-example-wrapper">\n                <Layout>\n                    <Header>Header</Header>\n                    <Layout>\n                        <Content>Content</Content>\n                        <Sider>Sider</Sider>\n                    </Layout>\n                    <Footer>Footer</Footer>\n                </Layout>\n            </div>\n            <div className="layout-example-wrapper">\n                <Layout>\n                    <Sider>Sider</Sider>\n                    <Layout>\n                        <Header>Header</Header>\n                        <Content>Content</Content>\n                        <Footer>Footer</Footer>\n                    </Layout>\n                </Layout>\n            </div>\n        </div>\n    )\n}\n',css:".zeroUI-layout-header {\n    background: #b5f5ec;\n    height: 80px;\n    line-height: 80px;\n    text-align: center;\n    color: #fff;\n}\n.zeroUI-layout-sider {\n    background: #36cfc9;\n    width: 200px;\n    line-height: 200px;\n    text-align: center;\n    color: #fff;\n}\n.zeroUI-layout-content {\n    height: 200px;\n    line-height: 200px;\n    background: #5cdbd3;\n    text-align: center;\n    color: #fff;\n}\n.zeroUI-layout-footer {\n    background: #b5f5ec;\n    height: 80px;\n    line-height: 80px;\n    text-align: center;\n    color: #fff;\n}"}}}]);