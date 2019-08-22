import React, { Component } from 'react'
import { Card,Button,Table } from 'antd'

export default class Order extends Component {

    state={}
    componentDidMount(){
        this.requestList()
    }

    requestList = () => {

    }

    render() {
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn'
            },
            {
                title:'用户名',
                dataIndex:'user_name'
            },
            {
                title:'手机号',
                dataIndex:'mobile'
            },
            {
                title:'里程',
                dataIndex:'distance'
            },
            {
                title:'行驶时长',
                dataIndex:'total_time'
            },
            {
                title:'状态',
                dataIndex:'status'
            },
            {
                title:'开始时间',
                dataIndex:'start_time'
            },
            {
                title:'结束时间',
                dataIndex:'end_time'
            },
            {
                title:'订单金额',
                dataIndex:'total_fee'
            },
            {
                title:'实付金额',
                dataIndex:'user_pay'
            }
        ]
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button>订单详情</Button>
                    <Button>结束订单</Button>
                </Card>
                <div className="content-type">
                    <Table
                        borderd
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.StaticRange.pagination}
                    />
                </div>
            </div>
        )
    }
}


class FilterForm extends Component {
    render(){
        return (
            <div>
                测试
            </div>
        )
    }
}
