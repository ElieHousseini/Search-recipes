import axiosClient from "../axiosClient"
import {setSearchedMealsMutationType, setMealsByLetterMutationType, setMealsByIngredientsMutationType} from './mutationTypes'

const searchMeals = async ({ commit }, keyword) => {
    const { data } = await axiosClient.get(`search.php?s=${keyword}`)
    commit(setSearchedMealsMutationType, data.meals)
}

const searchMealsByLetter = async ({ commit }, letter) => {
    const { data } = await axiosClient.get(`search.php?f=${letter}`)
    commit(setMealsByLetterMutationType, data.meals)
}

const searchMealsByIngredient = async ({ commit }, ingredient) => {
    const { data } = await axiosClient.get(`filter.php?i=${ingredient}`)
    commit( setMealsByIngredientsMutationType, data.meals)
}


export {searchMeals, searchMealsByLetter, searchMealsByIngredient}