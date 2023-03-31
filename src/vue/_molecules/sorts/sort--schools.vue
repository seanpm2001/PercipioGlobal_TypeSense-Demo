<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/store/schools'
import { useIcons } from '@/js/composables/useIcons'

interface Props {
    utilities?: string
}

withDefaults(defineProps<Props>(), {
    utilities: ''
})

const schoolStore = useSchoolsStore()
const { sorting, coords } = storeToRefs(schoolStore)
const show = ref(false)

const sortTitle = computed(() => {
    if (sorting.value.type.indexOf('location') > -1) {
        return 'Location'
    }

    return sorting.value.type
})

const onToggleDropdown = () => {
    show.value = !show.value
}

const onHideDropdown = () => {
    show.value = false
}

const onSetSort = (type) => {
    schoolStore.setSort(type)
    onHideDropdown()
}
</script>
<template>
    <div class="flex relative items-center pl-4">
        <span class="font-primary text-sm text-gray-400">Sort:&nbsp;</span>
        <button 
            :class="[
                'text-center rounded-md mx-auto',
                'flex items-center print:hidden',
                'transition-colors duration-200 ease-in-out',
                'text-white bg-metaseed-blue-500',
                'focus:outline focus:outline-4 focus:outline-metaseed-blue-900',
                'font-primary text-sm font-semibold',
                'hover:bg-blue-700',
                'py-2 px-4',
                utilities
            ]"
            @click="onToggleDropdown"
        >
            <span class="capitalize">{{ sortTitle }}</span>
            <i :class="['ml-2 inline-flex', useIcons('chevron-down')]" />
        </button>

        <nav 
            v-if="show"
            v-click-away="onHideDropdown"
            aria-label="Sort Schools"
            class="absolute min-w-[200px] bg-white top-full mt-2 right-0 rounded-xl shadow-2xl border border-blue-500/30 overflow-hidden"
        >
            <ul
                role="menubar"
                aria-label="Sort Schools"
            >
                <li role="none">
                    <a 
                        href="#"
                        class="block font-primary text-sm text-blue-500 font-medium py-2 px-4 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                        @click.prevent="onSetSort('title')"
                    >
                        Title
                    </a>
                </li>
                <li 
                    v-if="coords"
                    role="none"
                >
                    <a 
                        href="#"
                        class="block font-primary text-sm text-blue-500 font-medium py-2 px-4 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
                        @click.prevent="onSetSort('geolocation')"
                    >
                        Location
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>