<template>
  <AppSection :section-suffix="'articles-items'">
    <template slot="section-slider-title">Статьи</template>
    <SlickCarousel v-if="items.length" :options="slickOptions">
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
  data() {
    return {
      slickOptions: {
        rows: 2,
        dots: false,
        arrows: true,
        mobileFirst: true,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              rows: 1,
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
.section--articles-items {
  // margin-bottom: rem(18);
  overflow: hidden;
  .slick-carousel {
    margin-top: rem(28);
    margin-bottom: rem(32);
    width: rem(236);

    @media only screen and (min-width: 650px) {
      width: auto;
      margin-left: rem(-24);
      margin-top: rem(0);
      margin-bottom: rem(-40);
    }

    .slick-slide {
      @media only screen and (min-width: 650px) {
        padding: 0 0 0 rem(24);
        flex-direction: column;

        display: grid !important;
        grid-auto-rows: 1fr;
        & > * {
          margin-bottom: rem(40);
        }
      }
    }
    .slick-track {
      @media only screen and (min-width: 650px) {
        display: grid;
        grid-template-columns: repeat(100, 1fr);
      }
    }
  }
  .btn--more {
    align-self: flex-start;
    @media only screen and (min-width: 650px) {
      order: -1;
      margin-bottom: rem(40);
      align-self: flex-end;
      margin-right: rem(120);
      margin-top: rem(-61);
    }
  }
}
</style>
