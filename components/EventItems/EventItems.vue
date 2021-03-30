<template>
  <AppSection
    :title="'Мероприятия для партнёров'"
    :section-suffix="'event-items'"
  >
    <template slot="section-subtitle">
      Узнавайте информацию из первых рук, общайтесь с действующими продавцами,
      будьте в курсе новых инструментов и возможностей маркетплейса.
    </template>
    <SlickCarousel v-if="items.length" :options="options">
      <EventItem v-for="(item, index) in items" :key="index" :event="item" />
    </SlickCarousel>
    <appBtn :to="'/'" class="btn--more" type="button"
      >Смотреть все мероприятия</appBtn
    >
  </AppSection>
</template>

<script>
import AppSection from '~/components/layout/AppSection'
import SlickCarousel from '~/components/SlickCarousel'
import EventItem from '~/components/EventItems/EventItem'
import appBtn from '~/components/elements/button/appBtn'

export default {
  name: 'ImportantPoints',
  components: {
    AppSection,
    SlickCarousel,
    EventItem,
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
.section--event-items {
  margin-bottom: rem(16);
  .slick-carousel {
    margin-bottom: rem(36);
  }
}
</style>
