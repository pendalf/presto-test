<template>
  <div class="container">
    <ImportantPoints :items="importantPoints" :options="slickOptions" />

    <SlickCarousel v-if="events" :options="slickOptions">
      <EventItem
        v-for="(event, index) in events"
        :key="index"
        :event="event"
      ></EventItem>
    </SlickCarousel>
  </div>
</template>

<script>
import EventItem from '~/components/event/EventItem'
import ImportantPoints from '~/components/ImportantPoints/ImportantPoints'
import SlickCarousel from '~/components/SlickCarousel'

export default {
  components: {
    EventItem,
    ImportantPoints,
    SlickCarousel,
  },
  async asyncData({ app, route, params, error, store, $axios }) {
    try {
      // const { data } = await $axios.get(
      //   'https://seller-events-api-desc.herokuapp.com/api/events'
      // )
      // const importantPoints = await $axios.get('/mock/importantPoints.json')
      // console.log(importantPoints)

      // return { events: data }
      const [events, importantPoints] = await Promise.all([
        $axios.get('https://seller-events-api-desc.herokuapp.com/api/events'),
        $axios.get('/mock/importantPoints.json'),
      ])
      return { events: events.data, importantPoints: importantPoints.data }
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
