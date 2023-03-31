import { defineStore } from 'pinia'
import { defaultClient } from '../composables/useApolloClient'

import { DOCSNAVIGATION } from '../data/navigationQueries'

interface DocsState {
    expanded: boolean,
    navigation: Array<any>,
}

export const useDocsStore = defineStore('docs', {
    state: (): DocsState => ({
        expanded: false,
        navigation: []
    }),
    actions: {
        async fetch() {
            this.navigation = []

            const { data } = await defaultClient.query({
                query: DOCSNAVIGATION
            })

            console.log(data)

            if (data.docsEntries ?? null) {

                console.group(data.docsEntries)

                data.docsEntries.forEach(doc => {
                    console.log(doc)
                    const children = doc.children.map(child => {
                        console.log(child)
                        return {
                            title: child.title,
                            url: child.url,
                            slug: child.slug,
                            children: child.docsBuilder.filter(builder => Object.keys(builder).indexOf('heading') > -1)
                        }
                    })

                    this.navigation.push({
                        title: doc.title,
                        level: doc.level,
                        slug: doc.slug,
                        url: doc.url,
                        children: children
                    })
                })
            }
        },
        toggle() {
            this.expanded = !this.expanded
        }
    }
})