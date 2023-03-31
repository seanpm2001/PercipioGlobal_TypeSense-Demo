<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useDemoStore } from '@/js/store/demo'

const filters = ref({
    'schools': 'Schools',
})

// 'postcode': 'Postcode',
// 'geo': 'Geo Location'

const demoStore = useDemoStore()
const { filter } = storeToRefs(demoStore)

const filterIndex = key => {
    return Object.keys(filters.value).indexOf(key)
}

const filtersCount = computed(() => {
    return Object.keys(filters.value).length
})

const onFilter = key => {
    demoStore.setFilter(key)
}
</script>
<template>
    <div class="flex justify-center">
        <button 
            v-for="(value, key) in filters"
            :key="key"
            :class="[
                'text-white px-7 py-3 font-primary font-medium border',
                'hover:bg-metaseed-blue-800',
                'transition-all ease-in-out duration-1000',
                filterIndex(key) === 0 ? 'rounded-tl-3xl rounded-bl-3xl' : 'border-l-0',
                filterIndex(key) === filtersCount - 1 ? 'rounded-tr-3xl rounded-br-3xl' : '',
                filter === key ? 'bg-metaseed-blue-500' : 'bg-slate-600/50 backdrop-blur-sm'
            ]"
            data-tag-action="click"
            data-tag-category="demo"
            :data-tag-label="value"
            data-tag-type="filter"
            @click="() => onFilter(key)"
        >
            <span>{{ value }}</span>
        </button>
    </div>
</template>