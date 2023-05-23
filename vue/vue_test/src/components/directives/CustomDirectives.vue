<template lang="">
    <div>
        <input type="text" v-focus>
    </div>
</template>
<script setup>
const vFocus = {
    mounted: (el) => el.focus()
}
</script>
<script>
export default {
setup() {

},
directives: {
    focus: {
        
    }
}
}
</script>
<style lang="">
    
</style>