<template>
    <h2>{{ msg }}</h2>
    <FancyButton>
        <span>{{ msg }}</span>
        <AwesomeIcon></AwesomeIcon>
    </FancyButton>
    <FancyButton></FancyButton>
    <BaseLayout>
        <template #header>
            <h1>Title</h1>
        </template>

        <!-- <template #default>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga autem asperiores sequi ad atque est nostrum ullam laudantium? Dicta tempore harum quia quos, cum et eos id laboriosam porro sed!</p>
        </template> -->
        <p>当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非template节点都被隐式的视为默认插槽的内容</p>
        <template #footer>
            END
        </template>
        <!-- 动态插槽名 -->
        <template #[dynamicSlotName]>
            <h2>world</h2>
        </template>
    </BaseLayout>
    <MyComponent v-slot="slotProps">
        {{ slotProps.text }} {{ slotProps.count }}
    </MyComponent>
    <FancyList :api-url="url" :per-page="10">
        <template #item="{body,username,likes}">
            <div class="item">
                <p>{{ body }}</p>
                <p class="meta">by {{ username }} | {{ likes }}</p>
            </div>
        </template>
    </FancyList>
    <h2>无渲染组件</h2>
    <MouseTracker v-slot="{x,y}">
        Mouse is at:{{ x }},{{ y }}
    </MouseTracker>
</template>
<script setup lang="ts">
import MyComponent from './MyComponent.vue';
import FancyButton from './FancyButton.vue';
import AwesomeIcon from './AwesomeIcon.vue';
import BaseLayout from './BaseLayout.vue';
import FancyList from './FancyList.vue';
import MouseTracker from './MouseTracker.vue';
import { ref } from 'vue';

const dynamicSlotName = ref('header')
const msg = 'hello'
const url = ref('test')
</script>
<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>