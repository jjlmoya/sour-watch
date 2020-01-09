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
        name: 'Watch',
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
                title: `${this.id} - Currículum`,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Currículum'
                    }
                ]
            }
        }
    }
</script>
