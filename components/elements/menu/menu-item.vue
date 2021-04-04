<template>
  <li
    class="menu__item"
    @mouseenter="menuChildsShow = true"
    @mouseleave="menuChildsShow = false"
  >
    <nuxt-link :to="itemLink">{{ item.title }}</nuxt-link>
    <slot></slot>
    <transition name="menu__childs">
      <template v-if="menuChildsShow">
        <appMenu v-if="item.dropdownItems && item.dropdownItems.length">
          <menu-item
            v-for="(item, i) in item.dropdownItems"
            :key="i"
            :item="item"
          ></menu-item>
        </appMenu>
      </template>
    </transition>
  </li>
</template>

<script>
import appMenu from './app-menu'
import MenuItem from './menu-item'

export default {
  name: 'MenuItem',
  components: {
    appMenu,
    MenuItem,
  },
  props: {
    item: {
      type: [Object, Array],
      default: () => {},
    },
  },
  data() {
    return {
      menuChildsShow: false,
    }
  },
  computed: {
    itemLink() {
      return this.item.link || ''
    },
  },
}
</script>

<style lang="scss">
.menu__childs-enter,
.menu__childs-leave-to {
  transform: scaleY(0.7);
  opacity: 0;
}
.menu__childs-enter-to,
.menu__childs-leave {
  opacity: 1;
  transform: scaleY(1);
}
.menu__childs-enter-active,
.menu__childs-leave-active {
  transition: all 0.3s ease-out;
  transform-origin: top center;
}
</style>
