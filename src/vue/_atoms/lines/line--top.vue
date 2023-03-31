<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
    color?: string,
    delayed?: boolean
}

withDefaults(defineProps<Props>(), {
    color: 'blue',
    delayed: false
})

const visible = ref(false)

onMounted(() => {
    setTimeout(() => {
        visible.value = true
    }, Math.floor(Math.random() * (8000 - 1000) + 1000))
})

</script>
<template>
    <div 
        v-if="visible"
        :class="[
            `background-gradient-${color}`,
            delayed ? 'background-animate-delayed' : '',
            'absolute right-[13px] top-0 -mt-px h-px w-[calc(100%-26px)] background-animate pointer-events-none z-10'
        ]"
    >
        <div class="absolute left-0 top-0 h-px w-1/5 bg-gradient-to-r from-slate-700 to-transparant" />
        <div class="absolute right-0 top-0 h-px w-1/5 bg-gradient-to-l from-slate-700 to-transparant" />
    </div>
</template>