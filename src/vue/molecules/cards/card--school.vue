<script setup lang="ts">
import { computed } from 'vue'
import { School } from '@/js/interfaces/schools'

interface Props {
    school: School,
    geo: any
}

const props = defineProps<Props>()

const kilometers = computed(() => {
    return Math.round(props.geo.geolocation / 1000)
})
</script>

<template>
    <article class="flex w-full border-b border-gray-100 p-3 font-primary text-sm">
        <div class="flex-1">
            <span class="text-xs">
                {{ school.schoolType }}
            </span>
            <h1 class="font-bold">
                {{ school.title }}
            </h1>
            <span>{{ school.street }} - {{ school.town }} - {{ school.county }}</span>
        </div>
        <div class="grow-0 shrink-0">
            <span v-if="geo">
                &#177; {{ kilometers }} km
            </span>
        </div>
    </article>
</template>