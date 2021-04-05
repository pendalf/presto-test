<template>
  <div class="container">
    <ImportantPoints :items="importantPoints" :options="slickOptions" />
    <BusinessProposals :items="BusinessProposals" />
    <EventItems :items="events" :options="slickOptions" />
    <MarketplaceNews :items="news" :options="slickOptions" />
    <articles :items="articles" :options="slickOptions" />
    <bigData></bigData>
  </div>
</template>

<script>
import EventItems from '~/components/EventItems/EventItems'
import ImportantPoints from '~/components/ImportantPoints/ImportantPoints'
import BusinessProposals from '~/components/BusinessProposals/BusinessProposals'
import MarketplaceNews from '~/components/MarketplaceNews/MarketplaceNews'
import articles from '~/components/articles/articles'
import bigData from '~/components/bigData/bigData'

export default {
  components: {
    EventItems,
    ImportantPoints,
    BusinessProposals,
    MarketplaceNews,
    articles,
    bigData,
  },
  async asyncData({ app, route, params, error, store, $axios }) {
    try {
      const [
        events,
        importantPoints,
        BusinessProposals,
        news,
        articles,
      ] = await Promise.all([
        $axios.get('https://seller-events-api-desc.herokuapp.com/api/events'),
        $axios.get('/mock/importantPoints.json'),
        $axios.get('/mock/BusinessProposals.json'),
        $axios.get('https://seller-events-api-desc.herokuapp.com/api/news'),
        $axios.get('https://seller-events-api-desc.herokuapp.com/api/articles'),
        store.dispatch('dataPrepare'),
      ])
      return {
        events: events.data,
        importantPoints: importantPoints.data,
        BusinessProposals: BusinessProposals.data,
        news: news.data,
        articles: articles.data,
      }
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен',
      })
    }
  },
  data() {
    return {
      slickOptions: {
        dots: false,
        arrows: true,
        mobileFirst: true,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows: true,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 649,
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
.container {
  border: 0;
}
</style>
