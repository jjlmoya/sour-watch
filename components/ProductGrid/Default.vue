<template>
    <nav class="product-grid product-grid--default">
        <div v-for="product in products" :key="product.model" class="product-grid__element">
            <a :href="getUri(product.model)">
                <img class="element__image" :src="getMainImage(product.images)">
                <div class="title">
                    {{ product.collection }}
                </div>
                <div :if="product.brand" class="brand">
                    {{ product.brand }}
                </div>
                <span class="model" :href="getUri(product.model)">
                    {{ product.model }}
                </span>
                <div class="price">
                    {{ getCurrency(product.price) }}
                </div>
            </a>
            <a class="button button--ghost button--secondary button--s" :href="product.url">{{ buy }}</a>
        </div>
    </nav>
</template>

<style lang="scss">@import 'product-grid.scss';
</style>

<script>
    import { mapState } from 'vuex'
    import { business } from '@/data/literals'
    import CurrencyService from '@/services/currency.service'
    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductGrid',
        props: {
            products: {
                type: Array,
                default: () => []
            },
            title: {
                type: String,
                default: ''
            }
        },
        computed: {
            buy: () => business.buy,
            ...mapState('theme', [
                'theme'
            ])
        },
        methods: {
            getUri (model) {
                return './chasy/' + encodeURIComponent(model)
            },
            getCurrency (price) {
                return currencyService.get(price)
            },
            getMainImage (images) {
                const _mainImage = function (images) {
                    const mainImages = images.filter(image => image.main)
                    return mainImages.length ? mainImages[0].url : images[0].url
                }
                return images.length > 0 ? _mainImage(images) : ''
            }
        }
    }
</script>
