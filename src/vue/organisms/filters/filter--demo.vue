<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/pinia/schools'

import Filter from '@/vue/molecules/filters/filter--multiselect.vue'
import Skeleton from '@/vue/molecules/skeletons/skeleton--filter.vue'

const schoolStore = useSchoolsStore()
const { facets } = storeToRefs(schoolStore)

</script>

<template>
    <div>
        <div>
            <Skeleton v-if="!facets" />
        </div>
        <div
            v-for="filter in facets"
            :key="filter.field_name"
            class="mb-6"
        >
            <Filter :filter="filter" />
        </div>
    </div>
</template>