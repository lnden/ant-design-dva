import {delay} from '../services/public'

export default {
    namespace: 'load',
    state: {},
    subscriptions: {},
    effects: {
        * change({payload}, {call, put, select}) {
            console.log('2、其次执行异步操作')
            const other = yield select(); //{ products,loading,load,count,delaylist }
            console.log('2.2、获取其他models里面的数据',other);
            yield call(delay, 1000);
            yield put({
                type: 'delay'
            })
        }
    },
    reducers: {
        change(state, action) {
            console.log('1、首先执行同步操作')
            return state;
        },
        delay(state, action) {
            console.log('3、延迟1000毫秒之后')
            return state
        }
    }
}
