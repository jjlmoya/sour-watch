import LoggerService from '@/services/logger.service'
const loggerService = new LoggerService({ page: 'middleware watches', level: 'info' })

export const mutations = {
    setProducts (state, watch) {
        state.list = watch
    },
    setSelected (state, watch) {
        state.selected = watch
    },
    id (state, value) {
        state.selected = state.list.find(c => c.model === value)
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
                    commit('setProducts', res.data.watches)
                }
            })
    },
    setWatch ({ commit }) {
        loggerService.log('commit', commit)
        commit('setSelected', this.store.watch.find(w => w.id === 1))
    }
}
