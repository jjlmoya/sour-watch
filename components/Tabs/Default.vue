<template>
    <div class="tabs">
        <div v-if="tabs.length > 0" class="">
            <nav class="tabs__navigation">
                <div
                    v-for="tab in tabs"
                    :key="tab.id"
                    class="tabs__navigation-element"
                    :class="{'is-active': show == tab.id}"
                    @click.prevent="show = tab.id"
                >
                    {{ tab.title }}
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
        <div v-if="tabs.length === 0">
            <slot />
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
                default: () => []
            }
        },
        data () {
            return {
                show: 0
            }
        },
        mounted () {
            if (this.tabs.length > 0) {
                this.show = this.tabs[0].id
            }
        }
    }
</script>
