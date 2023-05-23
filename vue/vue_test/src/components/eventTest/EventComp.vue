<template lang="">
    <div>
        <button @click="$emit('someEvent','vue')">click me</button>
    </div>
</template>
<script>
export default {
    methods:{
        submit() {
            this.$emit('someEvent')
        }
    }
}
</script>
<style lang="">
    
</style>