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
    import SeoService from '@/services/seo.service'

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
            const SEO_PAGE_DATA = new SeoService({
                title: 'Home',
                description: 'Home Description'
            })
            return SEO_PAGE_DATA.getMetas()
        }
    }
</script>
