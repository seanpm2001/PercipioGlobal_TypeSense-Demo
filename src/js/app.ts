import App from '@/vue/App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCodeHighlight from 'vue-code-highlight'

// Import font awesome icons
import './assets/icons'

// Import our CSS
import '@/css/app.pcss'

// App main
const main = async () => {
    const pinia = createPinia()
    const app = createApp(App)

    app.use(pinia)
    app.use(VueCodeHighlight)

    return app.mount('#app-container')
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