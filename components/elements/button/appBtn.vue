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
  padding: rem(10) rem(24);
  position: static;
  height: rem(40);
  background: #eff3f6;
  border-radius: rem(1000);
  font-size: rem(16);
  line-height: rem(20);
  text-align: center;
  letter-spacing: rem(0.4);
  box-sizing: border-box;
  color: $main-text-color;
  border: 0;

  &--more {
    font-weight: 500;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.6);
    color: #005bff;
    height: rem(36);
  }
}
</style>
