<template>
  <div class="important-points__item">
    <div class="important-points__title">{{ item.title }}</div>
    <div class="important-points__subtitle">{{ item.subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'ImportantPoint',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {},
}
</script>

<style lang="scss">
.important-points {
  &__item {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start;
    margin-top: rem(28);
    padding: rem(24) rem(16) rem(40);
    width: rem(120);
    min-height: rem(124);
    background: transparent;

    border-radius: rem(16);
    box-sizing: border-box;
    transition: 0.45s all;
    outline: none;

    @media only screen and (min-width: $tablet) {
      margin-top: rem(37);
      margin-bottom: rem(21);
      margin-top: rem(47);
      padding: rem(24) rem(21) rem(40);
      min-height: rem(215);
      border-radius: rem(20);
    }

    .slick-slide:first-child &,
    &:hover {
      padding: rem(33) rem(16) rem(49);
      margin-top: rem(19);
      margin-bottom: rem(12);
      background: #ffffff;
      box-shadow: rem(-4.29291) rem(99.9078) rem(138) rgba(0, 0, 0, 0.07),
        rem(-2.52767) rem(58.8257) rem(71.9808) rgba(0, 0, 0, 0.050624),
        rem(-1.29818) rem(30.2121) rem(33.7824) rgba(0, 0, 0, 0.039312),
        rem(-0.522018) rem(12.1488) rem(14.7936) rgba(0, 0, 0, 0.030688),
        rem(-0.116767) rem(2.71749) rem(6.4032) rgba(0, 0, 0, 0.019376);

      @media only screen and (min-width: $tablet) {
        margin-top: rem(21);
        padding: rem(41) rem(21) rem(49);
        box-shadow: rem(0) rem(47) rem(304) rgba(0, 26, 52, 0.04),
          rem(0) rem(30.463) rem(178.037) rgba(0, 26, 52, 0.0303704),
          rem(0) rem(18.1037) rem(96.8296) rgba(0, 26, 52, 0.0242963),
          rem(0) rem(9.4) rem(49.4) rgba(0, 26, 52, 0.02),
          rem(0) rem(3.82963) rem(24.7704) rgba(0, 26, 52, 0.0157037),
          rem(0) rem(0.87037) rem(11.963) rgba(0, 26, 52, 0.00962963);
      }
    }
  }

  &__title {
    font-weight: 500;
    font-size: rem(20);
    line-height: rem(24);
    letter-spacing: rem(0.6);

    @media only screen and (min-width: $tablet) {
      font-size: rem(36);
      line-height: rem(40);
      letter-spacing: rem(0.8);
    }
  }
  &__subtitle {
    font-weight: 350;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    margin-top: rem(4);

    @media only screen and (min-width: $tablet) {
      font-size: rem(16);
      line-height: rem(20.5);
      max-width: rem(160);
      //margin-top: rem(5);
    }
    @media only screen and (min-width: $desktop) {
      margin-top: rem(3);
    }
  }
}
</style>
