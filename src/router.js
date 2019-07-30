import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Delaylist from './routes/delayList'

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/products" component={Products} />
                <Route path="/delaylist" component={Delaylist} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
