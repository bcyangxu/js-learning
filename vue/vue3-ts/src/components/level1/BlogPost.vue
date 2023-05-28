<template>
    <div>
        <h3>{{ title }}</h3>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['title'])
const emits = defineEmits(['enlarge-text'])
emits('enlarge-text')
console.log(props);
</script>
<style scoped>

</style>