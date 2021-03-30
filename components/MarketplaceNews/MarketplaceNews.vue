<template>
  <AppSection :title="'Новости маркетплейса'" :section-suffix="'news-items'">
    <SlickCarousel v-if="itemsAddFirsItem.length" :options="options">
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
  margin-bottom: rem(18);
  .slick-carousel {
    margin-left: rem(-24);

    margin-top: rem(28);
    margin-bottom: rem(32);
    width: rem(220);

    .slick-slide {
      padding: 0 0 0 rem(24);
    }
  }
}
</style>
