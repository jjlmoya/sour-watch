<template>
    <div class="forms-payment">
        <Form :title="'Datos de Pago'">
            <Tabs>
                <Input
                    :label="'Tarjeta de Crédito:'"
                    :type="'number'"
                    :modifier="'credit-card'"
                    :placeholder="'Tarjeta de Crédito'"
                />
            </Tabs>
        </Form>
    </div>
</template>
<style lang="scss">@import 'payment.scss';
</style>
<script>
    import Tabs from '@/components/Tabs/Default.vue'
    import Form from '@/components/Forms/Form.vue'
    import Input from '@/components/Forms/Input.vue'

    export default {
        components: {
            Tabs,
            Form,
            Input
        }
    }
</script>
