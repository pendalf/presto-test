<template>
  <div class="articles__item">
    <div v-if="imgUrl" class="articles__row articles__photo">
      <div class="articles__photo-content">
        <nuxt-picture
          v-if="imgUrl"
          :src="imgUrl"
          format="webp"
          :alt="imgAlternate"
          width="240"
          height="240"
          fit="cover"
        ></nuxt-picture>
      </div>
    </div>
    <div v-if="itemDate" class="articles__row articles__date">
      <span class="articles__date-label">Дата публикации</span>
      <span class="articles__date-content">
        {{ itemDate }}
      </span>
    </div>
    <div class="articles__row articles__title">{{ item.title }}</div>
    <div class="articles__row articles__excerpt">
      {{ item.excerpt | truncate(300, '...') }}
    </div>
    <div v-if="link" class="articles__row articles__more">
      <nuxt-link :to="link">Читать статью</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        const cut = text.substring(0, length)
        const i = cut.lastIndexOf('.') || cut.lastIndexOf(' ')
        return cut.slice(0, i) + suffix
      } else {
        return text
      }
    },
  },
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
      return this.item.slug ? `/articles/${this.item.slug}` : false
    },
    imgUrl() {
      return this.item.image?.url || `/img/ozon.jpg`
    },
    imgAlternate() {
      return this.item.image?.alternativeText || this.item.title
    },
  },
}
</script>

<style lang="scss">
.articles {
  &__item {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: rem(16);
    width: rem(236);
    border-radius: rem(16);
    overflow: hidden;
    transition: 0.2s all;
    background: transparent;
    outline: none;

    @media only screen and (min-width: 650px) {
      padding: rem(24) rem(32) rem(40);
      border-radius: rem(20);
    }
    @media only screen and (min-width: 1200px) {
      padding: rem(16) rem(32) rem(32);
      display: grid !important;
      // grid-template-columns: rem(304) 1fr;
      grid-template-rows: auto auto auto 1fr;
      grid-column-gap: rem(0);
      grid-row-gap: rem(0);
    }

    &:hover {
      background: #ffffff;
      box-shadow: rem(0) rem(47) rem(304) rgba(0, 26, 52, 0.04),
        rem(0) rem(30.463) rem(178.037) rgba(0, 26, 52, 0.0303704),
        rem(0) rem(18.1037) rem(96.8296) rgba(0, 26, 52, 0.0242963),
        rem(0) rem(9.4) rem(49.4) rgba(0, 26, 52, 0.02),
        rem(0) rem(3.82963) rem(24.7704) rgba(0, 26, 52, 0.0157037),
        rem(0) rem(0.87037) rem(11.963) rgba(0, 26, 52, 0.00962963);
    }
  }
  &__row {
    margin: rem(16) rem(16) 0;

    @media only screen and (min-width: 650px) {
      margin: rem(16) rem(32) 0;
    }
    @media only screen and (min-width: 650px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  &__photo {
    display: none;
    img {
      max-width: 100%;
      height: auto;
    }
    @media only screen and (min-width: 1200px) {
      display: block;
      grid-area: 2 / 2 / 5 / 3;
      text-align: center;
    }
  }
  &__photo-content {
    width: rem(184);
    height: rem(184);
    border-radius: 50%;
    display: inline-block;
    margin-left: rem(24);
    margin-top: rem(2);
    overflow: hidden;
  }

  &__title {
    font-weight: 500;
    font-size: rem(20);
    line-height: rem(24);
    letter-spacing: rem(0.6);

    @media only screen and (min-width: 650px) {
      // font-weight: normal;
      font-size: rem(24);
      line-height: rem(28);
    }
  }
  &__excerpt {
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);

    @media only screen and (min-width: 650px) {
      line-height: rem(20.5);
    }
  }

  &__photo + &__date {
    @media only screen and (min-width: 1200px) {
      grid-area: 1 / 1 / 2 / 3;
    }
  }

  &__date {
    display: flex;
    font-size: rem(12);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    color: #667585;
    justify-content: space-between;

    @media only screen and (min-width: 650px) {
      line-height: rem(16.5);
    }

    @media only screen and (min-width: 1200px) {
      width: 100%;
      align-items: center;
      margin-bottom: rem(8);
    }
  }

  &__date-label {
    display: none;
    @media only screen and (min-width: 1200px) {
      font-weight: 350;
      display: block;
      font-size: rem(16);
      line-height: rem(20);
      color: #99a3ad;
    }
  }

  &__date-content {
    @media only screen and (min-width: 1200px) {
      padding: rem(6) rem(12);
      background: #000912;
      font-size: rem(14);
      line-height: rem(16);
      letter-spacing: rem(0.6);
      color: #ffffff;
      border-radius: rem(1000);
      margin-right: rem(-13);
    }
  }

  &__more {
    font-weight: 350;
    font-size: rem(16);
    line-height: rem(20);
    text-align: center;
    letter-spacing: rem(0.4);
    padding-top: rem(16);

    margin-top: auto;

    @media only screen and (min-width: 650px) {
    }
    @media only screen and (min-width: 1200px) {
      text-align: left;
    }
  }
}
</style>
