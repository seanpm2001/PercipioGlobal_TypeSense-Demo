<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSchoolsStore } from '@/js/pinia/schools'

import ButtonLoadMore from '@/vue/atoms/buttons/button--loadmore.vue'
import Cards from '@/vue/organisms/cards/cards--schools.vue'
import Filters from '@/vue/organisms/filters/filter--demo.vue'
import Search from '@/vue/molecules/bars/bar--search.vue'
import Sort from '@/vue/molecules/sorts/sort--schools.vue'

const schoolStore = useSchoolsStore()
const { currentPage, totalPages, limit, events, coords } = storeToRefs(schoolStore)
const geo = ref(null)

const getButton = () => {
    let value = 'Load more Schools'

    if (currentPage.value && totalPages.value && limit.value) {
        value = `Load more Schools (${(totalPages.value - currentPage.value) * limit.value})`
    }

    return {
        gaLabel: currentPage.value ? currentPage.value + 1 : '1',
        gaCategory: 'Schools',
        gaAction: 'Load more',
        value: value,
    }
}

const fetchData = (reset = true) => {
    schoolStore.fetch(reset)
}

const loadMore = () => {
    fetchData(false)
}

onMounted(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            schoolStore.setUserCoords({
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
            })
            fetchData(true)
        })
    } else {
        fetchData(true)
    }
})
</script>
<template>
    <section class="grid grid-cols-7 gap-6 container max-w-screen-xl mx-auto mt-32 min-h-[80vh]">
        <div class="col-span-7 flex items-center">
            <Search utilities="flex-1"/>
            <Sort utilities="ml-3" />
        </div>
        <aside class="col-span-2 sticky top-0">
            <Filters />
        </aside>
        <main class="col-span-5">
            <Cards />

            <ButtonLoadMore
                v-if="currentPage < totalPages"
                :button="getButton()"
                :loading="events.LOADING"
                utilities="mb-16"
                @touch="loadMore"
            />
        </main>
    </section>
</template>