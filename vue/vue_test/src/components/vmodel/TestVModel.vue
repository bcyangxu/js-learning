<template lang="">
    <Vmodel3 v-model.capitalize="myText"></Vmodel3>
</template>
<script>
import Vmodel3 from './Vmodel3.vue';
export default {
    components:{Vmodel3},
    data() {
        return{
            myText:''
        }
    }
}
</script>
<style lang="">
    
</style>