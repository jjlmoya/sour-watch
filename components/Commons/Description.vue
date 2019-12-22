<template>
    <div class="commons-description">
        {{ description }}
    </div>
</template>

<style lang="scss">
  @import 'description.scss';
</style>

<script>
    export default {
        props: {
            description: {
                type: String,
                default: ''
            }
        }
    }
</script>
