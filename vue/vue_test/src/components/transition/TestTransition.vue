<template lang="">
    <div>
        <button @click="show = !show">Toggle</button>
        <transition
            name="custom-classes"
            enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounceOutRight"
        >
            <p v-if="show" style="margin-top:20px;text-align:center">Hello World!!!</p>
        </transition>
        <transition name="nested">
            <div v-if="show" class="outer">
                <div class="inner">
                    Hello
                </div>
            </div>
        </transition>
    </div>
</template>
<script setup>

import { ref } from 'vue'
const show = ref(true)

</script>
<style>
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to{
    opacity:0;
}

.slide-fade-enter-active{
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active{
    transition: all 0.8s cubic-bezier(1,0.5,0.8,1);
}

.slide-fade-enter-from,
.slide-fade-leave-to{
    transform: translateX(20px);
    opacity:0;
}

.bounce-enter-active{
    animation:bounce-in 0.5s;
}
.bounce-leave-active{
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale((1.25));
    }
    100% {
        transform: scale(1);
    }
}

.outer,.inner{
    background-color: #eee;
    padding: 30px;
    min-height: 100px;
}
.inner{
    background-color: #ccc;
}
.nested-enter-active,.nested-leave-active{
    transition: all 0.3s ease-in-out;
}
.nested-leave-active{
    transition-delay: 0.25s;
}
.nested-enter-from,
.nested-leave-to{
    transform: translateX(30px);
    opacity: 0;
}
</style>