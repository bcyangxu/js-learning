<template>
    <div class="outer">
        <h3>Tooltips with vue3 Teleport</h3>
        <div>
            <MyModal/>
        </div>
    </div>
    <div>
        <button id="show-modal" @click="showModal = true">Show Modal</button>
        <Teleport to="body">
            <Modal :show="showModal" @close="showModal = false">
                <template #header>
                    <h3>custom header</h3>
                </template>
            </Modal>
        </Teleport>
    </div>
</template>
<script setup lang="ts">
import MyModal from './MyModal.vue';
import Modal from './Modal.vue';
import { ref } from 'vue';
const showModal = ref(false)
</script>
<style scoped>

</style>