(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{120:function(t,d,n){"use strict";n.r(d),d.default={apiContent:"<h2>API</h2>\n<h3>Tree Props</h3>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>treeData</td>\n<td>源数据</td>\n<td>TreeNodeType[]</td>\n<td>--</td>\n<td>--</td>\n<td>是</td>\n</tr>\n<tr>\n<td>checkedKeys</td>\n<td>checkbox 勾选的节点</td>\n<td>string[]</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>defaultCheckedKeys</td>\n<td>初始化勾选节点(只会初始化一次)</td>\n<td>string[]</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>expandKeys</td>\n<td>展开的树节点</td>\n<td>string[]</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>defaultExpandKeys</td>\n<td>初始化展开的树节点(只会初始化一次)</td>\n<td>string[]</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>selectedKeys</td>\n<td>选中的树节点</td>\n<td>string[]</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>defaultSelectedKeys</td>\n<td>初始化选中的树节点(只会初始化一次)</td>\n<td>string[]</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>是否允许多选</td>\n<td>boolean</td>\n<td>--</td>\n<td>false(默认单选)</td>\n<td>否</td>\n</tr>\n<tr>\n<td>checkable</td>\n<td>整棵树是否出现 checkbox 勾选框</td>\n<td>boolean</td>\n<td>--</td>\n<td>true</td>\n<td>否</td>\n</tr>\n<tr>\n<td>autoExpandParent</td>\n<td>自动展开可展开的父节点</td>\n<td>boolean</td>\n<td>--</td>\n<td>true</td>\n<td>否</td>\n</tr>\n<tr>\n<td>onCheck</td>\n<td>点击 checkbox 触发</td>\n<td>(checkedKeys: string[], checkNode: TreeNodeType, event: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>onExpand</td>\n<td>点击折叠或者展开触发</td>\n<td>(expandKeys: string[], expandNode: TreeNodeType) =&gt; void</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>onSelect</td>\n<td>点击树节点触发</td>\n<td>(selectedKeys: string[], selectNode: TreeNodeType) =&gt; void</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>expandIcon</td>\n<td>展开按钮</td>\n<td>ReactNode</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>collapseIcon</td>\n<td>折叠按钮</td>\n<td>ReactNode</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>loadData</td>\n<td>点击展开按钮，异步加载数据使用</td>\n<td>(node: TreeNodeType) =&gt; Promise&lt;any&gt;</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n<h3>TreeNodeType Props</h3>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>树节点唯一标识，整棵树的每个节点的 key 必须唯一</td>\n<td>string</td>\n<td>--</td>\n<td>--</td>\n<td>是</td>\n</tr>\n<tr>\n<td>title</td>\n<td>树节点渲染内容</td>\n<td>string / ReactNode</td>\n<td>--</td>\n<td>--</td>\n<td>是</td>\n</tr>\n<tr>\n<td>children</td>\n<td>子树的内容</td>\n<td>TreeNodeType[]</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>expandable</td>\n<td>节点是否可展开</td>\n<td>boolean</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>checkable</td>\n<td>是否显示 checkbox,只有整棵树 checkable 为 true 时才有用</td>\n<td>boolean</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>节点渲染图标</td>\n<td>ReactNode</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n<tr>\n<td>isLeaf</td>\n<td>配合 loadData 异步加载使用，只有 isLeaf 为 false 的节点才会异步加载</td>\n<td>boolean</td>\n<td>--</td>\n<td>--</td>\n<td>否</td>\n</tr>\n</tbody>\n</table>\n",apiCode:""}}}]);