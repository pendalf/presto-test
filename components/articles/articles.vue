<template>
  <AppSection :title="'Статьи'" :section-suffix="'articles-items'">
    <SlickCarousel v-if="items.length" :options="options">
      <appArticle v-for="(item, index) in items" :key="index" :item="item" />
    </SlickCarousel>
    <appBtn :to="'/'" class="btn--more" type="button">Читать все статьи</appBtn>
  </AppSection>
</template>

<script>
import appArticle from './article'
import AppSection from '~/components/layout/AppSection'
import SlickCarousel from '~/components/SlickCarousel'
import appBtn from '~/components/elements/button/appBtn'

export default {
  name: 'MarketplaceNews',
  components: {
    AppSection,
    SlickCarousel,
    appArticle,
    appBtn,
  },
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
.section--articles-items {
  margin-bottom: rem(18);
  .slick-carousel {
    margin-top: rem(28);
    margin-bottom: rem(32);
    width: rem(236);
  }
}
</style>
