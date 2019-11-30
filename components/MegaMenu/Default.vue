<template>
    <nav class="megamenu megamenu--default">
        <div v-for="collection in collections" v-bind:key="collection" class="megamenu__element">
            <a href="#">{{ collection }}</a>
        </div>
    </nav>
</template>

<style lang="scss">@import 'megamenu.scss';
</style>

<script>
    export default {
        name: 'MegaMenu',
        computed: {
            collections: () => {
                return ['Ундина',
                    'Эверест',
                    'Экраноплан',
                    'Энергия-2',
                    'Луноход-2',
                    'Алмаз',
                    'Анчар',
                    'ГАЗ-14 Лимузин',
                    'Ракета №1',
                    'Экспедиция-2',
                    'Ремешки',
                    'Запасные части']
            }
        }
    }
</script>
