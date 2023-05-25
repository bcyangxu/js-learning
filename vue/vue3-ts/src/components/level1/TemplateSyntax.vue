<template lang="">
    <div>
        <!-- 模板插值语法,在script声明的一个变量可以直接在template使用，用法为：{{变量名}} -->
        {{msg}}
        <!-- 模板语法可以编写条件运算 -->
        <p>{{msg== 0 ? '晴天':'雨天'}}</p>
        <!-- 支持运算 -->
        <p>{{num+1}}</p>
        <!-- 支持操作api -->
        <p>{{msg.split(',')}}</p>
        <!-- 指令 
            v-text用来显示文本
        -->
        <p v-text="msg"></p>
        <!-- v-html展示富文本 -->
        <p v-html="html"></p>
        <!-- v-if控制元素的显示隐藏 -->
        <p v-if="isShow">看得到我吗？</p>
        <p v-else-if="!isShow">看不到我了吧</p>
        <p v-else>我藏起来了</p>
        <!-- v-on 简写@ 给元素添加事件 -->
        <button @click="isShow = !isShow">toggle</button>
        <!-- v-show 用来控制元素的显示隐藏 display:none;切换 -->
        <p v-show="isShow">我是v-show控制的</p>
        <!-- v-for用来遍历元素 -->
        <ul>
            <li v-for="(item,index) in books" :key="index">{{index}}-{{item}}</li>
        </ul>
    </div>
    <div id="box">
        <!-- v-on 修饰符 
            stop阻止冒泡 -->
        <div @click="parent" class="parent">
            Parent
            <div @click="child" class="child">Child</div>
        </div>
        <div @click="parent" class="parent">
             Parent
            <div @click.stop="child" class="child">Child</div>
        </div>
    </div>
    <div>
        <form action="/">
            <button @click.prevent="submit" type="submit">submit</button>
        </form>
    </div>
    <!-- v-bind 绑定元素的属性 -->
    <div :class="[flag ? 'active' : 'other','h']">v-bind绑定class</div>
    <!-- v-bind 绑定class案例2 -->
    <div :class="flag2">{{flag2}}</div>
    <!-- v-bind绑定style案例 -->
    <div :style="style">v-bind绑定stytle案例</div>

    <!-- v-model案例 -->
    <div>
        <input type="text" v-model="message"/>
        <div>{{message}}</div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const msg = 'hello,world'
const num = 1
const html = '<em>test</em>'
const isShow = ref(true)
const books = ['java','js','python']

const child = () => {
    console.log('child');
}

const parent = () => {
    console.log('parent');
}

const submit = () => {
    console.log('child');
}

const flag:boolean = false
type Cls = {
    other:boolean,
    h:boolean
}
const flag2: Cls = {
    other:false,
    h:true
}

type Style = {
    height:string,
    color:string,
    border:string
}

const style:Style = {
    height:'200px',
    color:'blue',
    border:'1px solid #fff'
}

const message = ref('v-model')
</script>
<style scoped>
    .parent{
        height: 200px;
        width: 300px;
        background-color: #fff;
        color: #222;
    }
    .child{
        height: 100px;
        width: 150px;
        background-color: gray;
    }

#box{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    
}
#box .parent{
    margin: 10px;
}

.active{
    color:red;
}

.other{
    color:green;
}

.h{
    height: 300px;
    border:1px solid #ccc;
}
</style>