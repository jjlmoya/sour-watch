<template>
    <div class="product-heading product-heading--default" :class="product.isNew ? 'is-new' : ''">
        <Double :columns="'2-1'">
            <template slot="right">
                <div class="product-heading__info">
                    <h1 class="product-heading__title">
                        <div class="title">
                            {{ product.collection }},
                            <span class="f-strong">{{ product.model }}</span>
                        </div>
                        <div class="subtitle">
                            ({{ product.brand }})
                        </div>
                    </h1>
                    <div class="product-heading__details">
                        <div v-if="product.discount" class="discount">
                            -{{ product.discount }}%
                        </div>

                        <div class="price">
                            <div v-if="product.discount" class="price--old">
                                {{ getCurrency(product.price) }}
                            </div>
                            {{ getCurrency(getDiscountPrice(product.price, product.discount)) }}
                        </div>
                        <div class="availability">
                            В наличии <span :class="product.stock === 0 ? 'error' : product.stock > 2 ? 'info' : 'warning' ">{{ product.stock }} часов </span>
                        </div>
                    </div>

                    <div>{{ product.description }}</div>
                    <div>{{ product.gender }}</div>
                    <div>{{ product.mechanism }}</div>
                    <div>{{ product.calibre }}</div>
                    <div>{{ product.mechanismOrigin }}</div>
                    <div>{{ product.watchCase }}</div>
                    <div>{{ product.waterResistant }}</div>
                    <div>{{ product.width }}</div>
                    <div>{{ product.height }}</div>
                    <div>{{ product.thickness }}</div>
                    <div>{{ product.glass }}</div>

                    <div>
                        <h2>Pulseras</h2>
                        <div v-for="bracelet in product.bracelets" :key="bracelet.id">
                            {{ bracelet.material }}
                        </div>
                    </div>
                    <div>
                        <h2>Propiedades</h2>
                        <div v-for="property in product.properties" :key="property.id">
                            {{ property.name }} - {{ property.WatchProperty.value }}
                        </div>
                    </div>
                </div>
            </template>
            <template slot="left">
                <Slider :images="product.images" />
            </template>
        </Double>
    </div>
</template>

<style lang="scss">@import 'product-heading.scss';
</style>

<script>
    import { mapState } from 'vuex'
    import { business } from '@/data/literals'
    import CurrencyService from '@/services/currency.service'
    import Double from '@/layouts/Double.vue'
    import Slider from '@/components/Slider/Default.vue'

    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductHeading',
        components: {
            Double,
            Slider
        },
        computed: {
            buy: () => business.buy,
            ...mapState({
                product: state => state.watches.selected
            })
        },
        methods: {
            getCurrency (price) {
                return currencyService.get(price)
            },
            getDiscountPrice (price, discount) {
                return price - (price * (discount / 100))
            }
        }
    }
</script>
