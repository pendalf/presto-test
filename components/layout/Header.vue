<template>
  <header></header>
</template>

<script>
export default {}
</script>

<style lang="scss" module>
.wrapper {
  background-color: $basic-bg-color;
  height: 70px;
}
.header {
  @include globalWrapper;
  display: flex;
}
.logo {
  font-size: 2.2em;
  font-weight: 700;
  opacity: 1;
  color: #000;
  text-decoration: none;
}
</style>
