<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/pinia/schools'

import Filter from '@/vue/molecules/filters/filter--multiselect.vue'

const schoolStore = useSchoolsStore()
const { facets } = storeToRefs(schoolStore)

</script>

<template>
    <div
        v-for="filter in facets"
        :key="filter.field_name"
        class="mb-6"
    >
        <Filter :filter="filter" />
    </div>
</template>