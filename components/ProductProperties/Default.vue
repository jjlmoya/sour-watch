<template>
    <div class="product-properties product-properties--detail">
        <span> {{ product.model }}</span>
    </div>
</template>

<style lang="scss">@import 'product-properties.scss';
</style>

<script>
    import { mapState } from 'vuex'
    import { business } from '@/data/literals'
    import CurrencyService from '@/services/currency.service'
    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductProperties',
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
