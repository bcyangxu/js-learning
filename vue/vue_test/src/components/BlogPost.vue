<template lang="">
    <div class="blog-post">
        <h3>{{title}}</h3>
        <button @click="$emit('enlarge-text')">+</button>
    </div>
</template>
<script>
export default {
    props:['title'],
    emits:['enlarge-text']
}
</script>
<style lang="">
    
</style>