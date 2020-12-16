(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var a=l(n(0)),r=(l(n(4)),n(3));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement("div",{className:"space-button"},a.default.createElement("div",null,"大尺寸按钮"),a.default.createElement("div",null,a.default.createElement(r.Button,{size:"large"},"基本"),a.default.createElement(r.Button,{type:"primary",size:"large"},"主要"),a.default.createElement(r.Button,{type:"dashed",size:"large"},"虚线"),a.default.createElement(r.Button,{type:"text",size:"large"},"无边框"),a.default.createElement(r.Button,{type:"danger",size:"large"},"危险"),a.default.createElement(r.Button,{icon:"search",shape:"circle",type:"primary",size:"large"}),a.default.createElement(r.Button,{icon:"search",shape:"circle",size:"large"}),a.default.createElement(r.Button,{icon:"search",type:"primary",size:"large"},"Search"),a.default.createElement(r.Button,{icon:"search",position:"right",size:"large"},"Search")),a.default.createElement("div",null,"默认尺寸按钮"),a.default.createElement("div",null,a.default.createElement(r.Button,null,"基本"),a.default.createElement(r.Button,{type:"primary"},"主要"),a.default.createElement(r.Button,{type:"dashed"},"虚线"),a.default.createElement(r.Button,{type:"text"},"无边框"),a.default.createElement(r.Button,{type:"danger"},"危险"),a.default.createElement(r.Button,{icon:"search",shape:"circle",type:"primary"}),a.default.createElement(r.Button,{icon:"search",shape:"circle"}),a.default.createElement(r.Button,{icon:"search",type:"primary"},"Search"),a.default.createElement(r.Button,{icon:"search",position:"right"},"Search")),a.default.createElement("div",null,"小尺寸按钮"),a.default.createElement("div",null,a.default.createElement(r.Button,{size:"small"},"基本"),a.default.createElement(r.Button,{type:"primary",size:"small"},"主要"),a.default.createElement(r.Button,{type:"dashed",size:"small"},"虚线"),a.default.createElement(r.Button,{type:"text",size:"small"},"无边框"),a.default.createElement(r.Button,{type:"danger",size:"small"},"危险"),a.default.createElement(r.Button,{icon:"search",shape:"circle",type:"primary",size:"small"}),a.default.createElement(r.Button,{icon:"search",shape:"circle",size:"small"}),a.default.createElement(r.Button,{icon:"search",type:"primary",size:"small"},"Search"),a.default.createElement(r.Button,{icon:"search",position:"right",size:"small"},"Search")))};t.LiveDemo=function(){return a.default.createElement(o,null)};t.markdown={subject:"按钮尺寸",desc:"按钮有大、中、小三种尺寸。通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为默认。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Button } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="space-button">\n            <div>大尺寸按钮</div>\n            <div>\n                <Button size="large">基本</Button>\n                <Button type="primary" size="large">\n                    主要\n                </Button>\n                <Button type="dashed" size="large">\n                    虚线\n                </Button>\n                <Button type="text" size="large">\n                    无边框\n                </Button>\n                <Button type="danger" size="large">\n                    危险\n                </Button>\n                <Button\n                    icon="search"\n                    shape="circle"\n                    type="primary"\n                    size="large"\n                ></Button>\n                <Button icon="search" shape="circle" size="large"></Button>\n                <Button icon="search" type="primary" size="large">\n                    Search\n                </Button>\n                <Button icon="search" position="right" size="large">\n                    Search\n                </Button>\n            </div>\n            <div>默认尺寸按钮</div>\n            <div>\n                <Button>基本</Button>\n                <Button type="primary">主要</Button>\n                <Button type="dashed">虚线</Button>\n                <Button type="text">无边框</Button>\n                <Button type="danger">危险</Button>\n                <Button icon="search" shape="circle" type="primary"></Button>\n                <Button icon="search" shape="circle"></Button>\n                <Button icon="search" type="primary">\n                    Search\n                </Button>\n                <Button icon="search" position="right">\n                    Search\n                </Button>\n            </div>\n            <div>小尺寸按钮</div>\n            <div>\n                <Button size="small">基本</Button>\n                <Button type="primary" size="small">\n                    主要\n                </Button>\n                <Button type="dashed" size="small">\n                    虚线\n                </Button>\n                <Button type="text" size="small">\n                    无边框\n                </Button>\n                <Button type="danger" size="small">\n                    危险\n                </Button>\n                <Button\n                    icon="search"\n                    shape="circle"\n                    type="primary"\n                    size="small"\n                ></Button>\n                <Button icon="search" shape="circle" size="small"></Button>\n                <Button icon="search" type="primary" size="small">\n                    Search\n                </Button>\n                <Button icon="search" position="right" size="small">\n                    Search\n                </Button>\n            </div>\n        </div>\n    )\n}\n',css:""}}}]);