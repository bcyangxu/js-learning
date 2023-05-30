<template>
    <p>Current component: B</p>
    <span>Message is: {{ msg }}</span>
    <br>
    <input type="text" v-model="msg">
</template>
<script setup lang="ts">
import {ref} from 'vue'
const msg = ref('')
</script>
<style scoped>

</style>