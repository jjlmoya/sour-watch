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
                    <img src="/icons/smartphone.svg">
                </div>
            </div>
            <div class="header__searcher">
                <input class="searcher" type="text" :placeholder="search">
                <div class="icon">
                    <img src="/icons/search.svg">
                </div>
            </div>
        </div>
        <div class="header--mobile">
            <Logo :modifier="`header__logo`" />
            <div class="header--mobile__toggle" @click="toggle"></div>
            <div class="header--mobile__options" :class="`${this.active ? 'is-active' : ''}`">
                <div class="header__contact">
                    <a class="phone" :href="`tel:${phone}`" type="phone">{{ phone }}</a>
                    <div class="time">
                        {{ time }}
                    </div>
                    <div class="icon">
                        <img src="/icons/smartphone.svg">
                    </div>
                </div>
                <div class="header__searcher">
                    <input class="searcher" type="text" :placeholder="search">
                    <div class="icon">
                        <img src="/icons/search.svg">
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
