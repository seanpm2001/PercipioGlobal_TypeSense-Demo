<script setup lang="ts">
import { ref } from 'vue'
import { useIcons } from '@/js/composables/icons'

interface Props {
    utilities?: string
}

withDefaults(defineProps<Props>(), {
    utilities: ''
})

const searchTerm = ref(null)

const onUpdateSearch = () => {
    console.log("search", searchTerm.value)
}
</script>
<template>
    <div 
        :class="[
            'w-full flex items-center relative',
            'transition-colors duration-200 ease-in-out',
            'font-primary text-sm',
            'text-gray-900',
            'py-3 px-4',
            utilities
        ]"
    >
        <i :class="['inline-flex text-blue-500', useIcons('search')]" />
        <input 
            :class="[
                'absolute left-0 top-0 w-full h-full',
                'pl-10',
                'bg-transparent',
                'border-blue-500/30 border rounded-full',
                'focus:ring-2 focus:ring-offset-slate-50 focus:ring-blue-500/30',
            ]"
            placeholder="Search for a school"
            v-model="searchTerm"
            @keyup="onUpdateSearch"
        />
    </div>
</template>