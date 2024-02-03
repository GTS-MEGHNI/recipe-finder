import {createRouter, createWebHistory} from 'vue-router';
import MealsView from "@/views/MealsView.vue";
import MealDetailsView from "@/views/MealDetailsView.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: MealsView
    },{
        path: '/meals/:id',
        name: 'details',
        component: MealDetailsView
    }
    ]
})