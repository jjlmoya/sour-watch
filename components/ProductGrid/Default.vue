<template>
    <div v-if="products.length > 0" class="product-grid product-grid--default">
        <div v-if="title" class="product-grid__title">
            <Title :tag="'h3'" :title="title" :ghost="true" />
        </div>
        <div class="product-grid__container">
            <div v-for="product in products" :key="product.model" class="product-grid__element">
                <router-link :to="{ name:'chasy-id', params: {id: product.model} }">
                    <img class="element__image" :src="getMainImage(product.images)">
                    <div v-if="product.collection" class="title">
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
                </router-link>
                <nuxt-link :to="{ name:'checkout-id', params: {id: product.model} }" class="button button--ghost button--secondary button--s">
                    {{ buy }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">@import 'product-grid.scss';
</style>

<script>
    import { mapState } from 'vuex'
    import { business } from '@/data/literals'
    import Title from '@/components/Commons/Title.vue'
    import CurrencyService from '@/services/currency.service'
    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductGrid',
        components: {
            Title
        },
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
