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
    <app-btn :to="'/'" class="btn--more" type="button"
      >Смотреть все мероприятия</app-btn
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
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false,
              arrows: true,
              slidesToShow: 2,
            },
          },

          {
            breakpoint: 650,
            settings: {
              variableWidth: false,
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
  margin-bottom: rem(56);

  @media only screen and (min-width: $desktop) {
    margin-bottom: rem(105);
  }

  .slick-carousel {
    margin-bottom: rem(36);
    width: rem(276);

    @media only screen and (min-width: $tablet) {
      width: auto;
      margin-left: rem(-24);
      margin-bottom: rem(15);
    }

    .slick-slide {
      @media only screen and (min-width: $tablet) {
        padding-left: rem(24);
      }
    }
  }

  .btn--more {
    align-self: flex-start;
    @media only screen and (min-width: $tablet) {
      order: -1;
      margin-bottom: rem(40);
    }
  }
  .section__content {
    @media only screen and (min-width: $tablet) {
      padding-top: rem(8);
    }
    @media only screen and (min-width: $tablet) {
      padding-top: 0;
    }
  }
}
</style>
