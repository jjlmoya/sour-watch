<template>
    <router-link to="/">
        <div class="logo" :class="modifier">
            <img class="image" src="~/assets/images/VostokEuropeLogo.png" alt="Vostok Europe">
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ['modifier']
    }
</script>
