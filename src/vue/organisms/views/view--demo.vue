<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/pinia/schools'

const schoolStore = useSchoolsStore()
const { schools } = storeToRefs(schoolStore)

onMounted(async () => {
    console.log("mounted")
    schoolStore.fetch()
})
</script>
<template>
    schools
</template>