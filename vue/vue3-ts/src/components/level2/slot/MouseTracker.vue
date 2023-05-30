<template>
    <slot :x="x" :y="y"></slot>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

const update = e => {
    x.value = e.pageX
    y.value = e.pageY
}

onMounted(() => window.addEventListener('mousemove',update))
onUnmounted(() => window.addEventListener('mousemove',update))
</script>
<style scoped>

</style>