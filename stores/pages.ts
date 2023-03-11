export const usePageStore = defineStore('page', {
    state: () => ({
        pages: [
            {
                title: 'Home',
                icon: 'mdi-home',
                path: '/'
            },
            {
                title: 'Color Scheme Generator',
                icon: 'mdi-palette',
                path: '/palette'
            }
        ],
    }),
    getters: {
    },
    actions: {}
})