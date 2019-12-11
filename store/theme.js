export const state = () => ({
    theme: '',
    brands: [],
    campaings: {
        blackfriday: {
            name: 'blackfriday',
            class: 'blackfriday',
            unique: true
        },
        winter: {
            name: 'winter',
            class: 'winter'
        }
    }
})

export const mutations = {
    set (state, theme) {
        state.theme = theme
    }
}
