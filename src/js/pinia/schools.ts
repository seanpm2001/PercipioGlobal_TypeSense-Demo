import { defineStore } from 'pinia'
import { useSearchParameters, useTypesenseClient } from '../composables/typesense'
import { SchoolsState, Hit } from '../interfaces/schools'

export const useSchoolsStore = defineStore('schools', {
    state: (): SchoolsState => ({
        currentPage: 1,
        events: {
            LOADING: false,
            UPDATE: false,
        },
        facets: null,
        filters: {
            searchQuery: '*',
            filterQuery: '',
            localAuthority: {
                field: 'localAuthority',
                values: [],
                combination: '&&'
            },
            schoolType: {
                field: 'schoolType',
                values: [],
                combination: '&&'
            }            
        },
        index: 'schools',
        limit: 50,
        schools: null,
        sorting: {
            type: 'post_date_timestamp',
            order: 'desc',
        },
        totalPages: 0,
        totalResults: 0,
    }),
    actions: {
        async fetch(reset = true) {
            const client = useTypesenseClient()
            const searchParameters = useSearchParameters(this.filters, this.sorting)

            // reset for new query or add up for paginations
            if(!reset) {
                this.currentPage += 1
            } else {
                this.currentPage = 1
                this.totalPages = 0
                this.totalResults = null
            }

            await client
                .collections(this.index)
                .documents()
                .search({
                    facet_by: 'localAuthority,schoolType',
                    max_facet_values: 100,
                    per_page: this.limit,
                    page: this.currentPage,
                    ...searchParameters,
                })
                .then((results: any) => {
                    this.facets = results.facet_counts
                    this.currentPage = results.page
                    this.totalPages = Math.ceil(results.found / this.limit)
                    this.totalResults = results.out_of
                    
                    if (results.hits) {
                        const hits: Array<Hit> = results.hits

                        // set results to the projects if it's a reset otherwise add the results to the existing ones
                        if (reset) {
                            this.schools = hits
                        } else {
                            this.schools = [...(this.schools || []), ...hits]
                        }
                    }

                    this.events.LOADING = false
                })
        },
        
        async fetchGeo(reset = true, coords: any) {
            const client = useTypesenseClient()

            this.sorting.type = `geolocation(${coords.latitude},${coords.longitude})`
            this.sorting.order = 'asc'

            const searchParameters = useSearchParameters(this.filters, this.sorting)

            // reset for new query or add up for paginations
            if(!reset) {
                this.currentPage += 1
            } else {
                this.currentPage = 1
                this.totalPages = 0
                this.totalResults = null
            }

            await client
                .collections(this.index)
                .documents()
                .search({
                    facet_by: 'localAuthority,schoolType',
                    filter_by: `geolocation:(${coords.latitude},${coords.longitude})`,
                    max_facet_values: 100,
                    per_page: this.limit,
                    page: this.currentPage,
                    ...searchParameters,
                })
                .then((results: any) => {
                    this.facets = results.facet_counts
                    this.currentPage = results.page
                    this.totalPages = Math.ceil(results.found / this.limit)
                    this.totalResults = results.out_of

                    console.log(this.currentPage, this.totalPages, this.totalResults)
                    
                    if (results.hits) {
                        const hits: Array<Hit> = results.hits

                        // set results to the projects if it's a reset otherwise add the results to the existing ones
                        if (reset) {
                            this.schools = hits
                        } else {
                            this.schools = [...(this.schools || []), ...hits]
                        }
                    }

                    this.events.LOADING = false
                })
        }
    }
})