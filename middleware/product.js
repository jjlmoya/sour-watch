export default async function ({ route, store }) {
    await store.dispatch('watches/get')
    await store.dispatch('collection/get')
    if (route && route.params && route.params.id) {
        if (route.name === 'collekciya-id') {
            store.commit('collection/set', route.params.id)
        }
        if (route.name === 'chasy-id') {
            store.commit('watches/id', route.params.id)
        }
    }
}
