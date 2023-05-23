<template lang="">
    <div>
        <button @click="count++">count:{{count}}</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            count:0
        }
    }
}
</script>
<style lang="">
    
</style>