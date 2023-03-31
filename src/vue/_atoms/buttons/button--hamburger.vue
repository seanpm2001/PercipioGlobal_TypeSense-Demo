<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useNavigationStore } from '@/js/store/navigation'

const navigationStore = useNavigationStore()
const { expanded } = storeToRefs(navigationStore)

const onToggle = () => {
    navigationStore.toggle()
}
</script>
<template>
    <div>
        <button
            aria-label="navigation-toggle"
            data-tag-action="click"
            data-tag-category="navigation" 
            data-tag-label="hamburger"
            data-tag-type="primary"
            @click="onToggle"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xml:space="preserve" 
                viewBox="0 0 40 48" 
                class="w-10"
            >
                <path 
                    fill="#F8FAFC" 
                    fill-rule="evenodd" 
                    d="m20 47 20-11.5L20 24 0 35.5 20 47z" 
                    clip-rule="evenodd" 
                    :class="[
                        'transition-all ease-in-out duration-500',
                        expanded ? '' : '-translate-y-[5px] hamburger-hover-bottom-animation'
                    ]"
                />
                <path 
                    fill="#0052FF" 
                    fill-rule="evenodd" 
                    d="m20 35 20-11.5L20 12 0 23.5 20 35z"
                    clip-rule="evenodd"
                />
                <path 
                    fill="#E6005E" 
                    fill-rule="evenodd" 
                    d="m20 23 20-11.5L20 0 0 11.5 20 23z" 
                    clip-rule="evenodd" 
                    :class="[
                        'transition-all ease-in-out duration-500',
                        expanded ? '' : 'translate-y-[5px] hamburger-hover-top-animation'
                    ]"
                />
            </svg>
        </button>
    </div>
</template>