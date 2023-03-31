<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useDocsStore } from '@/js/store/docs'

import ButtonHamburger from '@/vue/_atoms/buttons/button--hamburger-docs.vue'
import LinkDocs from '@/vue/_atoms/links/link--docs.vue'
import LineDocs from '@/vue/_atoms/lines/line--docs.vue'

const docsStore = useDocsStore()
const { navigation } = storeToRefs(docsStore)

const init = ref(true)
const headings = ref(null)
const activeHeading = ref(null)
const showNavigation = ref(false)

const checkActive = slug => {
    return window.location.href.indexOf(slug) > -1 ? 'font-bold' : ''
}

const scrollToNavigation = slug => {
    const yOffset = -70
    const y = document.getElementById(slug).getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({top: y, behavior: 'smooth'})
}

const kebabCase = string => 'doc-' + string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

const setActiveNavigationItem = () => {
    if (init.value && window.location.href.indexOf('#') > -1) {
        document.getElementById(`doc-${window.location.href.split('#')[1]}`).click()
    } else {
        headings.value.forEach(heading => {
            if (heading.getBoundingClientRect().y > 0 && heading.getBoundingClientRect().y < 150) {
                activeHeading.value = heading.getAttribute('id')
            }
        })
    }

    init.value = false

    if (!activeHeading.value) {
        activeHeading.value = headings.value[0]
    }
}

const toggleNavigation = () => {
    showNavigation.value = !showNavigation.value
}

watch(navigation, () => {
    if (navigation.value && document.getElementById('docs-navigation-skeleton')) {
        document.getElementById('docs-navigation-skeleton').remove()
    }
})

onMounted(async() => {
    // fetch docs navigation
    docsStore.fetch()

    // get all the docs headings of the page
    headings.value = document.querySelectorAll('.doc-heading')

    // set scroll for showing the active heading and set active item by default
    window.addEventListener('scroll', setActiveNavigationItem)
    setActiveNavigationItem()
})
</script>

<template>
    <aside
        v-if="navigation"
        :class="[
            'text-white pl-4 pr-4 md:pl-0 md:h-auto min-w-[250px] w-1/4',
            'fixed md:static h-full left-0',
            'bg-slate-900',
            'transform md:translate-x-0',
            'transition-all duration-500 ease-in-out',
            'before:absolute before:w-full before:h-full before:left-0 before:bottom-full before:bg-slate-900',
            showNavigation ? 'translate-x-0' : '-translate-x-[250px]'
        ]"
    >
        <ButtonHamburger @touch="toggleNavigation()" />
        <nav 
            aria-label="Documentation Navigation" 
            class="sticky top-28 pb-20"
        >
            <ul>
                <li
                    v-for="nav1 in navigation"
                    :key="nav1.title"
                    class="font-primary mb-4"
                >
                    <!-- <LinkDocs 
                        :url="nav1.url" 
                        :slug="nav1.slug" 
                        :label="nav1.title" 
                        :utilities="checkActive(nav1.slug)"
                    /> -->
                    <span 
                        :class="[
                            'font-primary text-white',
                            checkActive(nav1.slug)
                        ]"
                    >
                        {{ nav1.title}}
                    </span>

                    <ul 
                        v-if="nav1.children.length > 0"
                        class="mt-4 border-l border-slate-700"
                    >
                        <li
                            v-for="nav2 in nav1.children"
                            :key="nav2.title"
                            class="pl-4 py-2"
                        >
                            <span class="relative">
                                <LinkDocs 
                                    :url="nav2.url" 
                                    :slug="nav2.slug" 
                                    :label="nav2.title" 
                                    :utilities="checkActive(nav2.slug)"
                                />
                                <LineDocs v-if="`doc-${nav2.slug}` === activeHeading" />
                            </span>

                            <ul v-if="nav2.children.length > 0 && checkActive(nav2.slug)">
                                <li
                                    v-for="nav3 in nav2.children"
                                    :key="nav3.heading"
                                    class="pl-4 my-2 relative"
                                    :data-link="kebabCase(nav3.heading)"
                                >
                                    <button 
                                        data-tag-category="navigation"
                                        data-tag-action="click"
                                        :data-tag-label="`${nav2.url}#${kebabCase(nav3.heading)}`"
                                        data-tag-type="docs"
                                        class="text-left"
                                        @click="scrollToNavigation(kebabCase(nav3.heading))"
                                    >
                                        {{ nav3.heading }}
                                    </button>
                                    <LineDocs v-if="kebabCase(nav3.heading) === activeHeading" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>
</template>