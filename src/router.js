import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import {Button} from 'antd'
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Delaylist from './routes/delayList'

function RouterConfig({history}) {
    function handleClick(){
        history.push('/')
    }
    return (
        <section>
            <p style={{padding: '10px'}}><Button onClick={handleClick}>返回首页</Button></p>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={IndexPage}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/delaylist" component={Delaylist}/>
                </Switch>
            </Router>
        </section>

    );
}

export default RouterConfig;
