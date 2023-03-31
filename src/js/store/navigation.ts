import { defineStore } from 'pinia'

interface NavigationState {
    expanded: boolean
}

export const useNavigationStore = defineStore('navigation', {
    state: (): NavigationState => ({
        expanded: false
    }),
    actions: {
        toggle () {
            this.expanded = !this.expanded
        }
    }
})