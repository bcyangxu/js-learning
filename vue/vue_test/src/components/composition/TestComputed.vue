<template lang="">
    <p>Has published books</p>
    <span>{{ publishedBookMessage}}</span>
    <h1>{{fullName}}</h1>
</template>
<script setup>
import { reactive,computed,ref } from 'vue'

const author = reactive({
    name:'yangxu',
    books:[
        'Java',
        'JavaScript',
        'Python'
    ]
})

const publishedBookMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

// 可写计算属性
const firstName = ref('yang')
const lastName = ref('xu')

const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    },

    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})
</script>
<style lang="">
    
</style>