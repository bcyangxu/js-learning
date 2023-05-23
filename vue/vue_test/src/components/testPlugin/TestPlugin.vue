<template lang="">
    <div>
        {{$translate('greetings.hello')}}
    </div>
</template>
<script setup>
import { inject } from 'vue'

const i18n = inject('i18n')
console.log(i18n.greetings.hello)
</script>
<style lang="">
    
</style>