<template>
  <AppSection
    :title="'Мероприятия для партнёров'"
    :section-suffix="'event-items'"
  >
    <template slot="section-subtitle">
      Узнавайте информацию из первых рук, общайтесь с действующими продавцами,
      будьте в курсе новых инструментов и возможностей маркетплейса.
    </template>
    <SlickCarousel v-if="items.length" :options="slickOptions">
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
  data() {
    return {
      slickOptions: {
        dots: false,
        arrows: true,
        mobileFirst: true,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
  computed: {},
}
</script>

<style lang="scss">
.section--event-items {
  margin-bottom: rem(16);
  .slick-carousel {
    margin-bottom: rem(36);
    width: rem(260);

    @media only screen and (min-width: 650px) {
      width: auto;
      margin-left: rem(-24);
    }

    .slick-slide {
      @media only screen and (min-width: 650px) {
        padding-left: rem(24);
      }
    }
  }

  .btn--more {
    @media only screen and (min-width: 650px) {
      order: -1;
      margin-bottom: rem(40);
      align-self: flex-start;
    }
  }
}
</style>
