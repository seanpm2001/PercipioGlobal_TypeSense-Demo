<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useDemoStore } from '@/js/store/demo'

const demoStore = useDemoStore()
const { filter } = storeToRefs(demoStore)
const query = ref(null)
const searchInput = ref(null)
const loading = ref(false)
const placeholder = ref({
    'schools': 'school name',
    'postcode': 'postcode',
    'geo': 'geo location'
})

const onSearch = evt => {
    if (evt.keyCode !== 27) {
        query.value = evt.currentTarget.innerText
        loading.value = true
        
        if (typeof window.throttle !== 'undefined') {
            clearTimeout(window.throttle)
        }

        window.throttle = setTimeout(() => {
            demoStore.search(query.value)
            loading.value = false
        }, 350)
    }
}

const onSelect = term => {
    query.value = term
    searchInput.value.innerText = term
    loading.value = true
    demoStore.search(query.value)
}

const reset = () => {
    query.value = null
    searchInput.value.focus()
    searchInput.value.innerText = ''
}

watch(filter, () => {
    if (filter.value) {
        reset()
    }
})

onMounted(() => {
    reset()
})

</script>

<template>
    <div>
        <span class="font-primary text-xl md:text-2xl lg:text-3xl text-white md:whitespace-nowrap text-center">
            <span>GET api.meetaseed.io/{{ filter }}/</span>
            <span class="relative text-left block w-full md:inline">
                <span 
                    ref="searchInput"
                    role="textbox"
                    class="md:absolute top-0 left-0 block md:inline-block md:overflow-hidden md:w-[20vw]"
                    contenteditable
                    @keyup="onSearch"
                />
                <span 
                    :class="[
                        query ? 'opacity-0' : 'opacity-20',
                        'absolute left-0 top-0 md:static pointer-events-none'
                    ]"
                >
                    {{ placeholder[filter] ?? '...' }}
                </span>
            </span>
            <!-- <input 
                v-model="query"
                type="text"
                class="bg-transparent text-white font-primary bg-red-500 inline"
                placeholder="school"
                autofocus
                @keyup="onSearch"
            > -->
        </span>

        <!-- school fast searches -->
        <div 
            v-if="filter === 'schools'"
            class="font-primary text-xl text-slate-500 mt-8"
        >
            <span>Try: </span>
            <a 
                href="#"
                title="st marys prittlewell"
                data-tag-category="navigation"
                data-tag-type="demo"
                data-tag-action="click"
                data-tag-label="st marys prittlewell"
                class="underline"
                @click.prevent="onSelect('st marys prittlewell')"
            >st marys prittlewell</a>, 
            <a 
                href="#"
                title="edale primary"
                data-tag-category="navigation"
                data-tag-type="demo"
                data-tag-action="click"
                data-tag-label="edale primary"
                class="underline"
                @click.prevent="onSelect('edale primary')"
            >edale primary</a>, 
            <a 
                href="#"
                title="temple sutton"
                data-tag-category="navigation"
                data-tag-type="demo"
                data-tag-action="click"
                data-tag-label="temple sutton"
                class="underline"
                @click.prevent="onSelect('temple sutton')"
            >temple sutton</a>
        </div>
    </div>
</template>