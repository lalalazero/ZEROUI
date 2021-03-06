import React from 'react'
import DemoRenderer from '../DemoRenderer'

export default class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            demos: [],
            api: '',
            apiCode: '',
        }
    }
    async componentDidMount() {
        const demos = [
            await import('./01-基本使用.mdx'),
            await import('./02-禁用态.mdx'),
            await import('./03-增减按钮左右分开.mdx'),
        ]
        const api = await import('./api.mdx')
        this.setState({
            api: api.default.apiContent,
            demos,
            apiCode: api.default.apiCode,
        })
    }

    render() {
        const { demos, api, apiCode } = this.state
        const className = 'zeroUI-input-number-example'
        return (
            <DemoRenderer
                className={className}
                demos={demos}
                api={api}
                apiCode={apiCode}
                colCount={2}
            ></DemoRenderer>
        )
    }
}
