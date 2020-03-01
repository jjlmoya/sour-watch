<template>
    <div class="tabs">
        <nav class="tabs__navigation">
            <div
                class="tabs__navigation-element"
                v-for="tab in tabs"
                :key="tab.id"
                :class="{'is-active': show == tab.id}"
            >
                <a @click.prevent="show = tab.id">{{ tab.title }}</a>
            </div>
        </nav>
        <div class="tabs__content">
            <transition-group name="fade-up" target="div" appear @click.native="openTab($event);">
                <div
                    v-for="tab in tabs"
                    :key="tab.id"
                >
                    <div v-if="show === tab.id" class="tabs__content-element">
                        {{ tab.content }}
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<style lang="scss">@import 'tabs.scss';
</style>

<script>
    export default {
        name: 'Tabs',
        props: {
            tabs: {
                type: Array,
                default: () => [
                    {
                        id: 'p1',
                        title: 'Oplata 1',
                        content: 'P1C'
                    },
                    {
                        id: 'p2',
                        title: 'Oplata 2',
                        content: 'P2C'
                    }
                ]
            }
        },
        data () {
            return {
                show: 0
            }
        },
        methods: {
            openTab: (e) => {
                if (e.target.dataset.show) {
                    e.preventDefault()
                    this.show = e.target.dataset.show
                }
            }
        },
        mounted () {
            this.show = this.tabs[0].id
        }
    }
</script>
