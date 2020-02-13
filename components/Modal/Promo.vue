<template>
    <ul class="c-modal-promo">
        <img class="c-modal-promo__image" src="https://cdn.pixabay.com/photo/2014/10/11/09/16/bargain-484367_960_720.png">
        <li v-for="promo in promos" :key="promo" class="c-modal-promo__element">
            {{ promo }}
        </li>
    </ul>
</template>

<style lang="scss">
  @import 'promo.scss';
</style>

<script>
    export default {
        name: 'ModalPromo',
        props: {
            promos: {
                type: Array,
                default: () => [
                    'Скидка 10%.',
                    'Бесплатная доставка.',
                    'Рассрочка 0%.'
                ]
            }

        }
    }
</script>
