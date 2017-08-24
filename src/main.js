import Vue from 'vue'
import vueRouter from 'vue-router'	
// import App from './App.vue'
import App from './home.vue'

import page from './page.vue'
// import regiment from './regiment.vue'

Vue.use(vueRouter);

const routes = [
	{path:'/home',component:App},
	{path:'/page/:id',component:page},
	{path:'*',redirect:'/home'}
] 


const router = new vueRouter({
	routes
})





new Vue({
	router
  // el: '#app'
  // render: h => h(App)
}).$mount('#app')
