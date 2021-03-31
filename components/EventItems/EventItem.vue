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
    padding: rem(16) rem(0);
    width: rem(260);
    background: #ffffff;
    box-shadow: rem(0) rem(4) rem(24) rgba(0, 26, 52, 0.12);
    border-radius: rem(20);
    flex: none;
    order: 0;
    flex-grow: 0;
    // margin: rem(0) rem(16);
    box-sizing: border-box;
    min-height: rem(396);

    @media only screen and (min-width: 650px) {
      width: rem(376) !important;
      padding: rem(32) rem(0);
      border-radius: rem(20);
      min-height: rem(480);
      box-shadow: rem(0) rem(47) rem(304) rgba(0, 26, 52, 0.04),
        rem(0) rem(30.463) rem(178.037) rgba(0, 26, 52, 0.0303704),
        rem(0) rem(18.1037) rem(96.8296) rgba(0, 26, 52, 0.0242963),
        rem(0) rem(9.4) rem(49.4) rgba(0, 26, 52, 0.02),
        rem(0) rem(3.82963) rem(24.7704) rgba(0, 26, 52, 0.0157037),
        rem(0) rem(0.87037) rem(11.963) rgba(0, 26, 52, 0.00962963);
    }
  }
  &__row {
    margin: 0 rem(16);

    @media only screen and (min-width: 650px) {
      margin: 0 rem(32);
    }
  }
  &__head {
    display: flex;
    margin: 0;
    padding: 0 0 0 rem(16);
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    width: 100%;

    @media only screen and (min-width: 650px) {
      padding-left: rem(32);
    }
  }
  &__date {
    font-weight: 350;
    font-size: rem(12);
    line-height: rem(16);
    letter-spacing: rem(0.4);

    @media only screen and (min-width: 650px) {
      font-size: rem(16);
      line-height: rem(21);
    }
  }
  &__level {
    background: #005bff;
    border-radius: rem(80) rem(0) rem(0) rem(80);
    padding: rem(8) rem(8) rem(8) rem(12);
    font-size: rem(12);
    line-height: rem(16);
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: rem(0.32);
    color: #ffffff;

    @media only screen and (min-width: 650px) {
      padding: rem(8) rem(12) rem(9);
      font-size: rem(14.5);
      letter-spacing: rem(0.4);
    }

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

    @media only screen and (min-width: 650px) {
      margin-top: rem(25);
      font-size: rem(30);
      line-height: rem(36.5);
    }
  }
  &__theme {
    font-weight: 500;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.6);
    margin-top: rem(16);
    @media only screen and (min-width: 650px) {
      margin-top: rem(20);
      font-size: rem(18);
      line-height: rem(24);
    }
  }
  &__points {
    padding: 0;
    margin-top: rem(4);
    list-style: none;
    @media only screen and (min-width: 650px) {
    }
  }
  &__points-item {
    position: relative;
    font-weight: 350;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    margin: rem(12) 0 0 rem(28);
    padding: 0;

    @media only screen and (min-width: 650px) {
      line-height: rem(16.5);
      margin: rem(12) 0 0 rem(28);
      padding-bottom: rem(4);
    }

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

    @media only screen and (min-width: 650px) {
      font-size: rem(18);
      line-height: rem(20);
    }
  }
}
</style>
