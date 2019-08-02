function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
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
    reducers: {
        delete(state, {payload}) {
            console.log('1.delete同步执行~')
            return state
        },
        realdelete(state, action) {
            console.log('3.最后执行Deleted')
            return state.filter(item=>item.id!=action.payload)
        }
    },
    effects: {
        * delete({payload}, {call, put, select}) {
            console.log('2.delete异步执行~')
            yield call(delay, 1000);
            yield put({
                type:'realdelete',
                payload:payload
            })
            console.log('4.异步延迟N秒之后执行')
        }
    }
}

