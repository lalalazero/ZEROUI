import React, { useEffect, useRef, useState } from 'react'
import { classname } from '../_util/classes'
import { tuple } from '../_util/type'
import './Tooltip.scss'

const PREFIX = 'zeroUI-tooltip-wrapper'

const TooltipPlacements = tuple('top', 'bottom', 'left', 'right')
export type TooltipPlacementType = typeof TooltipPlacements[number]

export interface ToolTipProps
    extends React.HTMLProps<HTMLDivElement | HTMLSpanElement> {
    title?: string
    mouseLeaveDelay?: number
    placement?: TooltipPlacementType
}

const Tooltip: React.FC<ToolTipProps> = (props) => {
    const { mouseLeaveDelay, placement, style, ...rest } = props
    const [visible, setVisible] = useState(false)
    const contentWrapperRef = useRef<HTMLSpanElement>(null)
    const tooltipWrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            contentWrapperRef &&
            contentWrapperRef.current &&
            tooltipWrapperRef &&
            tooltipWrapperRef.current
        ) {
            document.body.appendChild(contentWrapperRef.current)
            const tooltipDiv = tooltipWrapperRef.current
            const propmtSpan = contentWrapperRef.current
            const {
                width,
                height,
                left,
                top,
            } = tooltipDiv.getBoundingClientRect()
            const map = {
                top: {
                    left: window.scrollX + left,
                    top: window.scrollY + top,
                },
                bottom: {
                    left: window.scrollX + left,
                    top: window.scrollY + top + height,
                },
                left: {
                    left: window.scrollX + left,
                    top: window.scrollY + top,
                },
                right: {
                    left: window.scrollX + left + width,
                    top: window.scrollY + top,
                },
            }
            propmtSpan.style.left = map[placement!].left + 'px'
            propmtSpan.style.top = map[placement!].top + 'px'
        }
        return () => {
            window.clearTimeout(timerId)
        }
    }, [])

    let timerId: any = null
    const onMouseEnter = () => {
        if (!visible) {
            setVisible(true)
        }
        if (timerId && typeof window !== 'undefined') {
            window.clearTimeout(timerId)
            timerId = null
        }
    }
    const onMouseLeave = () => {
        if (
            typeof mouseLeaveDelay === 'number' &&
            !timerId &&
            typeof window !== 'undefined'
        ) {
            timerId = window.setTimeout(() => {
                setVisible(false)
            }, mouseLeaveDelay * 1000)
        }
    }
    const classes = classname(PREFIX, `${PREFIX}-${placement}`)
    const visibilityObj = visible ? {} : { display: 'none' }
    return (
        <div className={classes} ref={tooltipWrapperRef}>
            <span
                className={`zeroUI-tooltip-content-wrapper zeroUI-tooltip-content-placement-${placement}`}
                ref={contentWrapperRef}
                style={Object.assign({}, style, visibilityObj)}
                {...rest}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span className="zeroUI-tooltip-content">
                    {props.title || ''}
                </span>
            </span>

            <span
                className="zeroUI-tooltip-trigger"
                style={{ display: 'inline-block' }}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
            >
                {props.children}
            </span>
        </div>
    )
}

Tooltip.defaultProps = {
    mouseLeaveDelay: 0.3,
    placement: 'top',
}

export default Tooltip
