<template>
  <AppSection :title="'Важное про Ozon'" :section-suffix="'important-point'">
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
  }
}
</style>
