<template>
    <div class="forms-client">
        <legend class="forms-client__legend">Datos personales</legend>
        <div class="forms-client__fields">
            <Input
                :label="'Nombre:'"
                :type="'text'"
                :modifier="'name'"
                :placeholder="'Nombre'"
            />
            <Input
                :label="'Teléfono:'"
                :type="'phone'"
                :modifier="'phone'"
                :placeholder="'Teléfono'"
            />
            <Input
                :label="'Email:'"
                :type="'email'"
                :modifier="'email'"
                :placeholder="'Email'"
            />
            <Input
                :label="'Confirmar Email:'"
                :type="'email'"
                :modifier="'email'"
                :placeholder="'Confirmar Email'"
            />
        </div>
    </div>
</template>
<style lang="scss">@import 'client.scss';
</style>
<script>
    import Input from '@/components/Forms/Input.vue'

    export default {
        components: {
            Input
        },
        props: {
            image: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
