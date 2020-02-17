<template>
    <div class="slider slider__default">
        <div class="slider__slides slides">
            <div v-for="(image, index) in images" :key="image.url">
                <div
                    v-if="isSlideActive(index)"
                    class="slide"
                    :style="{'background-image':`url(${image.url})`}"
                />
            </div>
        </div>
        <div v-if="images.length > 1" class="slider__arrows">
            <span class="arrow prev button button--ghost button--secondary" @click="move(-1)">
                <img class="icon" src="icons/arrow.svg">
            </span>
            <span class="arrow next button button--ghost button--secondary" @click="move(1)">
                <img class="icon" src="icons/arrow.svg">
            </span>
        </div>
        <ul v-if="images.length > 1" class="slider__dots">
            <li
                v-for="(dot, index) in images"
                :key="index"
                class="dot"
                :class="{ active: isDotActive(index)}"
                @click="jump(index)"
            />
        </ul>
    </div>
</template>
<style lang="scss">@import 'slider.scss';
</style>
<script>
    export default {
        props: {
            images: {
                type: Array,
                default: () => [
                    {
                        url: 'product/504.jpg'
                    },
                    {
                        url: 'product/Almaz-1.jpg'
                    }]
            }
        },
        data: () => {
            return {
                active: 0
            }
        },
        mounted () {
            setInterval(() => {
                this.move(1)
            }, 10000)
        },
        methods: {
            move (amount) {
                let newActive
                const newIndex = this.active + amount
                if (newIndex > this.images.length - 1) newActive = 0
                if (newIndex === -1) newActive = this.images.length - 1
                this.active = newActive || newActive === 0 ? newActive : newIndex
            },
            jump (index) {
                this.active = index
            },
            isDotActive (index) {
                return index === this.active
            },
            isSlideActive (index) {
                return index === this.active
            }
        }
    }
</script>
