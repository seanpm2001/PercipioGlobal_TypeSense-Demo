// Configure the metaseed api endpoint
export const configureMetaseedApi = (url: string) => ({
    baseURL: url,
    timeout: 6000,
});

// Execute a Metaseed query by sending an XHR to our api endpoint
export const executeMetaseedQuery = async (api: any, query: any, callback: any, extraParams: any = {}) => {
    // Execute the GQL query
    try {
        const response = await api.get('', {
            params: {
                query: query,
                mode: 'legacy',
                ...extraParams
            }
        })

        if (callback && response.data) {
            callback(response.data);
        }

        // Log any errors
        if (response.errors) {
            console.error(response.errors);
        }

    } catch (error) {
        callback({
            suggestions: [],
            status: 404
        })
    }
}

export const executeMetaseedBatch = async (api: any, batch: string, callback: any) => {
    // Execute the GQL query
    try {
        const response = await api.get('', {
            params: {
                batch: batch,
                mode: 'legacy'
            }
        })

        if (callback && response.data) {
            callback(response.data);
        }

        // Log any errors
        if (response.errors) {
            console.error(response.errors);
        }

    } catch (error) {
        callback({
            suggestions: [],
            status: 404
        })
    }
}