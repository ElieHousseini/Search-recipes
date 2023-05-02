<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" class="bg-white shadow rounded-xl" />
    </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue';

import { computed } from '@vue/reactivity'
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'
import store from '../store';
import { searchMealsByIngredientActionType } from '../store/actionTypes'


const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
    store.dispatch(searchMealsByIngredientActionType, route.params.ingredient)
})

watch(route, () => {
  if (route.params.ingredient) {
    store.dispatch(searchMealsByIngredientActionType, route.params.ingredient);
  }
});

</script>