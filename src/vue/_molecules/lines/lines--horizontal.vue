<script setup lang="ts"></script>
<template>
    <section class="w-full absolute bottom-0 h-[50vh] md:h-[20vw] z-0 overflow-hidden opacity-50">
        <!-- left -->
        <div 
            :class="[
                'background-gradient-blue-dark',
                'transform rotate-[30deg] origin-top-left -translate-x-1/2', 
                'h-px w-[200vw] md:w-[60vw] background-animate pointer-events-none relative',
                'absolute left-[35%] md:left-[10%] bottom-[25%]'
            ]"
        >
            <div class="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <div 
            :class="[
                'background-gradient-pink-dark',
                'transform -rotate-[30deg] origin-top-right -translate-x-1/2',
                'h-px w-[200vw] md:w-[60vw] background-animate pointer-events-none relative',
                'absolute left-[30%] md:left-[10%] bottom-[25%]'
            ]"
        >
            <div class="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>

        <!-- right -->
        <div 
            :class="[
                'hidden md:block',
                'background-gradient-blue-dark',
                'background-animate-delayed-2 background-animate-reverse',
                'transform rotate-[30deg] origin-top-left -translate-x-1/2', 
                'h-px w-[60vw] background-animate pointer-events-none relative',
                'absolute left-[55%] bottom-[25%]'
            ]"
        >
            <div class="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <div 
            :class="[
                'hidden md:block',
                'background-gradient-pink-dark',
                'background-animate-delayed-2 background-animate-reverse',
                'transform -rotate-[30deg] origin-top-right -translate-x-1/2',
                'h-px w-[60vw] background-animate pointer-events-none relative',
                'absolute left-[50%] bottom-[25%]'
            ]"
        >
            <div class="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>

        <!-- right -->
        <div 
            :class="[
                'hidden md:block',
                'background-gradient-blue-dark',
                'background-animate-delayed background-animate-reverse',
                'transform rotate-[30deg] origin-top-left -translate-x-1/2', 
                'h-px w-[60vw] background-animate pointer-events-none relative',
                'absolute left-[95%] bottom-[25%]'
            ]"
        >
            <div class="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
        <div 
            :class="[
                'hidden md:block',
                'background-gradient-pink-dark',
                'background-animate-delayed background-animate-reverse',
                'transform -rotate-[30deg] origin-top-right -translate-x-1/2',
                'h-px w-[60vw] background-animate pointer-events-none relative',
                'absolute left-[90%] bottom-[25%]'
            ]"
        >
            <div class="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-slate-800 to-transparant" />
            <div class="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-slate-800 to-transparant" />
        </div>
    </section>
</template>