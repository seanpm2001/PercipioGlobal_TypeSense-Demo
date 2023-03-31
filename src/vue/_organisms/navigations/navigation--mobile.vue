<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useNavigationStore } from '@/js/store/navigation'

interface Props {
    navigation: any
}

defineProps<Props>()

const navigationStore = useNavigationStore()
const { expanded } = storeToRefs(navigationStore)
</script>
<template>
    <nav 
        :class="[
            expanded ? 'top-20' : '-top-[100vh]',
            'fixed left-[10px]',
            'transition-all duration-1000 ease-navigation',
            'flex items-center justify-center text-center',
            'z-20',
            'backdrop-blur-md rounded-2xl border border-slate-700',
            'w-[calc(100vw-20px)] h-[calc(100vh-100px)]',
        ]"
        aria-hidden="true"
    >
        <ul class="space-y-7">
            <li
                v-for="item in navigation"
                :key="item.url"
            >
                <a 
                    :href="item.url"
                    class="font-primary text-slate-300 text-4xl font-bold"
                >
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </nav>
</template>