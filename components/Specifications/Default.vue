<template>
    <table class="specifications specifications--text">
        <tbody>
            <tr v-for="specification in specs" :key="specification.name" class="specifications__row">
                <th class="specifications__heading">
                    {{ specification.name }}
                </th>
                <td class="specifications__value">
                    {{ specification.value }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style lang="scss">@import 'specifications.scss';
</style>
<script>
    export default {
        props: {
            specifications: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            specs () {
                return this.specifications
                    .filter(spec => spec.value)
            }
        }
    }
</script>
