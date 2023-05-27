<template>
    <div>
        <h1>v-for</h1>
        <ul>
            <li 
            v-for="({message},index) in items"
            >{{ parentMsg }}--{{ index }}--{{ message }}</li>
        </ul>
        <h1>v-for与对象</h1>
        <ul>
            <li v-for="(value,key,index) in obj">{{index}} -- {{ key }} : {{ value }}</li>
        </ul>
        <h1>v-for里使用范围值</h1>
        <span v-for="n in 10">{{ n }},</span>
        <h1>v-for与v-if</h1>
        <!-- <ul>
            v-if比v-for优先级更高，v-if的条件将无法访问到v-for作用域内定义的变量别名
            会报错，属性todo此时没有再该实例上定义
            <li v-for="todo in todos" v-if="!todo.isComplete">
                {{ todo.name }}
            </li>
        </ul> -->
        <!--  在外新包装一层template再在其上使用v-for可以解决这个问题 -->
        <template v-for="todo in todos">
            <li v-if="!todo.isComplete">
                {{ todo.name }}
            </li>
        </template>
        <div>
            <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Add a todo</label>
                <input type="text"
                    v-model="newTodoText"
                    id="new-todo"
                    placeholder="E.g. Feed the cat"
                >
                <button>Add</button>
            </form>
            <ul>
                <TodoItem
                    v-for="(todo,index) in todoList"
                    :key="todo.id"
                    :title="todo.title"
                    @remove="todoList.splice(index,1)"
                >

                </TodoItem>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from '../level1/TodoItem.vue'

const parentMsg = ref('Parent')
const items = ref([{message:'foo'},{message:'bar'}])

const obj = {
    name:'yangxu',
    age:22,
    school:'HBNU'
}

const todos = ref([
    {
        name:'java',
        isComplete:true
    },
    {
        name:'js',
        isComplete:false
    },
    {
        name:'golang',
        isComplete:false
    }
])

const newTodoText = ref('')

const todoList = ref([
    {
        id:1,
        title:'吃饭'
    },
    {
        id:2,
        title:'睡觉'
    },
    {
        id:3,
        title:'打豆豆'
    }
])

let nextTodoId = 4

const addNewTodo = () =>{
    todoList.value.push(
        {
            id:nextTodoId++,
            title:newTodoText.value
        }
    )
    newTodoText.value = ''
}
</script>
<style scoped>

</style>