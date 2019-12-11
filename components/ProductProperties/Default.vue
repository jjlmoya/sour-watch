<template>
    <div class="product-properties product-properties--detail">
        <Double>
            <template slot="right">
                <span> a</span>
            </template>
            <template slot="left">
                <span> c</span>
            </template>
        </Double>
    </div>
</template>

<style lang="scss">@import 'product-properties.scss';
</style>

<script>
    import { mapState } from 'vuex'
    import { business } from '@/data/literals'
    import Double from '@/layouts/Double.vue'

    import CurrencyService from '@/services/currency.service'
    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductProperties',
        components: {
            Double
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
