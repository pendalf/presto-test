<template>
  <div class="news__item">
    <div v-if="itemDate || imgUrl" class="news__row news__photo">
      <div v-if="itemDate" class="news__date">{{ itemDate }}</div>
      <img v-if="imgUrl" :src="imgUrl" alt="this.image.alternativeText" />
    </div>
    <div v-if="icons.length" class="news__row news__icons">
      <a
        v-for="(icon, i) in icons"
        :key="i"
        :href="icon.link"
        :title="icon.title"
        class="news__icon"
      >
        <img v-if="icon.picUrl" :src="icon.picUrl" :alt="icon.title" />
      </a>
    </div>
    <div class="news__row news__title">{{ item.title }}</div>

    <div v-if="link" class="news__row news__more">
      <nuxt-link :to="link">Подробнее</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    itemDate() {
      const date = this.item.date ? new Date(this.item.date) : null
      const options = {
        day: 'numeric',
        month: 'long',
      }
      return date ? date.toLocaleString('ru', options) : false
    },
    link() {
      return this.item.slug ? `/news/${this.item.slug}` : false
    },
    imgUrl() {
      return this.item.image?.url || false
    },
    icons() {
      return this.item.icons || false
    },
  },
}
</script>

<style lang="scss">
.news {
  &__item {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    // padding: rem(32) rem(20);
    padding-bottom: rem(32);
    width: rem(220);
    background: #edf3f9;
    border-radius: rem(16);
    overflow: hidden;

    @media only screen and (min-width: 650px) {
      width: rem(276) !important;
      min-height: rem(348);
      padding-bottom: rem(40);
      border-radius: rem(20);
    }
  }
  &__row {
    margin: rem(16) rem(20) 0;
    @media only screen and (min-width: 650px) {
      margin-right: rem(24);
      margin-left: rem(24);
    }
  }

  &__photo {
    position: relative;
    margin: 0 0 rem(4);
    img {
      max-width: 100%;
      height: auto;
      vertical-align: top;
    }
  }
  &__title {
    font-weight: 500;
    font-size: rem(18);
    line-height: rem(24);
    letter-spacing: rem(0.6);

    @media only screen and (min-width: 650px) {
      font-size: rem(20);
      line-height: rem(24.5);
    }
  }

  &__date {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: rem(6) rem(12);

    position: absolute;
    width: rem(102);
    height: rem(28);
    right: rem(16);
    top: rem(16);
    background: #000912;
    border-radius: rem(1000);

    font-size: rem(14);
    line-height: rem(16);
    display: flex;
    align-items: center;
    letter-spacing: rem(0.6);
    color: #ffffff;

    box-sizing: border-box;
  }
  &__more {
    font-weight: 350;
    font-size: rem(16);
    line-height: rem(20);
    text-align: center;
    letter-spacing: rem(0.4);
    padding-top: rem(16);

    margin-top: auto;
  }
  &__icons {
    display: flex;
    gap: rem(8);
    align-items: center;

    img,
    a {
      display: inline-block;
      vertical-align: top;
    }
  }
}
</style>
