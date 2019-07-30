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
        'delete'(state,{payload}){
            console.log(state,11)
        }
    },
    effects: {
        *deleted({payload}, {call, put, select}) {
            yield call(deplay,1000);
            yield put({type:'delete'})
        }
    }
}

function deplay(num){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },num)
    })
}
