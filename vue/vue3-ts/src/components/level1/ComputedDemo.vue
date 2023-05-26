<template>
    <div>
        <h4>computed用法</h4>
        <p>计算属性就是当依赖的属性的值发生变化的时候，才会触发他的更改，如果依赖的值不发生变化，则使用缓存中的值</p>
        <p>函数形式</p>
        <button @click="changePrice">change</button>
        <p>{{ m }}</p>
        <p>对象形式</p>
        <button @click="mul += 100">change</button>
        <p>{{ price2 }}</p>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'

// 函数形式
let price = ref(0)

let m = computed<string>(() => {
    return `$` + price.value
})

const changePrice = () => {
    price.value += 500
}

// 对象形式
let price2 = ref<number | string>(1)
let mul = computed({
    get: () => {
        return price2.value
    },
    set: (value) => {
        price2.value = 'set' + value
    }
})
</script>
<style scoped>
    
</style>