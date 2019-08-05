export default {
    namespace: 'count',
    state: 0,
    subscriptions: {},
    effects: {},
    reducers: {
        add(state) {
            return state + 1
        },
        minus(state) {
            return state - 1
        }
    }
}
