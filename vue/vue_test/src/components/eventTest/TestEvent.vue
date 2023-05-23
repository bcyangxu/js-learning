<template lang="">
    <div>
        <EventComp @someEvent="hello"></EventComp>
    </div>
</template>
<script>
import EventComp from './EventComp.vue';
export default {    
    components:{
        EventComp
    },
    methods:{
       hello (msg) {
        alert('hello,'+msg)
       }
    }
}
</script>
<style lang="">
    
</style>