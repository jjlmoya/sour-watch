export default (basePath, object, query) => {
    const params = Object.assign(object, query)
    let urlString = `${basePath}?`
    for (const key in params) {
        urlString += `${key}=${params[key]}&`
    }
    urlString.slice(-1)
    return urlString
}
