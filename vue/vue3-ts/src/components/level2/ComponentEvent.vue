<template>
    <div>
        <my-component @increase-by="(n) => count += n"/>
        <p>{{ count }}</p>
        <MyComponent @increase-by="increaseCount" />
        <p>{{ count2 }}</p>
    </div>
</template>
<script setup lang="ts">
import MyComponent from './MyComponent.vue'
import { ref } from 'vue'
// 声明触发的事件，组件可以显式的通过defineEmits() 宏来声明它要触发的事件:
const emit = defineEmits(['inFocus','submit'])
// 在template中使用的$emit 方法不能在组件的 <script setup> 部分中使用
// 但defineEmit() 会返回一个相同作用的函数供我们使用
function buttonClick() {
    emit('submit')
}
const count = ref(1)
const count2 = ref(1)

const increaseCount = (n) => {
    count2.value += n
}
</script>
<style scoped>

</style>