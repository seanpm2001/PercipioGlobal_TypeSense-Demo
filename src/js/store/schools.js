import { defineStore } from 'pinia'
import { useSearchParameters, useTypesenseClient } from '../composables/useTypesense'

export const useSchoolsStore = defineStore('schools', {
    state: () => ({
        currentPage: 0,
        coords: null,
        events: {
            LOADING: true,
            UPDATE: false,
        },
        facets: null,
        filters: {
            searchQuery: '',
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
            },
            // geoLocation: {
            //     field: 'geolocation',
            //     values: [],
            //     combination: '&&'
            // }          
        },
        index: 'schools',
        limit: 50,
        schools: null,
        sorting: {
            type: 'title',
            order: 'asc',
        },
        totalPages: 0,
        totalResults: 0,
        meta: ''
    }),
    persist: true,
    actions: {
        setUserCoords(coords) {
            this.coords = coords
        },
        async fetch(reset = true) {
            this.events.LOADING = true

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
                .then((results) => {
                    this.facets = results.facet_counts
                    this.currentPage = results.page
                    this.totalPages = Math.ceil(results.found / this.limit)
                    this.totalResults = results.out_of
                    this.meta = `${ results.found } results found from ${ results.out_of } docs in ${ results.search_time_ms }ms`

                    if (results.hits) {
                        const hits = results.hits

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

        setSort(type) {
            if(type === 'geolocation' && this.coords) {
                this.sorting.type = `${type}(${this.coords.latitude}, ${this.coords.longitude})`
            } else {
                this.sorting.type = type
            }

            this.fetch()
        },

        setSearch(search) {
            this.filters.searchQuery = search
            this.fetch()
        },

        setFilters(type, value) {
            if (this.filters[type]?.values.indexOf(value) < 0) {
                this.filters[type].values.push(value)
            } else {
                this.filters[type].values = this.filters[type].values.filter(item => item !== value)
            }

            this.setFiltersQuery()
            this.fetch()
        },

        setFiltersQuery() {
            this.filters.filterQuery = ''

            if (this.filters.localAuthority.values.length > 0) {
                this.filters.filterQuery += this.filters.localAuthority.field + ':=[' + "`" + this.filters.localAuthority.values.join("`,`") + "`" + '] ' + this.filters.localAuthority.combination + ' '
            }

            if (this.filters.schoolType.values.length > 0) {
                this.filters.filterQuery += this.filters.schoolType.field + ':=[' + "`" + this.filters.schoolType.values.join("`,`") + "`" + '] ' + this.filters.schoolType.combination + ' '
            }

            this.filters.filterQuery = this.filters.filterQuery.substring(0, this.filters.filterQuery.lastIndexOf(' && '))

        },
    }
})