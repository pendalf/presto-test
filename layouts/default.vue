<template>
  <div class="super">
    <Header />
    <nuxt />
    <Prefooter />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layout/Header'
import Prefooter from '~/components/layout/Prefooter'
import Footer from '~/components/layout/Footer'

export default {
  components: {
    Header,
    Prefooter,
    Footer,
  },
  head() {
    const canonical = `https://mysite.com${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    return {
      meta: [...this.meta],
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
      ],
      link: [{ rel: 'canonical', href: canonical }],
    }
  },

  computed: {
    meta() {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no',
        },
        { hid: 'description', name: 'description', content: 'Главная' },
      ]
    },
  },
}
</script>

<style lang="scss">
html {
  @media only screen and (min-width: 650px) {
    font-size: (16/992) * 100vw;
  }
}
body {
  color: $main-text-color;
  font-family: $main-font-family;
  background: $basic-bg-color;
}
a {
  color: $main-link-color;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
.super {
  overflow: hidden;
}
</style>
