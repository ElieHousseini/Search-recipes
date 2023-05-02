<template>
    <div class="p-8 pb-0">
        <input type="text" v-model='keyword' @change='searchMeals' class="rounded border-2 border-grey-200 w-full"
            placeholder="Search for Meals">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" class="bg-white shadow rounded-xl" />
    </div>
</template>

<script setup>
import store from '../store';
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue';
import { searchMealsActionType } from '../store/actionTypes';

const route = useRoute('')
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch(searchMealsActionType,  keyword.value)
} 

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) searchMeals()
})
</script>