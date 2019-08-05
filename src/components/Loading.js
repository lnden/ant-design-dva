import React, {Component} from 'react'
import {Button} from 'antd'

export default class Loadings extends Component {
    render() {
        const loading = this.props.loading;
        const onRequest = this.props.onRequest;
        return (
            <div>
                <h3>测试loading组建</h3>
                <Button onClick={() => onRequest()}>发送异步请求</Button>
                <p>{loading.global ? '数组加载中···' : '数据加载完成'}</p>
            </div>
        )
    }
}
