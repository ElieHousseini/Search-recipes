<template>
    <div v-if="meal" class="bg-white shadow rounded-xl hover:scale-105 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />
        </router-link>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iste accusantium perferendis eos
                dolorem, minima a quidem debitis sint laboriosam blanditiis suscipit quas adipisci ullam iusto numquam odio,
                soluta voluptatum.</p>
            <div>
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
    </div>
</template>

<script setup>

import YoutubeButton from './YoutubeButton.vue'

const { meal } = defineProps({
    meal: Object
})
</script>