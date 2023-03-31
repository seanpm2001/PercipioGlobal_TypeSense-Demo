import { createApp } from 'vue'

const main = async () => {
    const { default: ModulePageLanding } = await import('@/vue/modules/ModulePageLanding.vue')
    const app = createApp(ModulePageLanding)

    return app.mount('#page-landing-container')
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
