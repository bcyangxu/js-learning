<template lang="">
    <div>
        <div v-for="item in arr" :key="item">{{item}}</div>
    </div>
</template>
<script setup lang="ts">
const arr: Array<string> = ['A','B','C','D']
arr.splice(2,0,'DDD')
</script>
<style lang="">
    
</style>