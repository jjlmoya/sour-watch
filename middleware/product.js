export default async function ({ route, store }) {
    await store.dispatch('watches/get')
    if (route && route.params && route.params.id) {
        store.commit('watches/id', route.params.id)
    }
}
