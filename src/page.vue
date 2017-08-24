<template>
<div class="wrap">
   <div class="navigate">
    	<ul><li  v-for="(todo,index) in list"><a :msg="index" @click="msgNum=index"  :class='{"ent-btn" : index==0}' href="javascript:;"> {{ todo.text }}</a></li></ul>
   </div>
   <myregiment :m="list[msgNum]"></myregiment>
</div>	
    

</template>

<script>
import regiment from './regiment.vue'
export default {
  name: 'app',
  data () {
    return {
      list:[{text:'全部'},{text:'衣服'},{text:'鞋子'},{text:'手办'},{text:'抱枕'}],
      msgNum:0
    }
    
  },
  methods:{
  	// click
  },
  components:{
  	
    'myregiment':regiment
  	

  }
}
</script>

<style>
#app {}
.navigate{ width: 100%; overflow: hidden;}
.navigate ul{width: 100%; overflow: hidden;}
.navigate li{width: 1.5rem; height: 0.86rem;float: left;}
.navigate li a{width: 100%;height:  0.83rem; display: block; text-align: center; line-height: 0.83rem; font-size: 12px; border-bottom: 0.03rem solid #ebebeb; color: #000;}
.navigate li .ent-btn{border-bottom: 0.03rem solid #fa4c45; color: #fa4c45;}
</style>
