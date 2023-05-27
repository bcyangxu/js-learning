<template>
    <div>
        <div>
            <h2>值绑定</h2>
            <div>picked:{{ picked }}</div>
            <input type="radio" v-model="picked" value="a" id="picker1">
            <label for="picker">a</label>
            <input type="radio" v-model="picked" value="b" id="picker2">
            <label for="picker2">b</label>
            <input type="checkbox">
        </div>
        <div>
            <h2>复选框</h2>
            <div>{{ toggle }}</div>
            <input 
                type="checkbox"
                v-model="toggle"
                true-value="yes"
                false-value="no"
            />
        </div>
        <div>
            <h2>单选按钮</h2>
            <div>{{ pick }}</div>
            <input type="radio" v-model="pick" value="first"/>
            <input type="radio" v-model="pick" value="second"/>
        </div>
        <div>
            <h2>选择器选项</h2>
            <div>{{ selected }}</div>
            <select v-model="selected">
                <!-- 内联对象字面量 -->
                <option disabled>test</option>
                <option :value="{ number: 123 }">123</option>
            </select>
        </div>
        <div>
            <h2>修饰符</h2>
            <h3>.lazy</h3>
            <p>默认情况下，v-mdoel会在每次input事件后更新数据，可以通过添加lazy修饰符来改为在每次change事件后更新数据</p>
            <input type="text" v-model.lazy="msg">
            <div>{{ msg }}</div>
            <h3>.number</h3>
            <input type="text" v-model.number="age">
            <div v-text="{type:typeof(age)}"></div>
            <div>{{ age }}</div>
            <h3>.trim</h3>
            <p>默认自动删除输入内容前后的空格</p>
            <input type="text" v-model.trim="msg2">
            <div>test:{{ msg2 }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const picked = ref('')
const toggle = ref('')
const select = ref('')
const pick = ref('')
const selected = ref({})
const msg = ref('')
const msg2 = ref('')
const age = ref(0)
</script>
<style scoped>

</style>