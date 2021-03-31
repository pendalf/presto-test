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
%inner-margin {
  margin-left: rem(16);
  margin-right: rem(16);

  @media only screen and (min-width: 650px) {
    margin-right: rem(28);
    margin-left: rem(28);
  }
}
.section {
  max-width: 320px;
  margin: 0 auto;

  @media only screen and (min-width: 650px) {
    max-width: 1920px;
  }

  &__title {
    margin-top: rem(40);
    font-weight: 500;
    font-size: rem(24);
    line-height: rem(28);
    letter-spacing: rem(0.6);

    @extend %inner-margin;
  }
  &__subtitle {
    margin-top: rem(12);
    margin-bottom: rem(32);
    font-weight: 350;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);

    @extend %inner-margin;
  }
  &__content {
    @extend %inner-margin;
  }
  &__footer {
    @extend %inner-margin;
  }
}
</style>
