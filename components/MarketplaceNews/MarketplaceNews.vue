<template>
  <AppSection :title="'Разбираемся'" :section-suffix="'news-items'">
    <template slot="section-subtitle">
      Узнайте, с чего начать из серии коротких обучающих роликов.Познакомьтесь с
      Личным кабинетом и инструментами для работы на маркетплейсе.Настройте
      аналитику и научитесь запускать эффективные рекламные кампании.
    </template>
    <template slot="section-slider-title">Новости маркетплейса</template>
    <SlickCarousel v-if="itemsAddFirsItem.length" :options="slickOptions">
      <MarketplaceNewsItem
        v-for="(item, index) in itemsAddFirsItem"
        :key="index"
        :item="item"
      />
    </SlickCarousel>
    <appBtn :to="'/'" class="btn--more" type="button"
      >Смотреть все новости
    </appBtn>
  </AppSection>
</template>

<script>
import AppSection from '~/components/layout/AppSection'
import SlickCarousel from '~/components/SlickCarousel'
import MarketplaceNewsItem from '~/components/MarketplaceNews/MarketplaceNewsItem'
import appBtn from '~/components/elements/button/appBtn'

export default {
  name: 'MarketplaceNews',
  components: {
    AppSection,
    SlickCarousel,
    MarketplaceNewsItem,
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
        slidesToShow: 4,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false,
              arrows: true,
              slidesToShow: 3,
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

  computed: {
    itemsAddFirsItem() {
      const items = [...this.items]
      const firstItem = {
        title:
          'Узнавайте последние новости первыми — подпишитесь в Инстаграме и Телеграме',
        icons: [
          {
            picUrl: '/img/telegram-pic.png',
            link: 'https://seller-events-api-desc.herokuapp.com/api/articles',
            title: 'Telegram',
          },
          {
            picUrl: '/img/instagram-pic.png',
            link: '/',
            title: 'Instagran',
          },
        ],
      }
      items.unshift(firstItem)
      return items
    },
  },
}
</script>

<style lang="scss">
.section--news-items {
  margin-bottom: rem(8);

  @media only screen and (min-width: 1200px) {
    margin-bottom: rem(6);
  }

  .slick-carousel {
    margin-left: rem(-24);

    margin-top: rem(28);
    margin-bottom: rem(32);
    width: rem(244);

    @media only screen and (min-width: 650px) {
      width: auto;
      margin-left: rem(-24);
      margin-top: 0;
      margin-bottom: rem(11);
    }

    .slick-slide {
      padding: 0 0 0 rem(24);
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
  .slick-list {
    @media only screen and (min-width: 650px) {
      margin-top: rem(-4);
    }
  }

  .slick-slide {
    &:first-child {
      .news {
        &____row {
          @media only screen and (min-width: 650px) {
            margin-right: rem(32);
            margin-left: rem(32);
          }
        }
        &__title {
          font-size: rem(18);
        }
      }
    }
  }
}
</style>
