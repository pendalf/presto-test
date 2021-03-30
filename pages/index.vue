<template>
  <div class="container">
    <ImportantPoints :items="importantPoints" :options="slickOptions" />
    <BusinessProposals :items="BusinessProposals" />
    <EventItems :items="events" :options="slickOptions" />
  </div>
</template>

<script>
import EventItems from '~/components/EventItems/EventItems'
import ImportantPoints from '~/components/ImportantPoints/ImportantPoints'
import BusinessProposals from '~/components/BusinessProposals/BusinessProposals'

export default {
  components: {
    EventItems,
    ImportantPoints,
    BusinessProposals,
  },
  async asyncData({ app, route, params, error, store, $axios }) {
    try {
      const [events, importantPoints, BusinessProposals] = await Promise.all([
        $axios.get('https://seller-events-api-desc.herokuapp.com/api/events'),
        $axios.get('/mock/importantPoints.json'),
        $axios.get('/mock/BusinessProposals.json'),
      ])
      return {
        events: events.data,
        importantPoints: importantPoints.data,
        BusinessProposals: BusinessProposals.data,
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
