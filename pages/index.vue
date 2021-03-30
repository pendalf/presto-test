<template>
  <div class="container">
    <ImportantPoints :items="importantPoints" :options="slickOptions" />
    <BusinessProposals :items="BusinessProposals" />
    <EventItems :items="events" :options="slickOptions" />
    <MarketplaceNews :items="news" :options="slickOptions" />
    <articles :items="articles" :options="slickOptions" />
  </div>
</template>

<script>
import EventItems from '~/components/EventItems/EventItems'
import ImportantPoints from '~/components/ImportantPoints/ImportantPoints'
import BusinessProposals from '~/components/BusinessProposals/BusinessProposals'
import MarketplaceNews from '~/components/MarketplaceNews/MarketplaceNews'
import articles from '~/components/articles/articles'

export default {
  components: {
    EventItems,
    ImportantPoints,
    BusinessProposals,
    MarketplaceNews,
    articles,
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
        arrows: false,
      },
    }
  },
}
</script>

<style lang="scss">
.container {
  border: 0;
}
</style>
