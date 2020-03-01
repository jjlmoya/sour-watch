<template>
    <div class="home">
        <Layout>
            <ProductHeading :product="product" />
            <ProductProperties :product="product" />
        </Layout>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Layout from '@/layouts/Default.vue'
    import ProductHeading from '@/components/ProductHeading/Default.vue'
    import ProductProperties from '@/components/ProductProperties/Default.vue'
    import CurrencyService from '@/services/currency.service'
    import SeoService from '@/services/seo.service'

    const currencyService = new CurrencyService({})

    export default {
        name: 'Watch',
        components: {
            Layout,
            ProductHeading,
            ProductProperties
        },
        validate ({ params }) {
            return !!params.id
        },
        computed: {
            id () {
                return this.$route.params.id
            },
            ...mapState({
                product: state => state.watches.selected
            })
        },
        head () {
            const SEO_PAGE_DATA = new SeoService({
                title: `${this.product.brand} ${this.product.model} ${this.product.collection} por sólo ${currencyService.get(this.product.price)}`,
                description: `Compra tu reloj ${this.product.brand} ${this.product.model} ${this.product.collection} por tan sólo ${currencyService.get(this.product.price)} y disfruta de una pieza de un valor exquisito`
            })
            return SEO_PAGE_DATA.getMetas()
        }
    }
</script>
