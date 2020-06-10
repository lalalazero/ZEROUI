import React from 'react'
import { Row, Col } from '../../components'
import DemoCard from '../DemoCard'
import './Grid.example.scss'
import * as content1 from './01-基础栅格.md'
import * as content2 from './02-gutter间隔.md'

const GridExample01 = () => {
    return (
        <div className="col-with-bg">
            <Row>
                <Col span={12}>col-span-12</Col>
                <Col span={12}>col-span-12</Col>
            </Row>
            <Row>
                <Col span={8}>col-span-8</Col>
                <Col span={8}>col-span-8</Col>
                <Col span={8}>col-span-8</Col>
            </Row>
            <Row>
                <Col span={6}>col-span-6</Col>
                <Col span={6}>col-span-6</Col>
                <Col span={6}>col-span-6</Col>
                <Col span={6}>col-span-6</Col>
            </Row>
        </div>
    )
}

const GridExample02 = () =>{
    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
                <Col span={6}>
                    <div className='gutter-div'>col-span-6</div>
                </Col>
            </Row>
        </div>
    )
}


const Card01 = (
    <DemoCard
        code={content1.default.code}
        subject={content1.default.subject}
        description={content1.default.desc}
        demo={content1.default.demo}
    >
        <GridExample01 />
    </DemoCard>
)

const Card02 = (
    <DemoCard
        code={content2.default.code}
        subject={content2.default.subject}
        description={content2.default.desc}
        demo={content2.default.demo}
        css={content2.default.css}
    >
        <GridExample02 />
    </DemoCard>
)

export default function () {
    return (
        <div className='zeroUI-grid-example'>
            {Card01}
            {Card02}
        </div>
    )
}