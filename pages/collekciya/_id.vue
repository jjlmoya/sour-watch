<template>
    <div class="home">
        <Layout>
            {{ id }}
        </Layout>
    </div>
</template>

<script>
    import Layout from '@/layouts/Default.vue'

    export default {
        name: 'Collection',
        components: {
            Layout
        },
        validate ({ params }) {
            return !!params.id
        },
        computed: {
            id () {
                return this.$route.params.id
            }
        },
        head () {
            return {
                title: 'Vostok Europa - ' + this.id,
                meta: [
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
