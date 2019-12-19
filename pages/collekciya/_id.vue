<template>
    <div class="home">
        <Layout>
            <Inspirational :image="collection.image" />
            <h1 style="color: white;">
                <div>Buy {{ collection.name }}</div>
                <div>{{ collection.description }}</div>
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

    export default {
        name: 'Collection',
        components: {
            Layout,
            Inspirational
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
                title: 'Vostok Europa - ' + this.id,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'My custom description'
                    }
                ]
            }
        }
    }
</script>
