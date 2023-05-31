<template>
    <Transition>
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">default header</slot>
                </div>

                <div class="modal-body">
                    <slot name="body">default body</slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">default footer
                        <button
                            class="modal-default-button"
                            @click="$emit('close')"
                        >OK</button>
                    </slot>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
const props = defineProps({
    show:Boolean
})
</script>
<style scoped>
.modal-mask{
    position:fixed;
    z-index:9998;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    transition: opacity  0.3s ease;
}

.modal-container{
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    border-radius: 2px;
    box-shadow: 0px 2px 8px rgba(0,0,0,0.33);
    transition: all 0.3s ease;
}

.modal-header h3{
    margin: 20px 0;
    color: #42b983;
}

.modal-body{
    margin: 20px 0;
}

.modal-default-button{
    float: right;
}

/* 对于transition="model" 的元素来说，
当通过Vue.js切换它们的可见性时，以下样式会被自动应用
*/
.modal-enter-form{
    opacity: 0;
}

.modal-leave-to{
    opacity: 0;
}

.modal-enter-from .modal-container,
modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>