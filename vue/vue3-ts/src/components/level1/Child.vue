<template>
    <div>
        child
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const a = 1
const b = ref(2)
// 使用了<script setup> 的组件是默认私有的
// 一个父组件无法访问到一个使用了<script setup> 的子组件的任何东西
// 除非子组件在其中通过defineExpose宏显示式暴露
defineExpose({
    a,
    b
})
</script>
<style scoped>

</style>