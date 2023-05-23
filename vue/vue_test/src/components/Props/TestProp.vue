<template lang="">
    <div>
        <!-- <TestComp></TestComp>
  <TestDyComp></TestDyComp> -->
  <div>
    <PropsComp title="test props" greetingMessage="hello props"></PropsComp>
    <h1>动态prop</h1>
    <PropsComp :title="post.title"/>
    <PropsComp :title="post.title + ' by ' + post.author"/> 
    <h1>传递不同的值类型</h1>
    <h2>Number</h2>
    <PropsComp :likes="42"/>
    <PropsComp :likes="post.likes"></PropsComp>
    <h2>Boolean</h2>
    <PropsComp isPublished></PropsComp>
  </div>
    </div>
</template>
<script>
import PropsComp from './PropsComp.vue';
export default {
    components:{
        PropsComp
    },
    data () {
    return{
      post:{
        title:'all in js',
        author:'yangxu',
        likes:23,
        isPublished:false
      }
    }
  }
}
</script>
<style lang="">
    
</style>