<script setup lang="ts"></script>
<template>
    <section class="w-full absolute top-0 md:top-[10vh] -left-[2%] md:-left-[20%] h-[50vh] md:h-full w-full skew-x-12 -rotate-[35deg] opacity-50">
        <!-- pink -->
        <div 
            :class="[
                'background-gradient-pink-dark',
                'transform', 
                'h-px w-[100vw] md:w-[50vw] background-animate background-animate-delayed-2 background-animate-reverse pointer-events-none',
                'absolute left-1/2 -translate-x-1/2 top-[15%]'
            ]"
        >
            <div class="absolute left-0 bottom-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <div 
            :class="[
                'background-gradient-pink-dark ',
                'transform', 
                'h-px w-[100vw] md:w-[50vw] background-animate background-animate-reverse pointer-events-none',
                'absolute left-1/2 -translate-x-1/2 bottom-1/2'
            ]"
        >
            <div class="absolute left-0 bottom-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <div 
            :class="[
                'background-gradient-pink-dark',
                'transform', 
                'h-px w-[100vw] md:w-[50vw] background-animate background-animate-delayed-2 pointer-events-none',
                'absolute left-1/2 -translate-x-1/2 bottom-[15%]'
            ]"
        >
            <div class="absolute left-0 bottom-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <!-- blue -->
        <div 
            :class="[
                'background-gradient-blue-dark',
                'transform', 
                'h-[100vw] md:h-[50vw] w-px background-animate pointer-events-none',
                'absolute left-[15%] md:left-[35%] bottom-0'
            ]"
        >
            <div class="absolute left-0 bottom-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <div 
            :class="[
                'background-gradient-blue-dark',
                'transform', 
                'h-[100vw] md:h-[50vw] w-px background-animate background-animate-reverse pointer-events-none',
                'absolute left-1/2 bottom-0'
            ]"
        >
            <div class="absolute left-0 bottom-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <div 
            :class="[
                'background-gradient-blue-dark',
                'transform', 
                'h-[100vw] md:h-[50vw] w-px background-animate background-animate-delayed-2 pointer-events-none',
                'absolute right-[15%] md:right-[35%] bottom-0'
            ]"
        >
            <div class="absolute left-0 bottom-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
    </section>
</template>