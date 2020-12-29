(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var a=r(n(0)),o=(r(n(4)),n(3));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var u,l=e[Symbol.iterator]();!(a=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){var e=u(a.default.useState(""),2),t=e[0],n=e[1],r=a.default.createElement(o.Select,{options:["http://","https://"],value:"http://",className:"select-before"}),l=a.default.createElement(o.Icon,{name:"setting"});return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{style:{marginBottom:16}},a.default.createElement(o.TextInput,{label:"name: ",value:t,onChange:function(e,t){n(t)}})),a.default.createElement("div",{style:{marginBottom:16}},a.default.createElement(o.TextInput,{defaultValue:"mysite",suffix:".com"})),a.default.createElement("div",{style:{marginBottom:16}},a.default.createElement(o.TextInput,{defaultValue:"mysite",addonBefore:r,addonAfter:l})))};t.LiveDemo=function(){return a.default.createElement(l,null)};t.markdown={subject:"标签、前缀和后缀",desc:"为输入框添加额外的信息。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { TextInput, Icon, Select } from \'zero-ui-react\'\n\nconst App = () => {\n    const [inputValue, setInputValue] = React.useState(\'\')\n    const onChange = (name, value) => {\n        setInputValue(value)\n    }\n\n    const addonBefore = (\n        <Select\n            options={[\'http://\', \'https://\']}\n            value="http://"\n            className="select-before"\n        />\n    )\n\n    const addonAfter = <Icon name="setting" />\n    return (\n        <>\n            <div style={{ marginBottom: 16 }}>\n                <TextInput\n                    label="name: "\n                    value={inputValue}\n                    onChange={onChange}\n                ></TextInput>\n            </div>\n\n            <div style={{ marginBottom: 16 }}>\n                <TextInput defaultValue="mysite" suffix=".com"></TextInput>\n            </div>\n\n            <div style={{ marginBottom: 16 }}>\n                <TextInput\n                    defaultValue="mysite"\n                    addonBefore={addonBefore}\n                    addonAfter={addonAfter}\n                ></TextInput>\n            </div>\n        </>\n    )\n}\n',css:""}}}]);