export const state = () => ({
    list: [],
    selected: {}
})

export const mutations = {
    setCollections (state, collection) {
        state.list = collection
    },
    set (state, collection) {
        state.selected = state.list.find(c => c.slug === collection)
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
        await this.$axios.post('http://localhost:2017/public/collection/read')
            .then((res) => {
                if (res.status === 200) {
                    commit('setCollections', [...res.data.collection].sort((a, b) => (a.weight < b.weight) ? 1 : -1))
                }
            })
    },
    set ({ commit }) {
        commit('setSelected', this.store.list.find(c => c.name === 1))
    }
}
