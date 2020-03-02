<template>
    <div class="forms-delivery">
        <Form :title="'Datos de Envío'">
            <Tabs
                :tabs="[
                    {
                        id: 0,
                        title: 'Envío',
                        content: 'Envío'
                    },
                    {
                        id: 1,
                        title: 'Recogida',
                        content: 'Recogida'
                    }
                ]"
            />
        </Form>
    </div>
</template>
<style lang="scss">@import 'delivery.scss';
</style>
<script>
    import Tabs from '@/components/Tabs/Default.vue'
    import Form from '@/components/Forms/Form.vue'

    export default {
        components: {
            Tabs,
            Form
        }
    }
</script>
