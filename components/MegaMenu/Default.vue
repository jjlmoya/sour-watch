<template>
    <nav class="megamenu megamenu--default">
        <div v-for="collection in collections" :key="collection.slug" class="megamenu__element">
            <router-link
                :to="`/collekciya/${collection.slug}`"
            >
                {{ collection.name }}
            </router-link>
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
                return [
                    {
                        name: 'Ундина',
                        slug: 'undina'
                    },
                    {
                        name: 'Эверест',
                        slug: 'everest'
                    },
                    {
                        name: 'Экраноплан',
                        slug: 'ekranoplan'
                    },
                    {
                        name: 'Энергия-2',
                        slug: 'energy-2'
                    },
                    {
                        name: 'Луноход-2',
                        slug: 'lunokhod-2'
                    },
                    {
                        name: 'Алмаз',
                        slug: 'almaz'
                    },
                    {
                        name: 'Анчар',
                        slug: 'anchar'
                    },
                    {
                        name: 'ГАЗ-14 Лимузин',
                        slug: 'gaz-14-limusin'
                    },
                    {
                        name: 'Ракета №1',
                        slug: 'raketa-n1'
                    },
                    {
                        name: 'Экспедиция-2',
                        slug: 'expedition-2'
                    }
                ]
            }
        }
    }
</script>
