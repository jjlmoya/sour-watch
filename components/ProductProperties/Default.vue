<template>
    <div class="product-properties product-properties--detail">
        <div class="product-properties__title">
            <Title :tag="'h2'" :title="`Características del modelo ${product.model}`" />
        </div>
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
                    }
                    ]"
                />
            </template>
            <template slot="right">
                <Specifications
                    :specifications="[... getProductProperties(product.properties)
                    ]"
                />
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
    import Title from '@/components/Commons/Title.vue'

    import CurrencyService from '@/services/currency.service'
    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductProperties',
        components: {
            Double,
            Specifications,
            Title
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
            },
            getProductProperties (properties) {
                return properties.map((property) => {
                    return {
                        name: property.name,
                        value: property.WatchProperty.value
                    }
                })
            }
        }
    }
</script>
