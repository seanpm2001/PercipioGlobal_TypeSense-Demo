<script setup lang="ts">
import { ref } from 'vue'
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue"

import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-bash'
import 'prism-es6/components/prism-graphql'
import 'prism-es6/components/prism-http'
import 'prism-es6/components/prism-json'
import 'prism-es6/components/prism-markdown'
import 'prism-es6/components/prism-php'
import 'prism-es6/components/prism-sql'
import 'prism-es6/components/prism-twig'
import 'prism-es6/components/prism-yaml'

interface Props {
    code: any
}

const props = defineProps<Props>()

const activeLanguage = ref(props.code[0]?.snippetLang?.value)

const onSetActive = lang => {
    activeLanguage.value = lang
}
</script>
<template>
    <div class="w-full max-w-[80ch] mb-5 md:mb-10 border border-slate-600 rounded-2xl overflow-hidden">
        <ul class="space-x-3 border-b border-slate-600 py-3 px-5">
            <li
                v-for="snippet in code" 
                :key="snippet.id"
                class="inline"
            >
                <button 
                    :class="[
                        'font-primary text-left',
                        activeLanguage === snippet.snippetLang.value ? 'underline' : ''
                    ]"
                    @click="onSetActive(snippet.snippetLang.value)"
                >
                    {{ snippet.snippetLang.label }}
                </button>
            </li>
        </ul>
        <div class="bg-slate-800 py-3 px-5">
            <code-highlight 
                v-for="snippet in code"
                :key="snippet.id"
                :language="snippet.snippetLang.value"
                :class="[
                    'overflow-x-auto',
                    activeLanguage === snippet.snippetLang.value ? '' : 'hidden'
                ]"
            >
                <pre
                    :class="[
                        'w-full text-white',
                        snippet.snippetLang.value
                    ]"
                ><code>{{ snippet.snippet }}</code></pre>
            </code-highlight>
        </div>
    </div>
</template>