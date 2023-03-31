import { createApp } from 'vue'

const main = async () => {
    const { default: ModuleFooter } = await import('@/vue/modules/ModuleFooter.vue')
    const app = createApp(ModuleFooter)

    return app.mount('#footer-container')
}

// // Execute async function
main().then(() => {
    console.log()
})

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log('HMR active')
    });
}
