<template>
    <nav class="product-grid product-grid--default">
        <div v-for="product in products" :key="product.model" class="product-grid__element">
            <img class="element__image" :src="product.Images[0].url">
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
            }
        }
    }
</script>
