<template>
    <table class="specifications specifications--text" :class="{ 'specifications--cloud' : cloud}">
        <tbody class="specifications__table">
            <tr v-for="specification in specs" :key="specification.name" class="specifications__row">
                <th class="specifications__heading">
                    {{ specification.name }}
                </th>
                <td v-if="specification.value " class="specifications__value">
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
            },
            cloud: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            specs () {
                return this.specifications
            }
        }
    }
</script>
