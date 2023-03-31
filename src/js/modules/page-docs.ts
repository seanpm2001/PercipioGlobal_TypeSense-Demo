import { createApp } from 'vue'

const main = async () => {
    const { default: ModulePageDocs } = await import('@/vue/modules/ModulePageDocs.vue')
    const app = createApp(ModulePageDocs)

    return app.mount('#page-docs-container')
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
