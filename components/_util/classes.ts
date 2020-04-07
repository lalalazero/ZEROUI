import camel2dot from "dot-snake-camel-case-convertor";

interface classSwitchs {
    [k: string]: boolean
    // 比如
    // hasSider: true
    // active: false
}
function scopedClassMaker(prefix: string, ) {
    return function (cls:string | classSwitchs, userClsName?:string) {
        let classArray = []
        if (typeof cls === 'string' && cls) {
            classArray.push(cls)
        } else if(cls === '') {
            classArray.push('')
        } else {
            classArray.push('')
            let clsArr = Object.entries(cls).filter(kv => kv[1]).map(kv => kv[0])
            clsArr = clsArr.map(cls => camel2dot(cls))
            classArray.push(...clsArr)
        }
        let prefixedClassArray = classArray.map(cls => cls ? prefix + '-' + cls : prefix)
        let allCls = [...prefixedClassArray, userClsName]
        return allCls.filter(Boolean).join(' ')
    }
}

function classnames(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ') // 把 undefined 过滤掉
}

export default classnames;
export { scopedClassMaker }