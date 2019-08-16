import React from 'react'
import GlobalHeader from '../components/GlobalHeader'

export default class Home extends React.Component {
    state = {
        collapsed:false
    }

    obj = {
        name:'lily',
        age:18,
        avatar:'http://www.baidu.com'
    }

    handleMenuCollapse = collapsed => {
        this.setState({
            collapsed
        })
    };

    handleMenuClick = ({ key }) => {
        console.log(key,111)
    }

    render() {
        return (
            <main>
                主页内容
                <GlobalHeader
                    profile={this.obj}
                    notifyCount={100}
                    collapsed={this.state.collapsed}
                    onCollapse={this.handleMenuCollapse}
                    onMenuClick={this.handleMenuClick}
                />
            </main>
        )
    }
}
