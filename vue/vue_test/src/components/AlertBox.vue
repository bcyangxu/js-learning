<template lang="">
    <div class="alert-box">
        <strong>error</strong>
        <br>
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    strong{
        color: red;
    }
    .alert-box{
        color: red;
        border: 1px solid red;
        border-radius: 4px;
        padding: 20px;
        background-color: #f8f8f8;
    }
</style>