<template>
    <div>
        <div class="flex gap-2 justify-center mt-2">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" class="bg-white shadow rounded-xl" />
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import store from '../store';
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue';
import { searchMealsByLetterActionType } from '../store/actionTypes';

const route = useRoute()
const letters = 'ABCDEFGIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    if (route.fullPath.includes('by-letter'))
        store.dispatch(searchMealsByLetterActionType, route.params.letter)
})

</script>