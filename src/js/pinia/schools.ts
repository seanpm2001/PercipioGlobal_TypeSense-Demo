import { defineStore } from 'pinia'
import { useSearchParameters, useTypesenseClient } from '../composables/typesense'
import { SchoolsState } from '../interfaces/schools'

export const useSchoolsStore = defineStore('schools', {
    state: (): SchoolsState => ({
        currentPage: 1,
        events: {
            LOADING: false,
            UPDATE: false,
        },
        facets: null,
        filters: {
            searchQuery: '',
            filterQuery: '',
        },
        index: 'schools',
        limit: 50,
        schools: null,
        sorting: {
            type: 'post_date_timestamp',
            order: 'desc',
        },
        totalPages: 0,
    }),
    actions: {
        async fetch() {
            const client = useTypesenseClient(this.searchApiKey)
            const searchParameters = useSearchParameters(this.filters, this.sorting)

            await client
                .collections(this.index)
                .documents()
                .search({
                    per_page: this.limit,
                    page: this.currentPage,
                    ...searchParameters,
                })
                .then((results: any) => {
                    console.log(results)
                })
        }
    }
})