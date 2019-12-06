export const state = () => ({
    list: [],
    watch: {}
})

export const mutations = {
    set (state, watch) {
        state.list = watch
    },
    add (state, value) {
        Object.assign(state.list, {}, value)
    },
    remove (state, { watch }) {
        state.list.filter(c => watch.id !== c.id)
    }
}

export const actions = {
    async get ({ commit }) {
        await this.$axios.post('http://localhost:2017/public/watch/read')
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    commit('set', res.data.watches)
                }
            })
    }
}
