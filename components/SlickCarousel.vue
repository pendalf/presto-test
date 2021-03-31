<template>
  <VueSlickCarousel class="slick-carousel" v-bind="settings">
    <slot />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SlickCarousel',
  components: { VueSlickCarousel },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    settings() {
      const defaultSettings = {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
      return Object.assign(defaultSettings, this.options)
    },
  },
}
</script>

<style lang="scss">
.slick-carousel {
  margin-left: rem(-16);

  width: rem(276);
  .slick-list {
    overflow: visible;
  }
  .slick-slide {
    padding: 0 0 0 rem(16);
    box-sizing: border-box;
    height: auto;
    display: flex !important;

    & > div {
      display: flex;
    }
  }
  .slick-track {
    display: flex;
    align-items: stretch;
  }
  .slick-arrow {
    position: absolute;
    bottom: 100%;
    right: rem(16);
    top: auto;
    left: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: rem(12);
    width: rem(48);
    height: rem(48);
    background: #ccd8e4;
    border-radius: rem(100);
    box-sizing: border-box;
    margin-bottom: rem(-5);

    &:before {
      font-family: 'icomoon' !important;
      color: $main-text-color;
      font-size: rem(22);
    }
  }
  .slick-prev {
    margin-right: rem(60);
    &:before {
      content: $icon-arrow-left;
    }
  }
  .slick-next {
    &:before {
      content: $icon-arrow-right;
    }
  }
}
</style>
