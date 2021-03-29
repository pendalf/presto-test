<template>
  <div class="container">
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
import SlickCarousel from '~/components/SlickCarousel'

export default {
  components: {
    EventItem,
    SlickCarousel,
  },
  async asyncData({ app, route, params, error, store, $axios }) {
    try {
      const { data } = await $axios.get(
        'https://seller-events-api-desc.herokuapp.com/api/events'
      )
      return { events: data }
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
