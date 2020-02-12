<template>
    <div class="c-modal" :class="`${active ? 'is-active' : ''} ${modifier}`" @click="closeModal">
        <div class="c-modal__content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
  @import 'modal.scss';
</style>

<script>
    export default {
        name: 'Modal',
        props: {
            modifier: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                status: this.active
            }
        },
        methods: {
            closeModal () {
                this.status = false
                this.$emit('updateModal', false)
            }
        }
    }
</script>
