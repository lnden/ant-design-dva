function deplay(num){
    console.log(num,111)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },num)
    })
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
        delete(state,{payload}){
            console.log(33)
        }
    },
    effects: {
        *delete({payload}, {call, put, select}) {
            console.log(22)
            yield call(deplay,1000);
            yield put({type:'delaylist/delete'})
        }
    }
}

