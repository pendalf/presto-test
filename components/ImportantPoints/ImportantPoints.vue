<template>
  <AppSection :section-suffix="'important-point'">
    <template slot="section-slider-title">Важное про Ozon</template>
    <SlickCarousel v-if="items.length" :options="options">
      <ImportantPoint
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </SlickCarousel>
  </AppSection>
</template>

<script>
import AppSection from '~/components/layout/AppSection'
import SlickCarousel from '~/components/SlickCarousel'
import ImportantPoint from '~/components/ImportantPoints/ImportantPoint'

export default {
  name: 'ImportantPoints',
  components: { AppSection, SlickCarousel, ImportantPoint },
  props: {
    items: {
      type: Array,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  computed: {},
}
</script>

<style lang="scss">
.section--important-point {
  .slick-carousel {
    width: rem(136);
    @media only screen and (min-width: 650px) {
      width: auto;
      margin-left: rem(-24);
      margin-right: rem(-16);
    }
    .slick-slide {
      @media only screen and (min-width: 650px) {
        padding-left: rem(24);
      }
    }
    .slick-arrow {
      margin-bottom: rem(-5);
      right: rem(16);
    }
  }
}
</style>
