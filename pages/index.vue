<template>
    <div class="home" :class="theme">
        <Layout>
            <Slider />
            <ProductGrid :products="products" :title="'Nuevos Relojes'" />
            <ProductGrid :products="products" :title="'Los más buscados'" />
            <ProductGrid :products="products" :title="'Los más comprados'" />
        </Layout>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Layout from '@/layouts/Default.vue'
    import Slider from '@/components/Slider/Default.vue'
    import ProductGrid from '@/components/ProductGrid/Default.vue'

    export default {
        name: 'Home',
        components: {
            Layout,
            Slider,
            ProductGrid
        },
        computed: {
            ...mapState('theme', [
                'theme'
            ]),
            ...mapState({
                products: state => state.watches.list
            })
        },
        created () {
            this.$store.commit('theme/set', 'vostok')
        },
        head () {
            return {
                title: 'Vostok Europa',
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
