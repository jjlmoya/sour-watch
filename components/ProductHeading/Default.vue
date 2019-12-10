<template>
    <nav class="product-heading product-heading--default">
        <div>
            <h2>Reloj</h2>
            <div>{{ product.collection }}</div>
            <div>{{ product.brand }}</div>
            <div>{{ product.model }}</div>
            <div>{{ getCurrency(product.price) }}</div>
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
            <h3>Images</h3>
            <div v-for="image in product.images" :key="image.id">
                <img :src="image.url" :alt="image.alt" title="image.title" :description="image.description">
            </div>
        </div>
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
    </nav>
</template>

<style lang="scss">@import 'product-heading.scss';
</style>

<script>
    import { mapState } from 'vuex'
    import { business } from '@/data/literals'
    import CurrencyService from '@/services/currency.service'
    const currencyService = new CurrencyService({})
    export default {
        name: 'ProductHeading',
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
