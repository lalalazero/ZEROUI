interface Obj {
    useKey: boolean;
}
interface classSwitchs {
    [k: string]: Obj | any;
}
declare function makeClassSwitchs(obj: {
    [k: string]: any;
}, otherOptions?: classSwitchs): classSwitchs;
declare function scopedClassMaker(prefix: string): (cls: string | classSwitchs, userClsName?: string | undefined) => string;
declare function classnames(...names: (string | undefined)[]): string;
export default classnames;
export { scopedClassMaker, makeClassSwitchs };