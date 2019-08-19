import dva from 'dva';
import createLoading from 'dva-loading'
import createImmer from 'dva-immer'
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        products: [
            {name: 'dva', id: 1},
            {name: 'antd', id: 2},
        ],
    },
});

// 2. Plugins
// app.use({});
app.use(createLoading());
app.use(createImmer());

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/delayList').default);
app.model(require('./models/loading').default);
app.model(require('./models/count').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
