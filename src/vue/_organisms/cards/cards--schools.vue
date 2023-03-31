<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/store/schools'

import Card from '@/vue/_molecules/cards/card--school.vue'
import Skeleton from '@/vue/_molecules/skeletons/skeleton--schools.vue'

const schoolStore = useSchoolsStore()
const { schools } = storeToRefs(schoolStore)

</script>
<template>
    <section class="mb-16 w-full">
        <Skeleton v-if="!schools" />
        <Card 
            v-for="school in schools" 
            :key="school.id" 
            :school="school.document"
            :geo="school?.geo_distance_meters"
        />
        <span 
            v-if="schools?.length === 0" 
            class="font-primary text-sm text-gray-400 text-center block w-full pt-10"
        >
            There are no schools for your query
        </span>
    </section>
</template>