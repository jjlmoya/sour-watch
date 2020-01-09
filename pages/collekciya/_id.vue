<template>
    <div class="home">
        <Layout>
            <Inspirational
                :image="collection.image"
                :title="collection.name"
            />
            <CommonsText :title="`Por qué vestir ${collection.name}`" :description="collection.description" />
            <ProductGrid :products="watches" :title="`Compra relojes de la collección ${collection.name}`" />
        </Layout>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Layout from '@/layouts/Default.vue'
    import Inspirational from '@/components/Inspirational/Default.vue'
    import CommonsText from '@/components/Commons/Text.vue'
    import ProductGrid from '@/components/ProductGrid/Default.vue'

    export default {
        name: 'Collection',
        components: {
            Layout,
            Inspirational,
            CommonsText,
            ProductGrid
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
            }),
            watches () { return this.collection.watches }
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
