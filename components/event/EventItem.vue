<template>
  <div class="event__item">
    <div class="event__row event__head">
      <div class="event__date">{{ eventDate }}</div>
      <div class="event__level" :class="levelColor">{{ event.level }}</div>
    </div>
    <div class="event__row event__title">{{ event.title }}</div>
    <div class="event__row event__theme">{{ event.theme.name }}</div>
    <ul v-if="points.length" class="event__row event__points">
      <li
        v-for="(point, index) in points"
        :key="index"
        class="event__points-item"
      >
        <i class="icon-check"></i>
        {{ point }}
      </li>
    </ul>
    <div class="event__row event__more">
      <nuxt-link to="">Узнать подробности</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    points() {
      return this.event.points
    },
    eventDate() {
      const date = new Date(this.event.date)
      const options = {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
      }
      return date.toLocaleString('ru', options)
    },
    levelColor() {
      return this.event.level === 'Для профессионалов' ? 'dark' : ''
    },
  },
}
</script>

<style lang="scss">
.event {
  &__item {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start;
    padding: rem(16) 0px;
    width: rem(260);
    background: #ffffff;
    box-shadow: 0px rem(4) rem(24) rgba(0, 26, 52, 0.12);
    border-radius: rem(20);
    flex: none;
    order: 0;
    flex-grow: 0;
    // margin: 0px rem(16);
    box-sizing: border-box;
    min-height: rem(396);
  }
  &__row {
    margin: 0 rem(16);
  }
  &__head {
    display: flex;
    margin: 0;
    padding: 0 0 0 rem(16);
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
  }
  &__date {
    font-weight: 350;
    font-size: rem(12);
    line-height: rem(16);
    letter-spacing: rem(0.4);
  }
  &__level {
    background: #005bff;
    border-radius: rem(80) 0px 0px rem(80);
    padding: rem(8) rem(8) rem(8) rem(12);
    font-size: rem(12);
    line-height: rem(16);
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: rem(0.32);
    color: #ffffff;

    &.dark {
      background: #000912;
    }
  }
  &__title {
    font-weight: 500;
    font-size: rem(20);
    line-height: rem(24);
    letter-spacing: rem(0.6);
    margin-top: rem(16);
  }
  &__theme {
    font-weight: 500;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.6);
    margin-top: rem(16);
  }
  &__points {
    padding: 0;
    margin-top: rem(4);
    list-style: none;
  }
  &__points-item {
    position: relative;
    font-weight: 350;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    margin: rem(12) 0 0 rem(28);
    padding: 0;

    i {
      position: absolute;
      left: rem(-28);
      font-size: rem(16);
    }
  }
  &__more {
    font-weight: 350;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    padding-top: rem(32);
    margin-top: auto;
  }
}
</style>
