function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(()=>{
            return resolve(1)
        }, timeout);
    });
}

export default {
    namespace: 'delaylist',
    state: [
        {name: 'learn React', id: 1},
        {name: 'learn Redux', id: 2},
        {name: 'learn Dva', id: 3},
        {name: 'learn Umi', id: 4}
    ],
    subscriptions: {},
    effects: {
        * delete({payload}, {call, put, select,all,race}) {
            console.log('2.delete异步执行~')
            yield call(delay, 1000);
            yield put({
                type: 'realdelete',
                payload: payload
            })
            console.log('4.异步延迟N秒之后执行')

            const otherState = yield select()
            console.log(otherState, '获取其他model里面的state')

            const [result1, result2] = yield all([
                call(delay, 1000),
                call(delay, 2000)
            ])
            console.log(result1,result2)
            const [result3, result4] = yield race([
                call(delay, 2000),
                call(delay, 1000)
            ])
            console.log(result3,result4)
        }
    },
    reducers: {
        delete(state, {payload}) {
            console.log('1.delete同步执行~')
            return state
        },
        realdelete(state, action) {
            console.log('3.最后执行Deleted')
            return state.filter(item => item.id !== action.payload)
        }
    }
}

