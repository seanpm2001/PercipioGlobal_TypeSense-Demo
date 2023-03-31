import { createApp } from 'vue'

const main = async () => {
    const { default: ModuleHero } = await import('@/vue/modules/ModuleHero.vue')
    const app = createApp(ModuleHero)

    return app.mount('#hero-container')
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
