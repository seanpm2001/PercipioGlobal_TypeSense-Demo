import { createApp } from 'vue'

const main = async () => {
    const { default: ModuleNavigation } = await import('@/vue/modules/ModuleNavigation.vue')
    const app = createApp(ModuleNavigation)

    return app.mount('#navigation-container')
}

// Execute async function
main().then(() => {
    console.log()
})

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR active')
    });
}
