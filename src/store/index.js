import {createStore} from 'vuex'

const persistedState = JSON.parse(localStorage.getItem('vuex-state')) || {
    meals: []
};

const store = createStore({
    state: {
        ...persistedState
    },
    getters: {
        getMeals: (state) => state.meals,
        getMealById: (state) => (id) => state.meals.find((meal) => meal.id === id)
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

store.subscribe((mutation, state) => {
    localStorage.setItem('vuex-state', JSON.stringify(state));
});

export default store
