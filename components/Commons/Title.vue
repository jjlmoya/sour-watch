<template>
    <div :is="tag" class="c-title" :class="{ 'c-title--ghost' : ghost}">
        <span v-for="word in title.split(' ')" :key="word" class="c-title__word">
            {{ word }}
        </span>
    </div>
</template>

<style lang="scss">
  @import 'title.scss';
</style>

<script>
    export default {
        props: {
            tag: {
                type: String,
                default: 'h2'
            },
            title: {
                type: String,
                default: ''
            },
            ghost: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
