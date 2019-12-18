<template>
    <div class="home">
        <Layout>
            <h1 style="color: white;">
                Buy {{ collection.name }}
            </h1>
        </Layout>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
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
            },
            ...mapState({
                collection: state => state.collection.selected
            })
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
