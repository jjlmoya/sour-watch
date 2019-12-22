<template>
    <div class="home">
        <Layout>
            <Inspirational
                :image="collection.image"
                :title="collection.name"
            />
            <CommonsDescription class="commons-description" :description="collection.description" />
            <h1 style="color: white;">
                <div>Buy {{ collection.name }}</div>

                <div>{{ collection.image }}</div>
                <div>{{ collection.slug }}</div>
                <div>{{ collection.weight }}</div>
                <div>{{ collection.banDiscount }}</div>
            </h1>
        </Layout>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Layout from '@/layouts/Default.vue'
    import Inspirational from '@/components/Inspirational/Default.vue'
    import CommonsDescription from '@/components/Commons/Description.vue'

    export default {
        name: 'Collection',
        components: {
            Layout,
            Inspirational,
            CommonsDescription
        },
        validate ({ params }) {
            return !!params.id
        },
        computed: {
            id () {
                return this.$route.params.id
            },
            ...mapState({
                collection: state => state.collection.selected
            })
        },
        head () {
            return {
                title: `Discover collection ${this.collection.name} | Vostok Europe`,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: `Discover collection ${this.collection.name} | Vostok Europe`
                    }
                ]
            }
        }
    }
</script>
