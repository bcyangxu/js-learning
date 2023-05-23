<template lang="">
    <input type="text" v-model="message">
   <Child></Child>
</template>
<script>
import Child from './Child.vue'
import {  computed } from "vue"
export default {
    components:{ Child },
    data() {
        return {
            message: 'hello'
        }
    },
    provide() {
        return {
            message: computed(() => this.message)
        }
    }
}
</script>
<style lang="">
    
</style>