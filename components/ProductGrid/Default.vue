<template>
    <nav class="product-grid product-grid--default">
        <div v-for="product in products" v-bind:key="product.model" class="product-grid__element">
            <img class="product-grid__element__image" :src="product.image">
            <div class="product-grid__element__title">{{product.name}}</div>
            <div class="product-grid__element__brand">{{product.brand}}</div>
            <div class="product-grid__element__model">{{product.model}}</div>
            <div class="product-grid__element__price">{{product.price}}</div>
            <a class="product-grid__element__button" :href="product.url">В КОРЗИНУ</a>
        </div>
    </nav>
</template>

<style lang="scss">@import 'product-grid.scss';
</style>

<script>
  export default {
    name: 'ProductGrid',
    computed: {
      products: () => {
        return [{
          image: 'https://dawos.ru/20300-home_default/26498-SUOK713-SWATCH-POLAWHITE.jpg',
          name: 'SWATCH POLAWHITE',
          brand: 'Swatch',
          model: 'SUOK713',
          price: '4 700 руб.',
          url: 'https://www.google.es',
          available: true,
          isNew: true,
          hasOffer: true
        }, {
          image: 'https://dawos.ru/19806-home_default/26303-T1154071704100-TISSOT-T-Race-Swissmatic.jpg',
          name: 'TISSOT T-Race Swissmatic',
          brand: 'Tissot',
          model: 'T115.407.17.041.00',
          price: '41 250 руб.',
          url: 'https://www.google.es',
          available: true,
          isNew: true,
          hasOffer: true
        }, {
          image: 'https://dawos.ru/20300-home_default/26498-SUOK713-SWATCH-POLAWHITE.jpg',
          name: 'SWATCH POLAWHITE',
          brand: 'Swatch',
          model: 'SUOK713',
          price: '4 700 руб.',
          url: 'https://www.google.es',
          available: true,
          isNew: true,
          hasOffer: true
        }, {
          image: 'https://dawos.ru/20300-home_default/26498-SUOK713-SWATCH-POLAWHITE.jpg',
          name: 'SWATCH POLAWHITE',
          brand: 'Swatch',
          model: 'SUOK713',
          price: '4 700 руб.',
          url: 'https://www.google.es',
          available: true,
          isNew: true,
          hasOffer: true
        }, {
          image: 'https://dawos.ru/20300-home_default/26498-SUOK713-SWATCH-POLAWHITE.jpg',
          name: 'SWATCH POLAWHITE',
          brand: 'Swatch',
          model: 'SUOK713',
          price: '4 700 руб.',
          url: 'https://www.google.es',
          available: true,
          isNew: true,
          hasOffer: true
        }]
      }
    }
  }
</script>
