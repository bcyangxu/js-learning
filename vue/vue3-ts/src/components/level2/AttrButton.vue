<template>
    <!-- <button @click="onClick" class="child">click</button> -->
    <BaseAttrButton class="child" @click="onClick" />
</template>
<script setup lang="ts">
import BaseAttrButton from './BaseAttrButton.vue';
const onClick = () => {
    alert('我是子组件的点击事件')
    console.log('child');
}
</script>
<style scoped>

</style>