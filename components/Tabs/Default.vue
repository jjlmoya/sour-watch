<template>
    <div class="tabs">
        <nav class="tabs__navigation">
            <div
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
                    <span v-if="show == tab.id">{{ tab.content }}</span>
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
        data () {
            return {
                show: 0,
                tabs: [
                    {
                        id: 'p1',
                        title: 'P1',
                        content: 'P1C'
                    },
                    {
                        id: 'p2',
                        title: 'P2',
                        content: 'P2C'
                    }
                ]
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
