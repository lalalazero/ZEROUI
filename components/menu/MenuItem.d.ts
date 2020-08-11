import React, { Component, HTMLAttributes } from 'react';
import { modeType } from './Menu';
export interface MenuItemProps extends HTMLAttributes<HTMLElement> {
    itemKey?: React.Key;
    indentLevel?: number;
    mode?: modeType;
}
export interface MenuItemState {
    isSelectedKey: boolean;
}
export default class MenuItem extends Component<MenuItemProps, MenuItemState> {
    static isMenuItem: boolean;
    static contextType: React.Context<import("./MenuContext").MenuContextProps>;
    constructor(props: MenuItemProps);
    onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, changeKey: any) => void;
    render(): JSX.Element;
}
