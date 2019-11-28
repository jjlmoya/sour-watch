<template>
    <div class="home">
        <Layout />
    </div>
</template>

<script>
    import SeoService from '../services/seoService'
    import Layout from '@/layouts/Default.vue'

    export default {
        name: 'Home',
        components: {
            Layout
        },
        metaInfo () {
            const seoService = new SeoService({
                title: 'Vostok Europa',
                description: 'Tus soluciones de telecomunicación, sonido, electricidad e imagen'
            })
            return seoService.getMetas()
        }
    }
</script>
