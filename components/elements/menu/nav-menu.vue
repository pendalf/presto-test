<template>
  <nav class="menu">
    <div v-if="menuClone" class="menu menu--cloned">
      <app-menu ref="appMenuElClone">
        <menu-item
          v-for="(item, i) in topMenu"
          :key="i"
          :item="item"
        ></menu-item>
        <menu-item
          ref="moreItemClone"
          :item="moreItems"
          class="menu__item--more"
        ></menu-item>
      </app-menu>
    </div>
    <app-menu ref="appMenuEl">
      <menu-item
        v-for="(item, i) in menuItemsVisible"
        :key="i"
        :item="item"
      ></menu-item>
      <menu-item
        v-show="moreItems.dropdownItems.length"
        ref="moreItem"
        :item="moreItems"
        class="menu__item--more"
      ></menu-item>
    </app-menu>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

import appMenu from './app-menu'
import MenuItem from './menu-item'
export default {
  name: 'NavMenu',
  components: {
    appMenu,
    MenuItem,
  },
  props: {},
  data() {
    return {
      menuItemsVisible: this.menuItems(),
      moreItems: { title: 'Еще', link: '#', dropdownItems: [] },
      menuClone: false,
    }
  },
  computed: {
    ...mapGetters({ topMenu: 'getTopMenu' }),
  },
  mounted() {
    this.menuClone = true
    setTimeout(() => {
      window.addEventListener('resize', this.handleResize)
      window.dispatchEvent(new Event('resize'))
    }, 0)
  },
  destroyed() {
    this.menuClone = false
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    menuItems() {
      return this.$store.state.topMenu
    },
    menuReset() {
      this.moreItems.dropdownItems = []
      this.menuItemsVisible = this.menuItems()
      this.menuProcessed = false
    },
    menuChilds() {
      const appMenuElClone = this.$refs.appMenuElClone.$el
      return [...appMenuElClone.childNodes]
        .map((el) => el.clientWidth)
        .filter(Number)
    },
    menuSliceWidth({ arr, i, moreWidth, gap }) {
      return arr.slice(0, i).reduce((a, b) => a + b + gap, moreWidth)
    },
    getMenuSliceIndex({ items, moreWidth, gap, width }) {
      return items.reduce(
        (a, b, i, arr) =>
          this.menuSliceWidth({
            arr,
            i,
            moreWidth,
            gap,
          }) < width
            ? i
            : a,

        0
      )
    },
    responsiveMenu() {
      const appMenuElClone = this.$refs.appMenuElClone.$el
      const items = this.menuChilds()
      const width = this.$refs.appMenuEl.$el.clientWidth
      const gap = parseInt(window.getComputedStyle(appMenuElClone).gap)
      const allItemsWidth = items.reduce((a, b) => a + b + gap)
      if (allItemsWidth > width) {
        const moreWidth = this.$refs.moreItemClone.$el.clientWidth
        const index = this.getMenuSliceIndex({
          items,
          moreWidth,
          gap,
          width,
        })

        this.menuItemsVisible = this.menuItems().slice(0, index)
        this.moreItems.dropdownItems = this.menuItems().slice(index)
        this.menuProcessed = false
      } else {
        this.menuReset()
      }
    },
    handleResize() {
      const documentWidth = document.documentElement.clientWidth
      if (documentWidth > 649) {
        this.responsiveMenu()
      } else {
        this.menuReset()
      }
    },
  },
}
</script>

<style lang="scss">
.menu--cloned {
  position: absolute;
  top: rem(-1000);
}
</style>
