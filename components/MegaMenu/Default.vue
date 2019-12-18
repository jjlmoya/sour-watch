<template>
    <nav class="megamenu megamenu--default">
        <div v-for="collection in collections" :key="collection.slug" class="megamenu__element">
            <router-link
                class="link"
                :to="`/collekciya/${collection.slug}`"
            >
                {{ collection.name }}
            </router-link>
        </div>
    </nav>
</template>

<style lang="scss">@import 'megamenu.scss';
</style>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'MegaMenu',
        computed: {
            ...mapState({
                collections: state => state.collection.list
            })
        }
    }
</script>
