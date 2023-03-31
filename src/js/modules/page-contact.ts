import { createApp } from 'vue'

const main = async () => {
    const { default: ModulePageContact } = await import('@/vue/modules/ModulePageContact.vue')
    const app = createApp(ModulePageContact)

    return app.mount('#page-contact-container')
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
