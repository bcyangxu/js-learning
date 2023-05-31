<template>
    <p>Current compoent: A</p>
    <span>count: {{ count }}</span>
    <button @click="count++">Add</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

// 缓存实例的生命周期
// 当一个组件实例从DOM上移除但因为被KeepLive缓存而仍作为组件树的一部分时
// 它将变为不活跃状态而不是被卸载，当一个组件实例作位缓存树的一部分插入到DOM中时
// 它将重新被激活
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
    // 调用时机首次挂载 以及每次从缓存中被重新插入时
    console.log('onActivated');
})

onDeactivated(() => {
    // 从DOM上移除，进入缓存 以及组件卸载时调用
    console.log('onDeactivated');
})
</script>
<style scoped>

</style>