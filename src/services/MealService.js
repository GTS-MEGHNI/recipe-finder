import axios from "axios";
import store from "@/store/index.js";

export class MealService {

    static apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    static async fetchMeals() {
        const response = await axios.get(this.apiUrl)
        let meals = response.data.meals
        meals.forEach(meal => {
            store.dispatch('addMeal', {
                'id': meal.idMeal,
                'name': meal.strMeal,
                'category': meal.strCategory,
                'imageUrl': meal.strMealThumb
            })
        })
        console.log(store.getters.getMeals)
    }
s
}