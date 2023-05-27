<template>
    <div>
        <div>
            <input type="text"
            :value="text"
            @input="event => text = event.target.value"
            >
            <p>{{ text }}</p>
        </div>
        <!-- v-model简化写法 -->
        <div>
            <input type="text" v-model="text">
            <p>{{ text }}</p>
        </div>
        <!-- 多行文本 -->
        <div>
            <h2>textarea多行文本</h2>
            <span>message is:</span>
            <p>{{ message }}</p>
            <!-- textarea不支持插值表达式 -->
            <textarea v-model="message" cols="30" rows="4"></textarea>
        </div>
        <div>
            <div>
                <h2>复选框</h2>
                <p>单一复选框，绑定布尔值</p>
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">{{ checked }}</label>
            </div>
            <div>
                <p>也可以将多个复选框绑定到同一个数组或集合的值</p>
                <p>Checked names: {{ checkedNames }}</p>
                <input type="checkbox" id="java" value="java" v-model="checkedNames">
                <label for="java">Java</label>
                <input type="checkbox" id="python" value="python" v-model="checkedNames">
                <label for="python">Python</label>
                <input type="checkbox" id="golang" value="golang" v-model="checkedNames">
                <label for="golang">Golang</label>
            </div>
           <div>
                <h2>单选框</h2>
                <div>Picked: {{ picked }}</div>
                <input type="radio" id="one" value="one" v-model="picked">
                <label for="one">One</label>
                <input type="radio" id="two" value="two" v-model="picked">
                <label for="two">Two</label>
           </div>
           <div>
                <h2>选择器</h2>
                <div>selected: {{ selected }}</div>
                <select  v-model="selected">
                    <option value="" disabled>Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <h2>多选(值绑定到一个数组):</h2>
                <div>Selected: {{ MultipleSelected }}</div>
                <select v-model="MultipleSelected" multiple>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <h2>选择器可以使用v-for动态渲染</h2>
                <div>Selected: {{ selected2 }}</div>
                <select v-model="selected2">
                    <option v-for="option in options" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
           </div>
           <div>
                <h2>值绑定</h2>
                
           </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const text = ref('test')
const message = ref('')

const checked = ref(true)

const checkedNames = ref([])

const picked = ref('')

const selected = ref('')

const MultipleSelected = ref([])

const selected2 = ref('A')
const options = ref([
    { text: 'one', value: 'A' },
    { text: 'two', value: 'B' },
    { text: 'three', value: 'C' },
])
</script>
<style scoped>
select[multiple]{
    width:100px;
}
</style>