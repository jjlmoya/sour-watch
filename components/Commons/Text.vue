<template>
    <div v-if="title || description" class="commons-text">
        <div class="commons-text__title" :v-if="title">
            {{ title }}
        </div>
        <div class="commons-text__description" :v-if="description">
            {{ description }}
        </div>
    </div>
</template>

<style lang="scss">
  @import 'commons-text.scss';
</style>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            }
        }
    }
</script>
