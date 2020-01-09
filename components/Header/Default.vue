<template>
    <header class="header header--default">
        <div class="header--desktop">
            <Logo :modifier="`header__logo`" />
            <div class="header__contact">
                <a class="phone" :href="`tel:${phone}`" type="phone">{{ phone }}</a>
                <div class="time">
                    {{ time }}
                </div>
                <div class="icon">
                    <img src="icons/smartphone.svg">
                </div>
            </div>
            <div class="header__searcher">
                <input class="searcher" type="text" :placeholder="search">
                <div class="icon">
                    <img src="icons/search.svg">
                </div>
            </div>
        </div>
        <div class="header--mobile">
            <Logo :modifier="`header__logo`" />
            <div class="header--mobile__toggle" :class="`${active ? 'is-active' : ''}`" @click="toggle">
                <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 384 384"
                    style="enable-background: new 0 0 384 384;"
                    xml:space="preserve"
                >
                    <rect x="0" y="277.333" width="384" height="42.667" />
                    <rect x="0" y="170.667" width="384" height="42.667" />
                    <rect x="0" y="64" width="384" height="42.667" />
                </svg>
            </div>
            <div class="header--mobile__options" :class="`${active ? 'is-active' : ''}`">
                <div class="header__contact">
                    <a class="phone" :href="`tel:${phone}`" type="phone">{{ phone }}</a>
                    <div class="time">
                        {{ time }}
                    </div>
                    <div class="icon">
                        <img src="icons/smartphone.svg">
                    </div>
                </div>
                <div class="header__searcher">
                    <input class="searcher" type="text" :placeholder="search">
                    <div class="icon">
                        <img src="icons/search.svg">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
  @import 'header.scss';
</style>

<script>
    import Logo from '@/components/Logo/Default.vue'
    import { header } from '@/data/literals'

    export default {
        components: {
            Logo
        },
        data () {
            return {
                active: false
            }
        },
        computed: {
            phone () {
                return header.phone
            },
            time () {
                return header.time
            },
            search () {
                return header.search
            }
        },
        methods: {
            toggle () {
                this.active = !this.active
            }
        }
    }
</script>
