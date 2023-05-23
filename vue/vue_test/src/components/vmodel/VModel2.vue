<template lang="">
    <input type="text" v-model="value">
</template>
<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
    computed:{
        value:{
            get(){
                return this.modelValue
            },
            set(value){
                this.$emits('update:modelValue',value)
            }
        }
    }
}
</script>
<style lang="">
    
</style>