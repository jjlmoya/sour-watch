<template>
    <nav class="product-grid product-grid--default">
        <div v-for="product in products" :key="product.model" class="product-grid__element">
            <img class="element__image" :src="getImages(product.images)">
            <div class="title">
                {{ product.collection }}
            </div>
            <div :if="product.brand" class="brand">
                {{ product.brand }}
            </div>
            <div class="model">
                {{ product.model }}
            </div>
            <div class="price">
                {{ getCurrency(product.price) }}
            </div>
            <a class="button" :href="product.url">{{ buy }}</a>
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
        computed: {
            buy: () => business.buy,
            ...mapState('theme', [
                'theme'
            ]),
            ...mapState({
                products: state => state.watches.list
            })
        },
        methods: {
            getCurrency (price) {
                return currencyService.get(price)
            },
            getImages (images) {
                const _mainImage = function (images) {
                    const mainImages = images.filter(image => image.main)
                    return mainImages.length ? mainImages[0].url : images[0].url
                }
                return images & images.length > 0 ? _mainImage(images) : ''
            }
        }
    }
</script>
