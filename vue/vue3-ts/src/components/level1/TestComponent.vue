<template>
    <div>
        <ButtonCounter></ButtonCounter>
    </div>
    <div>
        <h2>Passage</h2>
        <div :style="{ fontSize: postFontSize + 'em'}">
            <BlogPost
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                @enlarge-text="postFontSize += 0.1"
            />
        </div>
        <AlertBox>test</AlertBox>
    </div>
    <div class="demo">
        <h2>动态组件</h2>
        <button
            v-for="_,tab in tabs"
            :key="tab"
            :class="['tab-button',{active: currentTab === tab}]"
            @click="currentTab = tab"
        >
            {{ tab }}
        </button>
        <component :is="tabs[currentTab]" class="tab"></component>
    </div>
    <div>
        <h2>DOM模板解析</h2>
        <test-post post-title="hello"></test-post>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ButtonCounter from './ButtonCounter.vue';
import BlogPost from './BlogPost.vue'
import AlertBox from './AlertBox.vue';
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

import Home from './Home.vue'
import Posts from './Posts.vue'
import Archive from './Archive.vue'

const currentTab = ref('Home')
const tabs = {
    Home,
    Posts,
    Archive
}
const postFontSize = ref(1)

const TestPost = {
    props:['postTitle'],
    emits:['updatePost'],
    template:`<h3>{{postTitle}}</h3>`
}
</script>
<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>