<template>
    <div class="inspirational">
        <img class="inspirational__image" :src="image">
    </div>
</template>
<style lang="scss">@import 'inspirational.scss';
</style>
<script>
    export default {
        props: {
            image: {
                type: String,
                default: ''
            }
        }
    }
</script>
