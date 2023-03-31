<script setup lang="ts">
interface Props {
    url: string,
    slug: string,
    label: string,
    utilities?: string
}

withDefaults(defineProps<Props>(), {
    utilities: ''
})
</script>

<template>
    <a
        :href="url"
        :aria-label="label"
        data-tag-category="navigation"
        data-tag-action="click"
        :data-tag-label="url"
        data-tag-type="docs"
        :data-link="`doc-${slug}`"
        :class="[
            utilities,
            'font-primary text-white'
        ]"
    >
        <span>
            {{ label }}
        </span>
    </a>
</template>