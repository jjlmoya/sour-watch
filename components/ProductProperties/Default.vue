<template>
    <div class="product-properties product-properties--detail">
        <h2> Características del Reloj: </h2>
        <Double>
            <template slot="left">
                <Specifications
                    :specifications="[{
                        name: 'Gender',
                        value: product.gender
                    }, {
                        name: 'Mechanism',
                        value: product.mechanism
                    }, {
                        name: 'Calibre',
                        value: product.calibre
                    }, {
                        name: 'Origin',
                        value: product.mechanismOrigin
                    }, {
                        name: 'watchCase',
                        value: product.watchCase
                    }, {
                        name: 'waterResitant',
                        value: product.waterResistant
                    }, {
                        name: 'width',
                        value: product.width
                    }, {
                        name: 'height',
                        value: product.height
                    }, {
                        name: 'thickness',
                        value: product.thickness
                    }, {
                        name: 'glass',
                        value: product.glass
                    }]"
                />
            </template>
            <template slot="right">
                <span> c</span>
            </template>
        </Double>
    </div>
</template>

<style lang="scss">@import 'product-properties.scss';
</style>

<script>
    import { business } from '@/data/literals'
    import Double from '@/layouts/Double.vue'
    import Specifications from '@/components/Specifications/Default.vue'
    import CurrencyService from '@/services/currency.service'
    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductProperties',
        components: {
            Double,
            Specifications
        },
        props: {
            product: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            buy: () => business.buy
        },
        methods: {
            getCurrency (price) {
                return currencyService.get(price)
            }
        }
    }
</script>
