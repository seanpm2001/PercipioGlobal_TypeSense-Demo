<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useDemoStore } from '@/js/store/demo'

import LineBottom from '@/vue/_atoms/lines/line--bottom.vue'
import LineTop from '@/vue/_atoms/lines/line--top.vue'

const demoStore = useDemoStore()
const { result } = storeToRefs(demoStore)

</script>

<template>
    <div 
        v-if="result"
        :class="[
            'container max-screen-xl px-0 mx-auto relative',
            'bg-slate-900/20 backdrop-blur-sm',
            'rounded-2xl border border-slate-700',
            'scrollbar-hide',
            'mb-12'
        ]"
    >
        <LineTop />
        <LineBottom color="pink" />

        <div class="overflow-auto p-10 max-h-[60vh]">
            <pre class="p-10 w-full text-white"><code>{{ JSON.stringify(JSON.parse(result), null, 2) }}</code></pre>
        </div>
    </div>
</template>