<template>
    <div>
        <Layout>
            <Inspirational/>
        </Layout>
    </div>
</template>
<style lang="scss">@import 'index.scss';
</style>

<script>
    import SeoService from '../services/seoService'
    import Layout from '@/layouts/Default.vue'
    import Inspirational from '@/components/Inspirational/Default.vue'

    export default {
        name: 'Home',
        components: {
            Layout,
            Inspirational
        },
        metaInfo () {
            const seoService = new SeoService({
                title: 'Cuarta Evolución',
                description: 'Tus soluciones de telecomunicación, sonido, electricidad e imagen'
            })
            return seoService.getMetas()
        }
    }
</script>
