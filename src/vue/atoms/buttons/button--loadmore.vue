<script setup lang="ts">
import { useIcons } from '@/js/composables/icons'

interface Props {
    button: any,
    loading: boolean,
    utilities: string
}

withDefaults(defineProps<Props>(), {
    loading: false,
    utilities: ''
})

const emit = defineEmits(['touch'])

</script>
<template>
    <button 
        data-tag-ga4-action="click" 
        data-tag-ga4-category="button" 
        data-tag-ga4-label="loadmore"
        :data-tag-ga4-type="button?.gaCategory" 
        :aria-label="button.value" 
        :data-tag-category="button?.gaCategory"
        :data-tag-action="button?.gaAction" 
        :data-tag-label="button?.gaLabel" 
        :class="
            [
                'text-center rounded-full mx-auto',
                'flex items-center print:hidden',
                'transition-colors duration-200 ease-in-out',
                'text-white bg-blue-500',
                'focus:outline focus:outline-4 focus:outline-blue-500/30',
                'font-primary text-sm font-semibold',
                'hover:bg-blue-700',
                'py-3 px-7',
                utilities
            ]
        " 
        @click.prevent="emit('touch')"
    >
        <span>
            {{ button.value }}
        </span>

        <span v-if="loading">
            <svg 
                class="animate-spin ml-2 h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                />
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </span>

        <span v-if="!loading">
            <i :class="['ml-2 inline-flex', useIcons('chevron-down')]" />
        </span>
    </button>
</template>