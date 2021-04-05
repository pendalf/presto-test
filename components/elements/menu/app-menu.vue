<template>
  <ul class="menu__list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'AppMenu',
  components: {},
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.menu {
  @media only screen and (min-width: 650px) {
    width: 100%;
  }
  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
    @media only screen and (min-width: 650px) {
      display: flex;
      flex-wrap: wrap;
      gap: rem(32);
      justify-content: flex-end;
    }
  }
  &__item {
    margin: rem(32) 0 0;
    padding: 0;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);
    @media only screen and (min-width: 650px) {
      font-weight: normal;
      font-size: rem(16);
      line-height: rem(20);
      text-align: center;
      letter-spacing: rem(0.4);
      margin-top: 0;
      position: relative;
      margin-top: rem(2);
    }
    @media only screen and (min-width: 1200px) {
      margin-top: rem(0);
    }
    a {
      color: $main-text-color;
      @media only screen and (min-width: 650px) {
        color: $basic-bg-color;
      }
    }
    .menu__list {
      @media only screen and (min-width: 650px) {
        flex-direction: column;
        gap: rem(16);
        position: absolute;
        top: 100%;
        margin-top: rem(10);
        right: rem(-15);
        padding: rem(15);
        background: $basic-bg-color;
        box-shadow: rem(1) rem(2) rem(5) rgba(0, 0, 0, 0.5);
        border-radius: rem(10);
        white-space: nowrap;

        &:before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          height: rem(10);
        }

        .menu__item {
          font-size: rem(12);
          line-height: rem(16);
        }

        a {
          color: $main-text-color;
        }
      }
    }
    &--more {
      a {
        &:after {
          font-family: 'icomoon';
          content: $icon-ellipsis;
          vertical-align: middle;
          display: inline-block;
          margin-top: rem(-6);
          margin-left: rem(11);
          font-size: rem(14);
          @media only screen and (min-width: 650px) {
            font-size: rem(12);
          }
          @media only screen and (min-width: 1200px) {
            font-size: rem(14);
          }
        }
      }
    }
  }
}
</style>
