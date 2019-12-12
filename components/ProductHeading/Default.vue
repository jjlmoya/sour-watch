<template>
    <nav class="product-heading product-heading--default">
        <Double :columns="'1-1'">
            <template slot="right">
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
                    <div class="price">
                        {{ getCurrency(product.price) }}
                    </div>
                    <div class="availability">
                        В наличии <span :class="product.stock === 0 ? 'error' : product.stock > 2 ? 'info' : 'warning' ">{{ product.stock }} часов </span>
                    </div>
                </div>
                <div>{{ product.isNew }}</div>
                <div>{{ product.discount }}</div>
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
                <!--
                <div v-for="image in product.images" :key="image.id">
                    <img :src="image.url" :alt="image.alt" title="image.title" :description="image.description">
                </div>
                -->
            </template>
        </Double>
    </nav>
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
            }
        }
    }
</script>
