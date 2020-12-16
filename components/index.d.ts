/// <reference types="react" />
import './index.scss';
declare const message: {
    confirm: (content: string, yes?: (() => void) | undefined, no?: (() => void) | undefined) => void;
    modal: (content: import("react").ReactNode, buttons?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[] | undefined, afterClose?: any) => any;
    alert: (content: string) => void;
};
export { Button, ButtonGroup } from './button/index';
export { default as Card } from './card';
export { default as Checkbox } from './checkbox/index';
export { default as Dialog } from './dialog/Dialog';
export { default as Col } from './grid/Col';
export { default as Row } from './grid/Row';
export { default as Icon } from './icon/Icon';
export { default as Input } from './input/index';
export { default as Content } from './layout/Content';
export { default as Footer } from './layout/Footer';
export { default as Header } from './layout/Header';
export { default as Layout } from './layout/Layout';
export { default as Sider } from './layout/Sider';
export { default as Menu } from './menu/index';
export { default as notification } from './notification/Notification';
export { default as Pagination } from './pagination';
export { default as Select } from './select/index';
export { default as Switch } from './switch/index';
export { default as Tooltip } from './tooltip/Tooltip';
export { message };
