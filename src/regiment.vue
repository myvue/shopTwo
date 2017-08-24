<template>
  <div class="goods-box">
    <ul>
      <li><router-link to="/home"><span class="goos-title">标题标题标题{{m.text}}</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // message:['全部选项','衣服','鞋子','手办','抱枕'],
      // list:[{text:'全部'},{text:'衣服'},{text:'鞋子'},{text:'手办'},{text:'抱枕'}],
    } 
  },
  props:['m']

}
</script>

<style>
.goods-box,.goods-box ul{width: 100%;overflow: hidden;}
.goods-box ul li{width: 100%; height: 2.5rem}
.goods-box a{width: 100%; text-align: center; color: #000; font-size: 12px; display: block;}
/*.goods-box .router-link-exact-active .goods-title{ color: #f00 }*/
</style>