<template>
    <!-- 基本使用 -->
    <div class="demo">
        <label>
            <input type="radio" v-model="current" :value="CompA">A
        </label>
        <label>
            <input type="radio" v-model="current" :value="CompB">B
        </label>
        <KeepAlive>
            <component :is="current"></component>
        </KeepAlive>
    </div>
    <!-- 包含排除 -->
    <div>

    </div>
</template>
<script setup lang="ts">
import { shallowRef } from 'vue'
import CompA from './CompA.vue'
import CompB from './CompB.vue'

const current = shallowRef(CompA)

</script>
<style scoped>

</style>