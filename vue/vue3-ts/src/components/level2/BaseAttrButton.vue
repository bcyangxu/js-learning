<template>
    <div class="btn=wrapper">
        <button v-bind="$attrs" @click="onClick" class="btn">button</button>
        <span>{{ $attrs }}</span>
    </div>
</template>
<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs);
const onClick = () => {
    alert('我是子组件的点击事件')
    console.log('grandchild');
}
</script>
<script lang="ts">
export default {
    // 禁用 Attributes继承
    // 如果不想让一个组件自动继承attributes,可以在组件选项中设置inheritAttrs:false
    // 如果使用了script setup，需要一个额外的script块来声明这个选项声明
    // inheritAttrs: false
}
</script>
<style scoped>

</style>