<template>  
    <h1>透传Attributes</h1>
    <h2>Attributes集成</h2>
    <p></p>
    <AttrButton @click="onClick" class="parent"/>
</template>
<script setup lang="ts">
import AttrButton from './AttrButton.vue'
const onClick = () => {
    alert('我是父组件的点击事件')
    console.log('parent');
}
</script>
<style scoped>

</style>