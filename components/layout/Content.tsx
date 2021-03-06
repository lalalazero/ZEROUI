import React from 'react'
import { classname } from '../_util/classes'

const PREFIX = 'zeroUI-layout'
type Props = React.HTMLAttributes<HTMLElement>

const Content: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    return (
        <div className={classname(PREFIX + '-content', className)} {...rest}>
            {props.children}
        </div>
    )
}

export default Content
