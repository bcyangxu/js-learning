<template lang="">
    <div>
        {{greetingMessage}}
        <h4>{{title}}</h4>
        <h4>likes:{{likes}}</h4>
        
    </div>
</template>
<script>
export default {
    // props: ['foo'],
    // 对象声明
    props: {
        title: String,
        likes: Number,
        author: String,
        isPublished:Boolean,
        greetingMessage:String
    },
    created() {
        console.log(this.title)
    }
}
</script>
<style lang="">
    
</style>