<template>
    <div class="home">
        <Layout>
            Test {{ product }}
        </Layout>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Layout from '@/layouts/Default.vue'
    import CurrencyService from '@/services/currency.service'

    const currencyService = new CurrencyService({})

    export default {
        name: 'Checkout',
        components: {
            Layout
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
            return {
                title: `${this.product.brand} ${this.product.model} ${this.product.collection} por sólo ${currencyService.get(this.product.price)}`,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: 'description',
                        content: `Compra tu reloj ${this.product.brand} ${this.product.model} ${this.product.collection} por tan sólo ${currencyService.get(this.product.price)} y disfruta de una pieza de un valor exquisito`
                    }
                ]
            }
        }
    }
</script>
