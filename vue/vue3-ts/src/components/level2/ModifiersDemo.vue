<template>
    <div>
        
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['title','titleModifiers'])
defineEmits(['update:title'])

console.log(props.titleModifiers)
</script>
<style scoped>

</style>