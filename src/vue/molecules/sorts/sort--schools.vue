<script setup lang="ts">
import { ref } from 'vue'
import { useIcons } from '@/js/composables/icons'

interface Props {
    utilities?: string
}

withDefaults(defineProps<Props>(), {
    utilities: ''
})

const show = ref(false)

const onToggleDropdown = () => {
    show.value = !show.value
}
</script>
<template>
    <div class="flex relative items-center pl-4">
        <span class="font-primary text-sm text-gray-500">Sort:&nbsp;</span>
        <button 
            :class="[
                'text-center rounded-full mx-auto',
                'flex items-center print:hidden',
                'transition-colors duration-200 ease-in-out',
                'text-white bg-blue-500',
                'focus:outline focus:outline-4 focus:outline-blue-500/30',
                'font-primary text-sm font-semibold',
                'hover:bg-blue-700',
                'py-2 px-5',
                utilities
            ]"
            @click="onToggleDropdown"
        >
            <span>Title</span>
            <i :class="['ml-2 inline-flex', useIcons('chevron-down')]" />
        </button>

        <nav 
            v-if="show"
            aria-label="Sort Schools"
            class="absolute px-4 min-w-[200px] bg-white top-full mt-2 right-0 rounded-xl shadow-2xl border border-blue-500/30"
        >
            <ul role="menubar" aria-label="Sort Schools">
                <li role="none" class="font-primary text-sm text-blue-500 font-medium py-2">Title</li>
                <li role="none" class="font-primary text-sm text-blue-500 font-medium py-2">Location</li>
            </ul>
        </nav>
    </div>
</template>