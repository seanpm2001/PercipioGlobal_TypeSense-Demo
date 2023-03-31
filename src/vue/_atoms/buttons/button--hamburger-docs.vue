<script setup lang="ts">
const emit = defineEmits(['touch'])

const onClick = () => {
    emit('touch')
}
</script>

<template>
    <button
        data-tag-category="hamburger"
        data-tag-action="click"
        data-tag-label="Show / hide documentation navigation"
        data-tag-type="docs"
        aria-label="Hamburger menu"
        class="md:hidden absolute left-full ml-2 top-1.5 w-[28px] h-5 z-10 bg-slate-900"
        @click.prevent="onClick"
    >
        <span class="hamburger-parent relative w-full h-full block hamburger">
            <span class="top-0 absolute left-0 block w-[28px] h-[3px] transition-all duration-500 ease-in-out bg-white" />
            <span class="-mt-0.5 top-1/2 absolute left-0 block w-[28px] h-[3px] transition-all duration-500 ease-in-out bg-white" />
            <span class="bottom-0 absolute left-0 block w-[28px] h-[3px] transition-all duration-500 ease-in-out bg-white" />
        </span>
    </button>
</template>