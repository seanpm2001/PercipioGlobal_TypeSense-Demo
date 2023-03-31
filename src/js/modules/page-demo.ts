import { createApp } from 'vue'

import VueClickAway from "vue3-click-away"

const main = async () => {
    const { default: ModulePageDemo } = await import('@/vue/modules/ModulePageDemo.vue')
    const app = createApp(ModulePageDemo)

    app.use(VueClickAway)

    return app.mount('#page-demo-container')
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
