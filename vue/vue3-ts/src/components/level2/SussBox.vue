<template>
    <div class="suss-box">
        <strong>Success</strong>
        <br/>
        <slot/>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.suss-box{
    color:#666;
    border: 1px solid green;
    border-radius: 4px;
    padding: 20px;
    background-color: #f8f8f8;
}
strong{
    color:green;
}
</style>