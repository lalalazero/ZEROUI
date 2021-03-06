import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Icon } from '../index'
import { classname } from '../_util/classes'
import './Pagination.scss'

const PREFIX = 'zeroUI-pagination'

interface PaginationProps {
    total?: number
    pageSize?: number
    pageNumber?: number
    simple?: boolean
    hideIfOnePage?: boolean
    onPageChange?: (pageNumber: number) => void
    // TODO
    pageJumper?: boolean
    pageSizer?: boolean
}

interface PaginationInnerProps {
    total: number
    pageSize: number
    pageNumber: number
    simple: boolean
    hideIfOnePage: boolean
    pageJumper: boolean
    pageSizer: boolean
}

const PAGE_ELIPSIS = '...'

const Pagination: React.FC<PaginationProps> = (props) => {
    const {
        simple,
        hideIfOnePage,
        total,
        pageNumber,
        pageSize,
        pageJumper,
        pageSizer,
    } = props as PaginationInnerProps
    const [currentPage, setCurrentPage] = useState(pageNumber)
    const [endPage, setEndPage] = useState(1)
    useEffect(() => {
        const pages =
            total > 0
                ? total % pageSize === 0
                    ? total / pageSize
                    : Math.floor(total / pageSize) + 1
                : 0
        setEndPage(pages)
    }, [total, pageSize])

    const classes = classname(PREFIX, {
        [`${PREFIX}-simple`]: simple,
        [`${PREFIX}-hide-if-one-page`]: hideIfOnePage,
    })

    useEffect(() => {
        handlePageNumberChange()
    }, [currentPage])

    const handlePageNumberChange = useCallback(() => {
        props.onPageChange && props.onPageChange(currentPage)
    }, [currentPage])

    const onSelectPage = useCallback((idx: number) => {
        setCurrentPage(idx)
    }, [])

    const onSelectPagePrev = useCallback(() => {
        const newPage = currentPage - 1 <= 0 ? 1 : currentPage - 1
        setCurrentPage(newPage)
    }, [currentPage])

    const onSelectPageNext = useCallback(() => {
        const newPage = currentPage + 1 >= endPage ? endPage : currentPage + 1
        setCurrentPage(newPage)
    }, [currentPage, endPage])

    const displayPages = useMemo(() => {
        let array: any[] = []
        if (total > 0 && endPage > 5) {
            const array1 = new Array(2)
                .fill(1)
                .map((item, idx) => currentPage - idx - 1)
                .sort((a, b) => (a - b > 0 ? 1 : -1))
            const array2 = new Array(2)
                .fill(1)
                .map((item, idx) => currentPage + idx + 1)
            array = [...array1, currentPage, ...array2].filter(
                (j: number) => j > 0 && j <= endPage
            )
            if (array[0] > 1) {
                array.unshift(PAGE_ELIPSIS)
                array.unshift(1)
            }
            if (array[array.length - 1] < endPage) {
                array.push(PAGE_ELIPSIS)
                array.push(endPage)
            }
        } else {
            array = new Array(endPage).fill(1).map((item, idx) => idx + 1)
        }
        return array
    }, [currentPage, endPage, total])
    const renderPages = useMemo(() => {
        const array = displayPages.map((item, idx) => (
            <span
                className={
                    item === PAGE_ELIPSIS
                        ? ''
                        : `${classname(PREFIX + '-item')} ${
                              currentPage === item
                                  ? classname(PREFIX + '-active-page')
                                  : ''
                          }`
                }
                onClick={() => item !== PAGE_ELIPSIS && onSelectPage(item)}
                key={idx}
            >
                {item}
            </span>
        ))
        return array
    }, [currentPage, displayPages])

    return hideIfOnePage ? (
        <div className={classes}></div>
    ) : (
        <div className={classes}>
            <span
                className={classname(PREFIX + '-nav prev')}
                onClick={onSelectPagePrev}
                nav-disabled={`${currentPage === 1 || total <= 0}`}
            >
                <Icon name="left"></Icon>
            </span>
            {total > 0 ? (
                renderPages
            ) : (
                <span className={`${classname(PREFIX + '-item')} active-page`}>
                    1
                </span>
            )}
            <span
                onClick={onSelectPageNext}
                className={classname(PREFIX + '-nav next')}
                nav-disabled={`${total <= 0 || currentPage === endPage}`}
            >
                <Icon name="right"></Icon>
            </span>
            {/* <span className={sc('page-sizer')}>pageSizer</span> */}
            {/* <span className={sc('page-jumper')}>pageJumper</span> */}
        </div>
    )
}

Pagination.defaultProps = {
    hideIfOnePage: false,
    simple: false,
    pageNumber: 1,
    total: 0,
    pageSize: 10,
    pageJumper: false,
    pageSizer: false,
}

export default Pagination
