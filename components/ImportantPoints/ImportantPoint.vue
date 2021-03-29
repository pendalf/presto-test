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
    margin-bottom: rem(12);
    padding: rem(24) rem(16) rem(40);
    position: static;
    width: rem(120);
    height: rem(150);
    background: transparent;

    border-radius: rem(16);
    box-sizing: border-box;
    transition: 0.4s all;
    outline: none;

    .slick-slide:first-child &,
    &:hover {
      background: #ffffff;
      box-shadow: -4.29291px 99.9078px 138px rgba(0, 0, 0, 0.07),
        -2.52767px 58.8257px 71.9808px rgba(0, 0, 0, 0.050624),
        -1.29818px 30.2121px 33.7824px rgba(0, 0, 0, 0.039312),
        -0.522018px 12.1488px 14.7936px rgba(0, 0, 0, 0.030688),
        -0.116767px 2.71749px 6.4032px rgba(0, 0, 0, 0.019376);
    }
  }

  &__title {
    font-weight: 500;
    font-size: rem(20);
    line-height: rem(24);
    letter-spacing: rem(0.6);
  }
  &__subtitle {
    font-weight: 350;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.4);
    margin-top: rem(4);
  }
}
</style>
