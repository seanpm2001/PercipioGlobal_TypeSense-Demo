import { gql } from '@apollo/client/core'

export const DOCSNAVIGATION = gql`
    query DocsNavigation {
        docsEntries(level: 1) {
            ... on docs_heading_Entry {
                title
                slug
                children {
                    url
                    title
                    slug
                    ... on docs_docs_Entry {
                        docsBuilder {
                            ... on docsBuilder_sectionHeader_BlockType {
                                heading
                            }
                        }
                    }
                }
            }
        }
    }
`