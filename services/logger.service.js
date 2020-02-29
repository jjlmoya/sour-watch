const LOGGER_DEV = false
export default class LoggerService {
    constructor ({ page = '/', level = 'info' }) {
        this.page = page
        this.level = level
    }

    log (message, object) {
        if (LOGGER_DEV) {
            console.log(`[${this.level} - ${this.page}] ${message} %o`, object)
        }
    }
}
