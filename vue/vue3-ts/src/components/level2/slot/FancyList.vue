<template>
    <div>
        <ul>
            <li v-if="!items.length">Loding...</li>
            <li v-for="item in items">
                <slot name="item" v-bind="item"></slot>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['api-url','per-page'])
const items:any = ref([])

setTimeout(() => {
    items.value = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
	{ body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
    ]
},1000)
</script>
<style scoped>
ul{
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li{
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
    color: #222222;
}
</style>