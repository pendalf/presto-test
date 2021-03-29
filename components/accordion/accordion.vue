<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'Accordion',
  provide() {
    return { Accordion: this.Accordion }
  },
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    }
  },
}
</script>

<style lang="scss">
.accordion {
  list-style: none;
  margin: 0 rem(16);
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
