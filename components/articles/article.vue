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
  }
  &__row {
    margin: rem(16) rem(16) 0;
  }

  &__title {
    font-weight: 500;
    font-size: rem(20);
    line-height: rem(24);
    letter-spacing: rem(0.6);
  }
  &__excerpt {
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);
  }

  &__date {
    font-size: rem(12);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    color: #667585;
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
}
</style>
