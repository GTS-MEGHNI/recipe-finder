import {createStore} from 'vuex'

export default createStore({
    state: {
        meals: [],
    },
    getters: {
        getMeals: (state) => state.meals
    },
    mutations: {
        setMeals: (state, payload) => state.meals.push(payload),
        clearMeals: (state) => state.meals.length = 0
    },
    actions: {
        addMeal: (context, payload) => context.commit('setMeals', payload),
        clearMeals: (context) => context.commit('clearMeals')
    },
    modules: {}
})
