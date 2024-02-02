import axios from "axios";
import store from "@/store/index.js";

export class MealService {

    static apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    static sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
    static async fetchMeals(loading) {
        await this.sleep(); // Sleep for 2 seconds
        const response = await axios.get(this.apiUrl)
        await this.updateState(response.data.meals)
        this.disableLoading(loading)
    }

    static async search(keyword, setLoading) {
        await store.dispatch('clearMeals')
        await this.sleep(); // Sleep for 2 seconds
        const response = await axios.get(this.apiUrl + "" + keyword)
        await this.updateState(response.data.meals)
        setLoading(false)
    }

    static updateState(meals) {
        if (meals !== null)
            meals.forEach(meal => {
                store.dispatch('addMeal', {
                    'id': meal.idMeal,
                    'name': meal.strMeal,
                    'category': meal.strCategory,
                    'imageUrl': meal.strMealThumb
                })
            })
    }

    static disableLoading(loading) {
        loading.value = false
    }

}