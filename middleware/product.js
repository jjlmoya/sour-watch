import LoggerService from '@/services/logger.service'
const loggerService = new LoggerService({ page: 'middleware', level: 'info' })

export default async function ({ route, store }) {
    await store.dispatch('watches/get')
    await store.dispatch('collection/get')
    loggerService.log(route.params.id)
    if (route && route.params && route.params.id) {
        loggerService.log('Prueba')
        if (route.name === 'collekciya-id') {
            store.commit('collection/set', route.params.id)
        }
        if (route.name === 'chasy-id' || route.name === 'checkout-id') {
            store.commit('watches/id', route.params.id)
        }
    }
}
