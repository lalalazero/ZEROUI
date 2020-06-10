import React from 'react'
import { Row, Col } from '../../components'
import DemoCard from '../DemoCard'
import './Grid.example.scss'
import * as content1 from './01-基础栅格.md'

const GridExample01 = () => {
    return (
        <div>
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

export default function () {
    return (
        <div className='zeroUI-grid-example'>
            {Card01}
        </div>
    )
}