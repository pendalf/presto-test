<template>
  <section
    class="section"
    :class="sectionSuffix ? `section--${sectionSuffix}` : ''"
  >
    <h2 v-if="title" class="section__title">{{ title }}</h2>
    <div v-if="isSubtitle" class="section__subtitle">
      <slot name="section-subtitle" />
    </div>
    <div class="section__content">
      <slot />
    </div>
    <div v-if="isFooter" class="section__footer">
      <slot name="section-footer" />
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
  computed: {
    isSubtitle() {
      return !!this.$slots['section-subtitle']
    },
    isFooter() {
      return !!this.$slots['section-footer']
    },
  },
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
  &__subtitle {
    margin: rem(12) rem(16) rem(32);
    font-weight: 350;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);
  }
  &__content {
    margin: 0 rem(16);
  }
  &__footer {
    margin: 0 rem(16);
  }
}
</style>
