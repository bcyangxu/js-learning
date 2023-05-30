<template>
    <p>Current compoent: A</p>
    <span>count: {{ count }}</span>
    <button @click="count++">Add</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
<style scoped>

</style>