<template>
    <div>
        <input type="text"
            :value="firstName"
            @input="$emit('update:firstName',$event.target.value)"
        >
        <br>
        <input type="text"
            :value="lastName"
            @input="$emit('update:lastName',$event.target.value)"
        >
    </div>
</template>
<script setup lang="ts">
defineProps({
    firstName:String,
    lastName:String
})

defineEmits(['update:firstName','update:lastName'])
</script>
<style scoped>

</style>