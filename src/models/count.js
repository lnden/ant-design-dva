export default {
    namespace: 'count',
    state: {
        count:0
    },
    subscriptions: {},
    effects: {},
    reducers: {
        add(state) {
            state.count = state.count+1
        },
        minus(state) {
            state.count = state.count-1
        }
    }
}
