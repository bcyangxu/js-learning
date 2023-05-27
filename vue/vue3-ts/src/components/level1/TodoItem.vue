<template>
    <li>
        {{ title }}
        <button @click="$emit('remove')">remove</button>
    </li>
</template>
<script setup lang="ts">
defineProps(['title'])
defineEmits(['remove'])
</script>
<style scoped>

</style>