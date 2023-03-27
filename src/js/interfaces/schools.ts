export interface School {
    readonly id: string,
    readonly title: string,
    readonly slug: string,
    readonly urn: string,
    readonly handle: string,
    readonly schoolType: string,
    readonly localAuthority: string,
    readonly nutsLevel1Code: string,
    readonly town: string,
    readonly nutsLevel1: string,
    readonly street: string,
    readonly locality: string,
    readonly county: string,
    readonly region: string,
    readonly geolocation: Array<number>,
    readonly post_date_timestamp: string,
}

export interface Events {
    LOADING: boolean
    UPDATE: boolean
}

export interface FacetCount {
    count: number,
    highlighted: string,
    value: string,
}

export interface Facet {
    counts: Array<FacetCount>,
    field_name: string,
    stats: Stats,
}

export interface Stats {
    total_values: number
}

export interface Queries extends Filters {
    searchQuery: string,
    filterQuery: string,
}

export interface Filter {
    field: string,
    values: Array<string>
    combination: string
}

export interface Filters {
    localAuthority: Filter,
    schoolType: Filter,
    // geoLocation: Filter
}

export interface Hit {
    document?: School
    highlights: Array<string>
    text_match: number
}

export interface Sort {
    type: string,
    order: string,
}

export interface Coords {
    latitude: string,
    longitude: string
}

export interface SchoolsState {
    currentPage: number
    coords: Coords | null
    events: Events
    facets: Array<Facet> | null
    filters: Queries
    index: string | undefined
    limit: number
    schools?: Array<Hit> | null
    sorting: Sort
    totalPages: number | null
    totalResults: number | null
    meta: string
}