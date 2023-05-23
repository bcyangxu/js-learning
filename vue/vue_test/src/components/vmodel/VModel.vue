<template lang="">
    <input type="text"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
    >
</template>
<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue']
}
</script>
<style lang="">
    
</style>