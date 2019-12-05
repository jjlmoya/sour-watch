<template>
    <div class="home" :class="theme">
        <Layout>
            <Slider />
            <ProductGrid />
        </Layout>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Layout from '@/layouts/Default.vue'
    import Slider from '@/components/Slider/Default.vue'
    import ProductGrid from '@/components/ProductGrid/Default.vue'

    export default {
        name: 'Home',
        components: {
            Layout,
            Slider,
            ProductGrid
        },
        computed: {
            ...mapState('theme', [
                'theme'
            ])
        },
        created () {
            this.$store.commit('theme/set', 'vostok')
        },
        head () {
            return {
                title: 'Vostok Europa',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'My custom description'
                    }
                ]
            }
        }
    }
</script>
