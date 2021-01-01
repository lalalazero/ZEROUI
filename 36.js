(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{95:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var u=a(t(0)),l=(a(t(5)),t(3));function a(e){return e&&e.__esModule?e:{default:e}}var i=l.Menu.MenuGroup,o=l.Menu.MenuItem,m=l.Menu.SubMenu,r=function(){return u.default.createElement("div",null,u.default.createElement(l.Menu,null,u.default.createElement(m,{title:"Navigation One"},u.default.createElement(i,{title:"Item 1"},u.default.createElement(o,null,"Option 1"),u.default.createElement(o,null,"Option 2")),u.default.createElement(i,{title:"Item 2"},u.default.createElement(o,null,"Option 3"),u.default.createElement(o,null,"Option 4"))),u.default.createElement(m,{title:"Navigation Two"},u.default.createElement(o,null,"Option 5"),u.default.createElement(o,null,"Option 6"),u.default.createElement(m,{title:"Submenu"},u.default.createElement(o,null,"Option 7"),u.default.createElement(o,null,"Option 8"))),u.default.createElement(m,{title:"Navigation Three Three Three"},u.default.createElement(o,null,"Option 9"),u.default.createElement(o,null,"Option 10"),u.default.createElement(o,null,"Option 11"),u.default.createElement(o,null,"Option 12"))))};n.LiveDemo=function(){return u.default.createElement(r,null)};n.markdown={subject:"内嵌菜单",desc:"竖直方向上打开",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Menu } from \'zero-ui-react\'\n\nconst { MenuGroup, MenuItem, SubMenu } = Menu\n\nconst App = () => {\n    return (\n        <div>\n            <Menu>\n                <SubMenu title="Navigation One">\n                    <MenuGroup title="Item 1">\n                        <MenuItem>Option 1</MenuItem>\n                        <MenuItem>Option 2</MenuItem>\n                    </MenuGroup>\n                    <MenuGroup title="Item 2">\n                        <MenuItem>Option 3</MenuItem>\n                        <MenuItem>Option 4</MenuItem>\n                    </MenuGroup>\n                </SubMenu>\n                <SubMenu title="Navigation Two">\n                    <MenuItem>Option 5</MenuItem>\n                    <MenuItem>Option 6</MenuItem>\n                    <SubMenu title="Submenu">\n                        <MenuItem>Option 7</MenuItem>\n                        <MenuItem>Option 8</MenuItem>\n                    </SubMenu>\n                </SubMenu>\n                <SubMenu title="Navigation Three Three Three">\n                    <MenuItem>Option 9</MenuItem>\n                    <MenuItem>Option 10</MenuItem>\n                    <MenuItem>Option 11</MenuItem>\n                    <MenuItem>Option 12</MenuItem>\n                </SubMenu>\n            </Menu>\n        </div>\n    )\n}\n',css:""}}}]);