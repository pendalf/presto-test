<template>
  <section
    class="section"
    :class="sectionSuffix ? `section--${sectionSuffix}` : ''"
  >
    <div class="section__inner">
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

  @media only screen and (min-width: $tablet) {
    margin-right: rem(28);
    margin-left: rem(28);
  }

  @media only screen and (min-width: $desktop) {
    margin-right: auto;
    margin-left: auto;
    max-width: rem(1176);
  }
}
.section {
  max-width: rem(320);
  margin: 0 auto;

  @media only screen and (min-width: $tablet) {
    max-width: rem(1920);
    margin-left: auto;
    margin-right: auto;
  }

  &__inner {
    @extend %inner-margin;
  }

  &__title {
    margin-top: rem(40);
    font-weight: 500;
    font-size: rem(24);
    line-height: rem(28);
    letter-spacing: rem(0.6);
    margin-bottom: rem(1);
    max-width: rem(200);

    @media only screen and (min-width: $tablet) {
      margin-top: rem(66);
      font-size: rem(46);
      line-height: rem(48.5);
      letter-spacing: rem(0.8);
      max-width: rem(350);
      margin-bottom: rem(23);
    }
    @media only screen and (min-width: $desktop) {
      font-size: rem(72);
      line-height: rem(72);
      max-width: rem(550);
      margin-top: rem(65);
      margin-bottom: rem(24);
    }
  }
  &__subtitle {
    margin-top: rem(12);
    margin-bottom: rem(32);
    font-weight: 350;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);

    @media only screen and (min-width: $tablet) {
      margin-top: rem(0);
      max-width: rem(650);
      line-height: rem(20.5);
    }
    @media only screen and (min-width: $desktop) {
      margin-bottom: rem(40);
    }
  }
  &__subtitle + &__slider-title {
    margin-top: rem(52);
    @media only screen and (min-width: $tablet) {
      margin-top: rem(81);
    }
    @media only screen and (min-width: $desktop) {
      margin-top: rem(87);
    }
  }
  &__slider-title {
    font-weight: 500;
    margin-top: rem(40);
    font-size: rem(24);
    line-height: rem(28);
    letter-spacing: rem(0.6);
    margin-bottom: 0;

    @media only screen and (min-width: $tablet) {
      margin-top: rem(66);
      margin-bottom: rem(25);
      font-size: rem(30);
      line-height: rem(36);
    }
    @media only screen and (min-width: $desktop) {
      margin-top: rem(67);
      margin-bottom: rem(17.5);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__footer {
  }
}
</style>
