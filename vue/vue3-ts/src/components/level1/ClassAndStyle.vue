<template>
    <div>
        <h4>Class与Style绑定</h4>
        <div class="static" 
        :class="{ active: isActive,'text-danger':hasError }"
        >Hello World！</div>
        <div :class="classObj">对象</div>
        <div :class="classObject">计算属性</div>
        <div :class="[activeClass,errorClass]">绑定数组</div>
        <div :class="[isActive ? activeClass : '',errorClass]">三元运算符</div>
        <button @click="change">change</button>
        <MyComponent class="parent" :class="{active:isActive}"></MyComponent>
    </div>
    <div>
        <div :style="{color:activeColor,fontSize:fontSize + 'px'}">绑定内联样式</div>
        <div :style="{ 'font-size':fontSize + 'px'}">kebab-cased</div>
        <div :style="styleObj">styleObj</div>
    </div>
</template>
<script setup lang="ts">
import { ref,reactive,computed } from 'vue'
import MyComponent from './MyComponent.vue'

let isActive = ref(true)
const hasError = ref(false)
const error = ref(null)
const activeClass = ref('active')
const errorClass = ref('text-danger')
const activeColor = ref('red')
const fontSize = ref(30)
const classObj = reactive({
    active:true,
    'text-danger': false
})

const classObject = computed(() => ({
    active:isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))

const styleObj = reactive({
  color:'red',
  fontSize:'30px'    
})

const change = () => {
    isActive.value = !isActive.value
}
</script>
<style scoped>
.active {
    color: green;
}

.text-danger{
    border: 1px solid red;
}
</style>