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

  &--login {
    padding: rem(10) rem(24);
    height: rem(40);
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);
    border-radius: rem(1000);
    @media only screen and (min-width: 650px) {
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
  }
  &--white {
    background: #ffffff;
  }
}
</style>
