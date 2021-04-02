<template>
  <div class="articles__item">
    <div v-if="itemDate" class="articles__row articles__date">
      {{ itemDate }}
    </div>
    <div class="articles__row articles__title">{{ item.title }}</div>
    <div class="articles__row articles__excerpt">
      {{ item.excerpt }}
    </div>
    <div v-if="link" class="articles__row articles__more">
      <nuxt-link :to="link">Читать статью</nuxt-link>
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
      return this.item.slug ? `/articles/${this.item.slug}` : false
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
      padding-top: rem(24);
      padding-bottom: rem(40);
      border-radius: rem(20);
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

  &__date {
    font-size: rem(12);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    color: #667585;

    @media only screen and (min-width: 650px) {
      line-height: rem(16.5);
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
  }
}
</style>
