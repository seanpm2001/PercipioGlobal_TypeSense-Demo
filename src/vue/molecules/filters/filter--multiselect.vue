<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/pinia/schools'
import { Facet } from '@/js/interfaces/schools'

interface Props {
    filter: Facet
}

const props = defineProps<Props>()

const schoolStore = useSchoolsStore()
const { filters } = storeToRefs(schoolStore)
const expanded = ref(false)

const legend = computed(() => {
    return (props.filter.field_name.charAt(0).toUpperCase() + props.filter.field_name.slice(1)).replace(/([A-Z])/g, ' $1').trim()
})

const onToggle = () => {
    expanded.value = !expanded.value
}

const onFilterUpdate = value => {
    schoolStore.setFilters(props.filter.field_name, value)
}

const onChecked = value => {
    const filteredValues = filters.value[props.filter.field_name].values ?? []
    return filteredValues.indexOf(value) > -1
}
</script>
<template>
    <fieldset>
        <legend class="border-b border-blue-500/20 w-full">
            <button 
                type="button" 
                class="font-primary flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500" 
                :aria-controls="`filter-section-${filter.field_name}`" 
                aria-expanded="false"
                @click="onToggle"
            >
                <span class="font-medium text-gray-900">
                    <span>{{ legend }}</span>
                    <span class="inline-block pl-1 text-pink-500">{{ filter.counts.length }}</span>
                </span>
                <span class="ml-6 flex items-center text-blue-500">
                    <!-- Expand icon, show/hide based on section open state. -->
                    <svg 
                        v-if="!expanded"
                        class="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        aria-hidden="true"
                    >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <!-- Collapse icon, show/hide based on section open state. -->
                    <svg 
                        v-if="expanded"
                        class="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>
            </button>
        </legend>

        <div
            :id="`filter-section-${filter.field_name}`" 
            class="pt-3"
        >
            <div class="space-y-1.5">
                <div 
                    v-for="(item, i) in filter.counts"
                    :key="item.value"
                    :class="i > 5 && !expanded ? 'hidden' : ''"
                >
                    <label 
                        class="flex items-center px-2 font-primary text-sm"
                    >
                        <input
                            :checked="onChecked(item.value)"
                            :aria-checked="onChecked(item.value) ? 'true' : 'false'"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            @input="() => onFilterUpdate(item.value)"
                        >
                        <span class="ml-3 min-w-0 flex-1 flex-1 text-gray-500">
                            <span>{{ item.value }}</span>
                            <span class="pl-1 inline-block text-xs text-pink-500">{{ item.count }}</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>  
    </fieldset>
</template>