<template>
    <div class="bg-grey-100 h-full">
        <navbar />
        <main>
            <div class="max-w-[1200px] mx-auto">
                <router-view />
            </div>
        </main>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
</script>