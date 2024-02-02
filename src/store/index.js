import {createStore} from 'vuex'

export default createStore({
    state: {
        meals: []
    },
    getters: {
        getMeals: (state) => state.meals
    },
    mutations: {
        setMeals: (state, payload) => state.meals.push(payload)
    },
    actions: {
        addMeal: (context, payload) => context.commit('setMeals', payload)
    },
    modules: {}
})
