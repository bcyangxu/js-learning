<template>
    <div>
        
    </div>
</template>
<script setup lang="ts">
// 字符串数组形式
const props: any = defineProps(['foo'])
// 对象形式
defineProps({
    title:String,
    likes:Number
})
console.log(props.foo);
</script>
<style scoped>

</style>