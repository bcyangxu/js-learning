<template lang="">
    <FancyButton>Click me</FancyButton>
    <div>
        <SubmitButton></SubmitButton>
        <SubmitButton>提交</SubmitButton>
    </div>
    <BaseLayout>
        <template #header>
            <h1>Here might be a page title</h1>
        </template>
        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>
        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </BaseLayout>
</template>
<script>
import BaseLayout from './BaseLayout.vue';
import FancyButton from './FancyButton.vue';
import SubmitButton from './SubmitButton.vue';

export default {
    components: { FancyButton, SubmitButton, BaseLayout }
}
</script>
<style lang="">
    
</style>