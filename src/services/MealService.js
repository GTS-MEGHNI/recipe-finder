import axios from "axios";
import store from "@/store/index.js";

export class MealService {

    static apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

    static async fetchMeals(loading) {
        await store.dispatch('clearMeals')
        const response = await axios.get(this.apiUrl)
        await this.updateState(response.data.meals)
        this.disableLoading(loading)
    }

    static async search(keyword, setLoading) {
        await store.dispatch('clearMeals')
        const response = await axios.get(this.apiUrl + "" + keyword)
        await this.updateState(response.data.meals)
        setLoading(false)
    }

    static updateState(meals) {
        if (meals !== null)
            meals.forEach(meal => {
                store.dispatch('addMeal', {
                    'id': parseInt(meal.idMeal),
                    'name': meal.strMeal,
                    'category': meal.strCategory,
                    'imageUrl': meal.strMealThumb,
                    'ingredients': this.mapIngredients(meal),
                    'instructions': meal.strInstructions.split('.')
                })
            })
    }

    static disableLoading(loading) {
        loading.value = false
    }

    static mapIngredients(meal) {
        let ingredients = []
        for(let attribute in meal) {
            if(attribute.includes('Ingredient') && meal[attribute] !== '')
                ingredients.push(meal[attribute])
        }
        return ingredients
    }


}