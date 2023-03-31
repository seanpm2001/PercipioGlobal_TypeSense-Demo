import Typesense from 'typesense'

export interface SearchParameters {
    'q': string,
    'query_by': string,
    'sort_by': string,
}

export const useTypesenseClient = (protocol = 'https', port = 443): any => {
    return new Typesense.Client({
        'nearestNode': {
            'host': 'jsw6qlvdby0p49z5p.a1.typesense.net',
            'port': port,
            'protocol': protocol,
        },
        'nodes': [
            {
                'host': 'jsw6qlvdby0p49z5p-1.a1.typesense.net',
                'port': port,
                'protocol': protocol,
            },
            {
                'host': 'jsw6qlvdby0p49z5p-2.a1.typesense.net',
                'port': port,
                'protocol': protocol,
            },
            {
                'host': 'jsw6qlvdby0p49z5p-3.a1.typesense.net',
                'port': port,
                'protocol': protocol,
            },
        ],
        'apiKey': 'brJutbUUNMesXVebvDVWQd0wIaGbzpDg',
        'connectionTimeoutSeconds': 2
    })
}

export const useSearchParameters = (searchParams: any, sortParams: any): SearchParameters => {

    const searchParameters = {
        'q': searchParams?.searchQuery === '' ? '*' : searchParams?.searchQuery,
        'query_by': 'title',
        'filter_by': searchParams?.filterQuery,
        'sort_by': sortParams.type + ':' + sortParams.order,
    }

    return searchParameters

}

export const useTimeout = (): void => {
    console.log("timeout")
}