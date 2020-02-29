<template>
    <div class="form">
        <legend class="form__legend">
            {{ title }}
        </legend>
        <div class="form__fields">
            <slot />
        </div>
    </div>
</template>
<style lang="scss">@import 'form.scss';
</style>
<script>

    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
