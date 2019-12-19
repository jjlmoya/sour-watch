<template>
    <div class="inspirational">
        <img class="inspirational__image" :src="image">
        <h1 class="inspirational__title font-3D">
            <span class="first-letter"> {{ `${title.slice(0,1)}` }}</span>
            {{ `${title.slice(1)}` }}
        </h1>
    </div>
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
            },
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
