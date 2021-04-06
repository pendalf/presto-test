<template>
  <component :is="component" class="btn" v-bind="attrs">
    <slot />
  </component>
</template>

<script>
import appButton from './appButton'

export default {
  name: 'AppBtn',
  components: {
    appButton,
  },
  computed: {
    component() {
      return this.$attrs.to ? 'nuxt-link' : 'appButton'
    },
    attrs() {
      return this.$attrs
    },
  },
}
</script>

<style lang="scss">
.btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: rem(16) rem(24);
  height: rem(56);
  background: #eff3f6;
  font-size: rem(18);
  line-height: rem(24);
  text-align: center;
  letter-spacing: rem(0.7);
  box-sizing: border-box;
  color: $main-text-color;
  border: 0;
  border-radius: rem(8);
  text-decoration: none;
  opacity: 1;
  transition: 0.2s all;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  &--login {
    padding: rem(10) rem(24);
    height: rem(40);
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);
    border-radius: rem(1000);
    @media only screen and (min-width: $tablet) {
      padding: rem(10) rem(24);
    }
  }

  &--round {
    border-radius: rem(1000);
  }

  &--more {
    padding: rem(10) rem(24);
    font-weight: 500;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.6);
    color: #005bff;
    height: rem(36);
    border-radius: rem(1000);

    @media only screen and (min-width: $tablet) {
      height: rem(48);
      padding: rem(14) rem(20);
      background: #edf3f9;
      font-weight: normal;
      font-size: rem(16);
      line-height: rem(21);
      letter-spacing: rem(0.6);
      color: $main-text-color;
    }
  }
  &--white {
    background: #ffffff;
  }
}
</style>
