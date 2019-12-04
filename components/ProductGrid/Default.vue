<template>
    <nav class="product-grid product-grid--default">
        <div v-for="product in products" :key="product.model" class="product-grid__element">
            <img class="element__image" :src="product.image">
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
                {{ product.price }}
            </div>
            <a class="button" :href="product.url">{{ buy }}</a>
        </div>
    </nav>
</template>

<style lang="scss">@import 'product-grid.scss';
</style>

<script>
    import { business } from '@/data/literals'
    import { watches } from '@/data/product'

    export default {
        name: 'ProductGrid',
        computed: {
            buy: () => business.buy,
            products: () => watches
        }
    }
</script>
