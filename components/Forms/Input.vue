<template>
    <div class="input" :class="modifier">
        <label class="input__label" :class="`input__label--${type}`">{{ label }}</label>
        <input class="input__element" :placeholder="placeholder" :class="`input__element--${type}`" :type="type">
    </div>
</template>

<style lang="scss">@import 'input.scss';
</style>

<script>
    export default {
        props: {
            modifier: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            }
        }
    }
</script>
