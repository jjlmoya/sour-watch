<template>
    <div class="l-double" :class="`l-double--${columns}`">
        <div class="l-double__area l-double__left">
            <slot name="left" />
        </div>
        <div class="l-double__area l-double__right">
            <slot name="right" />
        </div>
    </div>
</template>
<style lang="scss">@import 'double.scss';
</style>

<script>
    export default {
        name: 'DoubleLayout',
        props: {
            columns: {
                type: String,
                default: '1-1'
            }
        }
    }
</script>
