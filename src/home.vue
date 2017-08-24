<template>
	  <div id="app">
	    <!-- <div class="head">
	    	<ul class="show swiper-container" id="head-tab">
	    		<li><img src="./assets/home/p1.jpg"></li>
	    		<li><img src="./assets/home/p2.jpg"></li>
	    		<li><img src="./assets/home/p3.jpg"></li>
	    	</ul>
	    	<div class="btn-list">
	    		<ul>
	    			<li class="round round-white"></li>
	    			<li class="round"></li>
	    			<li class="round"></li>
	    		</ul>
	    	</div>
	    </div> -->
	    <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="./assets/home/p1.jpg"></div>
		        <div class="swiper-slide"><img src="./assets/home/p2.jpg"></div>
		        <div class="swiper-slide"><img src="./assets/home/p3.jpg"></div>
		    </div>
		    <div class="swiper-pagination"></div>
	    </div>
	    <div class="tab">
	    	<ul>
	    		<li  v-for="(todo,index) in list"><router-link to="/page/1"> {{ todo.text }}</router-link></li>
	    	</ul>
	    </div>
	  </div>
</template>
<script>
// import home from './assets/js/home.js'
import mySwiper from './assets/js/swiper-3.4.2.min.js'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[{text:'衣服'},{text:'鞋子'},{text:'手办'},{text:'抱枕'}]
    }
  },
  mounted () {
  	var mySwiper = new Swiper('.swiper-container', {
			autoplay: 1000,//可选选项，自动滑动
			pagination: '.swiper-pagination'
		})
  }
}
</script>

<style>
#app {}
.head{width: 100%; height: 3.6rem;  position: relative; overflow: hidden;}
.head .show{width: 22.5rem; overflow: hidden; position: absolute; left: 0;}
.head .show li{width: 7.5rem; float:left;}
.btn-list{width: 0.46rem; overflow: hidden; position: absolute; left: 0; right: 0; margin: 0 auto; bottom: 0.2rem; z-index: 2}
.btn-list ul{width: 0.7rem; overflow: hidden;}
.btn-list .round{width: 0.12rem; height: 0.12rem; background: #ffffff; opacity: 0.6; float: left; margin-right: 0.05rem; display: block; cursor: pointer; border-radius: 100%;}
.btn-list .round-white{opacity: 1;}
.tab{width: 100%; height: 1.8rem; background: #ffffff; overflow: hidden;}
.tab ul{width: 10rem; overflow: hidden;}
.tab ul li{width: 1rem ;height:1.8rem; float: left; margin: 0 0.4rem;}
.tab li a{width: 100%; height: 100%; display: block; color: #000; font-size: 12px; text-align: center; line-height: 1.8rem;}
.swiper-pagination-bullet{opacity: 1; background: #fff}
.swiper-pagination-bullet-active{background: #007aff}
</style>
