<template>
    <div>
        <input type="text" v-model="searchText">
        <p>{{ searchText }}</p>
        <!-- 编译器会对v-model进行更冗长的等价展开,等价于下面的代码 -->
        <input type="text"
            :value="searchText"
            @input="searchText = $event.target.value"
        >
        <p>{{ searchText }}</p>
    </div>
    <CustomInput 
        :model-value="searchText"
        @update:modelValue="newVal => searchText = newVal"
    />
    <ComputedInput 
        :model-value="searchText"
        @update:model-value="newVal => searchText = newVal"
        />
        <hr>
    <UserName
        v-model:first-name="first"
        v-model:last-name="last"
    />
    <p>{{ first }} {{ last }}</p>
    <div>
        <h2>处理v-model修饰符</h2>
        <UpperInput
            v-model.capitalize="myText"
        />
    </div>
    <div>
        <ModifiersDemo
            v-model:title.capitalize="myText"
        />
    </div>
</template>
<script setup lang="ts">
import ModifiersDemo from './ModifiersDemo.vue';
import ComputedInput from './ComputedInput.vue';
import CustomInput from './CustomInput.vue';
import UserName from './UserName.vue';
import UpperInput from './UpperInput.vue';
import {ref} from 'vue'
const searchText = ref('test')
const first = ref('yang')
const last = ref('xu')
const myText = ref('aaa')
</script>
<style scoped>

</style>