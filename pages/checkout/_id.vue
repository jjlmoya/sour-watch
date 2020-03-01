<template>
    <div class="checkout">
        <Layout>
            <Double>
                <template slot="left">
                    <form class="checkout__form">
                        <Form :title="'Datos Personales'">
                            <Input
                                :label="'Nombre:'"
                                :type="'text'"
                                :modifier="'name'"
                                :placeholder="'Nombre'"
                            />
                            <Input
                                :label="'Teléfono:'"
                                :type="'phone'"
                                :modifier="'phone'"
                                :placeholder="'Teléfono'"
                            />
                            <Input
                                :label="'Email:'"
                                :type="'email'"
                                :modifier="'email'"
                                :placeholder="'Email'"
                            />
                            <Input
                                :label="'Confirmar Email:'"
                                :type="'email'"
                                :modifier="'email'"
                                :placeholder="'Confirmar Email'"
                            />
                        </Form>
                        <Form :title="'Datos de Pago'">
                            <Tabs />
                            <Input
                                :label="'Nombre:'"
                                :type="'text'"
                                :modifier="'name'"
                                :placeholder="'Nombre'"
                            />
                            <Input
                                :label="'Teléfono:'"
                                :type="'phone'"
                                :modifier="'phone'"
                                :placeholder="'Teléfono'"
                            />
                            <Input
                                :label="'Email:'"
                                :type="'email'"
                                :modifier="'email'"
                                :placeholder="'Email'"
                            />
                            <Input
                                :label="'Confirmar Email:'"
                                :type="'email'"
                                :modifier="'email'"
                                :placeholder="'Confirmar Email'"
                            />
                        </Form>
                    </form>
                </template>
                <template slot="right">
                    Test {{ product }}
                </template>
            </Double>
        </Layout>
    </div>
</template>

<style lang="scss">@import 'checkout.scss';
</style>

<script>
    import { mapState } from 'vuex'
    import Layout from '@/layouts/Default.vue'
    import Double from '@/layouts/Double.vue'
    import Form from '@/components/Forms/Form.vue'
    import Input from '@/components/Forms/Input.vue'
    import Tabs from '@/components/Tabs/Default.vue'
    import CurrencyService from '@/services/currency.service'
    import SeoService from '@/services/seo.service'

    const currencyService = new CurrencyService({})

    export default {
        name: 'Checkout',
        components: {
            Layout,
            Double,
            Form,
            Input,
            Tabs
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
