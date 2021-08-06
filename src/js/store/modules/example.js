export default {
    state: {
        count: 1
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    }
}