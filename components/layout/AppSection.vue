<template>
  <section
    class="section"
    :class="sectionSuffix ? `section--${sectionSuffix}` : ''"
  >
    <h2 v-if="title" class="section__title">{{ title }}</h2>
    <div class="section__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    title: {
      type: String,
      default: '',
    },
    sectionSuffix: {
      type: String,
      default: '',
    },
  },
  computed: {},
}
</script>

<style lang="scss">
.section {
  &__title {
    margin: rem(40) rem(16) 0;
    font-weight: 500;
    font-size: rem(24);
    line-height: rem(28);
    letter-spacing: rem(0.6);
  }
}
</style>
