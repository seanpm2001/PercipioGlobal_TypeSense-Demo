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
            v-for="index in 2"
            :key="index"
            class="mb-6"
        >
            <div class="border-b border-gray-200">
                <div class="bg-slate-600 h-4 w-4/5 rounded-2xl animate-pulse mb-5" />
            </div>
            <div class="mt-5">
                <div class="bg-slate-500 h-4 w-3/5 rounded-2xl animate-pulse mb-5" />
                <div class="bg-slate-500 h-4 w-full rounded-2xl animate-pulse mb-5" />
                <div class="bg-slate-500 h-4 w-4/6 rounded-2xl animate-pulse mb-5" />
                <div class="bg-slate-500 h-4 w-3/7 rounded-2xl animate-pulse mb-5" />
            </div>
        </div>
    </div>
</template>