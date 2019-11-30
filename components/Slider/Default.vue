<template>
    <div class="slider slider__default">
        <div class="slider__slides slides">
            <div v-for="(slide, index) in slides" :key="slide.image">
                <div v-if="isSlideActive(index)" class="slide"
                     :style="{'background-image':`url(product/${slide.image})`}"/>
            </div>
        </div>
        <div class="slider__arrows">
            <span class="arrow prev" @click="move(-1)">
                <img class="icon" src="/icons/arrow.svg"/>
            </span>
            <span class="arrow next" @click="move(1)">
                <img class="icon" src="/icons/arrow.svg"/>
            </span>
        </div>
        <ul class="slider__dots">
            <li
                v-for="(dot, index) in slides"
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
    data: () => {
      return {
        slides: [
          {
            image: '504.jpg'
          },
          {
            image: 'Almaz-1.jpg'
          },
          {
            image: 'Energia.jpg'
          },
          {
            image: 'Expedition-555-1.jpg'
          },
          {
            image: 'Lunokhod-2-1.jpg'
          },
          {
            image: 'Lunokhod-278-Preview.jpg'
          },
          {
            image: 'New-Energia-Open-Balans2-1.jpg'
          }],
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
        console.log(this.active)
        let newActive
        const newIndex = this.active + amount
        if (newIndex > this.slides.length - 1) newActive = 0
        if (newIndex === -1) newActive = this.slides.length - 1
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
