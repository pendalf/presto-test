<template>
  <section
    class="section"
    :class="sectionSuffix ? `section--${sectionSuffix}` : ''"
  >
    <h2 v-if="title" class="section__title">{{ title }}</h2>
    <div v-if="isSubtitle" class="section__subtitle">
      <slot name="section-subtitle" />
    </div>
    <h2 v-if="isSliderTitle" class="section__slider-title">
      <slot name="section-slider-title" />
    </h2>

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
    isSliderTitle() {
      return !!this.$slots['section-slider-title']
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
  max-width: rem(320);
  margin: 0 auto;

  @media only screen and (min-width: 650px) {
    max-width: rem(1920);
  }

  &__title {
    margin-top: rem(40);
    font-weight: 500;
    font-size: rem(24);
    line-height: rem(28);
    letter-spacing: rem(0.6);

    @extend %inner-margin;

    @media only screen and (min-width: 650px) {
      margin-top: rem(66);
      font-size: rem(30);
      line-height: rem(36);
    }
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
  &__slider-title {
    font-weight: 500;
    font-size: rem(24);
    line-height: rem(28);
    letter-spacing: rem(0.6);

    @extend %inner-margin;

    @media only screen and (min-width: 650px) {
      margin-top: rem(66);
      font-size: rem(30);
      line-height: rem(36);
    }
  }
  &__content {
    @extend %inner-margin;
  }
  &__footer {
    @extend %inner-margin;
  }
}
</style>
