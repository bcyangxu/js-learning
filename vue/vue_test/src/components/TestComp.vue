<template>
  <AlertBox>can not found Object</AlertBox>
  <div :style="{fontSize:postFontSize + 'em'}">
    <Counter></Counter>
    <BlogPost title="Java is the Best language!"></BlogPost>
    <BlogPost 
    v-for="post in posts" 
    :key="post.id" 
    :title="post.title" 
    @enlarge-text="postFontSize += 0.1"
    >
    </BlogPost>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue"
import BlogPost from "../components/BlogPost.vue"
import AlertBox from "../components/AlertBox.vue"

export default {
  name: "App",
  components: {
    Counter,
    BlogPost,
    AlertBox
  },
  data () {
    return{
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize:1
    }
  }
};
</script>

<style>

</style>
