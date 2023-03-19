<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/pinia/schools'

import Card from '@/vue/molecules/cards/card--school.vue'

const schoolStore = useSchoolsStore()
const { schools } = storeToRefs(schoolStore)

</script>
<template>
    <section 
        v-if="schools"
        class="mb-16 w-full rounded-xl shadow-2xl"
    >
        <Card 
            v-for="school in schools" 
            :key="school.id" 
            :school="school.document"
            :geo="school?.geo_distance_meters"
        />
    </section>
</template>