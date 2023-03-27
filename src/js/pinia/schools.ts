import { defineStore } from 'pinia'
import { useSearchParameters, useTypesenseClient } from '../composables/typesense'
import { SchoolsState, Hit, Coords, Filters } from '../interfaces/schools'

export const useSchoolsStore = defineStore('schools', {
    state: (): SchoolsState => ({
        currentPage: 0,
        coords: null,
        events: {
            LOADING: true,
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
        setUserCoords(coords: Coords) {
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
                .then((results: any) => {
                    this.facets = results.facet_counts
                    this.currentPage = results.page
                    this.totalPages = Math.ceil(results.found / this.limit)
                    this.totalResults = results.out_of
                    this.meta = `${ results.found } results found from ${ results.out_of } docs in ${ results.search_time_ms }ms`

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

        setSort(type: string) {
            if(type === 'geolocation' && this.coords) {
                this.sorting.type = `${type}(${this.coords.latitude}, ${this.coords.longitude})`
            } else {
                this.sorting.type = type
            }

            this.fetch()
        },

        setSearch(search: string) {
            this.filters.searchQuery = search
            this.fetch()
        },

        setFilters(type: keyof Filters, value: string) {
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

            // if (this.filters.geoLocation.values.length > 0) {
            //     this.filters.filterQuery += `${this.filters.geoLocation.field}:=(${this.coords.latitude},${this.coords.longitude}, ${this.filters.geoLocation.values} km) ${this.filters.geoLocation.combination}`
            // }

            this.filters.filterQuery = this.filters.filterQuery.substring(0, this.filters.filterQuery.lastIndexOf(' && '))

            // this.filters.filterQuery = 'localAuthority:=[`Milton Keynes`,`North West Leicestershire`] && schoolType:=[`Childcare on non-domestic premises`]'
        },
        
        // async fetchGeo(reset = true, coords: any) {
        //     this.events.LOADING = true

        //     const client = useTypesenseClient()

        //     this.sorting.type = `geolocation(${coords.latitude},${coords.longitude})`
        //     this.sorting.order = 'asc'

        //     const searchParameters = useSearchParameters(this.filters, this.sorting)

        //     // reset for new query or add up for paginations
        //     if(!reset) {
        //         this.currentPage += 1
        //     } else {
        //         this.currentPage = 1
        //         this.totalPages = 0
        //         this.totalResults = null
        //     }

        //     await client
        //         .collections(this.index)
        //         .documents()
        //         .search({
        //             facet_by: 'localAuthority,schoolType',
        //             filter_by: `geolocation:(${coords.latitude},${coords.longitude})`,
        //             max_facet_values: 100,
        //             per_page: this.limit,
        //             page: this.currentPage,
        //             ...searchParameters,
        //         })
        //         .then((results: any) => {
        //             this.facets = results.facet_counts
        //             this.currentPage = results.page
        //             this.totalPages = Math.ceil(results.found / this.limit)
        //             this.totalResults = results.out_of

        //             if (results.hits) {
        //                 const hits: Array<Hit> = results.hits

        //                 // set results to the projects if it's a reset otherwise add the results to the existing ones
        //                 if (reset) {
        //                     this.schools = hits
        //                 } else {
        //                     this.schools = [...(this.schools || []), ...hits]
        //                 }
        //             }

        //             this.events.LOADING = false
        //         })
        // }
    }
})