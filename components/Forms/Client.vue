<template>
    <div class="forms-client">
        <div class="">
            <label>Nombre</label>
            <input class="c-input" type="text" placeholder="Nombre">
        </div>
        <div class="">
            <label>Email</label>
            <input class="c-input" type="email" placeholder="Email">
        </div>
        <div class="">
            <label>Phone</label>
            <input class="c-input" type="phone" placeholder="Teléfoo">
        </div>
    </div>
</template>
<style lang="scss">@import 'client.scss';
</style>
<script>
    export default {
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
