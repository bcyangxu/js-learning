<template lang="">

    <Attribute class="btn" style="color:red" @click="onClick"/>
    <span>{{$attrs}}</span>

</template>
<script>
import Attribute from './Attribute.vue';
export default {
components:{Attribute},
inheritAttrs:false,
props:['test'],
methods:{
    onClick(){
        alert('hello')
    }
}
}
</script>
<style lang="">

</style>