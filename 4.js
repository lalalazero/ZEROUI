(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{60:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var o,r=function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(n,e):{};o.get||o.set?Object.defineProperty(t,e,o):t[e]=n[e]}return t.default=n,t}(e(0)),a=((o=e(4))&&o.__esModule,e(3));function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],o=!0,r=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(o=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);o=!0);}catch(n){r=!0,a=n}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(){var n=i((0,r.useState)(!0),2),t=n[0],e=n[1],o=i((0,r.useState)(!0),2),c=o[0],u=o[1],l=i((0,r.useState)(!0),2),d=l[0],s=l[1],g=i((0,r.useState)(!0),2),p=g[0],f=g[1];return r.default.createElement("div",{className:"space-button"},r.default.createElement(a.Button,{loading:t,onClick:function(){e(!t)}},"Loading"),r.default.createElement(a.Button,{type:"primary",loading:c,onClick:function(){return u(!c)},position:"right"},"Loading"),r.default.createElement(a.Button,{loading:d,onClick:function(){s(!d)},shape:"circle",icon:"search"}),r.default.createElement(a.Button,{loading:p,onClick:function(){return f(!p)},type:"primary",icon:"search",shape:"circle"}))};t.LiveDemo=function(){return r.default.createElement(c,null)};t.markdown={subject:"加载中状态",desc:"添加 <code>loading</code> 属性即处于加载状态。",code:'import React, { useState } from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Button } from \'zero-ui-react\'\n\nconst App = () => {\n    const [loadign1, setLoading1] = useState(true)\n    const [loading2, setLoading2] = useState(true)\n    const [loading3, setLoading3] = useState(true)\n    const [loading4, setLoading4] = useState(true)\n    return (\n        <div className="space-button">\n            <Button\n                loading={loadign1}\n                onClick={() => {\n                    setLoading1(!loadign1)\n                }}\n            >\n                Loading\n            </Button>\n            <Button\n                type="primary"\n                loading={loading2}\n                onClick={() => setLoading2(!loading2)}\n                position="right"\n            >\n                Loading\n            </Button>\n            <Button\n                loading={loading3}\n                onClick={() => {\n                    setLoading3(!loading3)\n                }}\n                shape="circle"\n                icon="search"\n            ></Button>\n            <Button\n                loading={loading4}\n                onClick={() => setLoading4(!loading4)}\n                type="primary"\n                icon="search"\n                shape="circle"\n            ></Button>\n        </div>\n    )\n}\n',css:""}}}]);