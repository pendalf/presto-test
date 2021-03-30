<template>
  <button v-bimd="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>
