<script setup lang="ts">
interface Props {
    utilities?: string
}

withDefaults(defineProps<Props>(), {
    utilities: ''
})
</script>

<template>
    <div
        :class="[
            'w-full',
            utilities
        ]"
    >
        <div 
            v-for="index in 6"
            :key="index"
            class="w-full border-b border-blue-500/20 p-3 font-primary text-sm"
        >
            <div class="bg-slate-500 h-2 w-1/6 rounded-2xl animate-pulse mb-2" />
            <div class="bg-slate-600 h-4 w-3/5 rounded-2xl animate-pulse mb-2" />
            <div class="bg-slate-500 h-3 w-1/5 rounded-2xl animate-pulse" />
        </div>
    </div>
</template>