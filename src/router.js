import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import {Button} from 'antd'
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Delaylist from './routes/delayList'
import Loading from './routes/loading.js'
import Count from './routes/Count.js'

function RouterConfig({history}) {
    function handleClick() {
        history.push('/')
    }

    return (
        <section>
            <div style={{padding: '20px'}}>
                <p><Button onClick={handleClick}>返回首页</Button></p>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={IndexPage}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/delaylist" component={Delaylist}/>
                        <Route path="/loading" component={Loading}/>
                        <Route path="/count" component={Count}/>
                    </Switch>
                </Router>
            </div>

        </section>

    );
}

export default RouterConfig;
