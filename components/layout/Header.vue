<template>
  <header class="header section section--header">
    <div class="top-bar">
      <a href="/" class="logo">
        <img src="~assets/img/logo-mobile.svg" />
      </a>
      <div class="navbar" :class="menuOpen ? 'mobile-open' : ''">
        <div class="navbar__header">
          <i class="navbar__close icon-close" @click="burgerMenuClose"></i>
        </div>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <nuxt-link to="">С чего начать</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="">Истории успеха</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="">О компании</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="">Наши сервисы</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="">Мероприятия</nuxt-link>
            </li>
          </ul>
        </nav>
        <nuxt-link to="" class="btn btn--login">Войти</nuxt-link>
      </div>
      <div class="burger-menu" @click="burgerMenuOpen">
        <i class="icon-burger"></i>
      </div>
    </div>
    <div class="promo">
      <div class="promo__title">Любому бизнесу найдётся место на Ozon</div>
      <div class="promo__text">
        Ozon — это прямой доступ к миллионам клиентов по всей России. Вы больше
        не ограничены размером вашего бизнеса и конкуренцией с крупными
        игроками. Предлагайте покупателям хорошие товары по выгодным ценам, а мы
        позаботимся о сервисе и доставке.
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    burgerMenuOpen() {
      this.menuOpen = true
    },
    burgerMenuClose() {
      this.menuOpen = false
    },
  },
}
</script>

<style lang="scss">
.wrapper {
  background-color: $basic-bg-color;
  height: rem(70);
}
.header {
  //@include globalWrapper;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  background: url('~assets/img/promo_top.jpg');
  background-size: cover;
  background-position: 50% 0;
  border-radius: 0 0 rem(24) rem(24);
  min-height: 100vh;
  overflow: hidden;
}
.logo {
  // width: rem(82);
}
.top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: rem(12) rem(16);
  height: rem(64);
  background: rgba(0, 26, 52, 0.1);
  backdrop-filter: blur(rem(8));
}
.promo {
  margin: rem(40) rem(16);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  &__title {
    font-weight: 500;
    font-size: rem(36);
    line-height: rem(40);
    letter-spacing: rem(0.8);
    color: #ffffff;
    margin: rem(16) 0;
  }
  &__text {
    font-weight: 350;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);
    color: #ffffff;
    margin: rem(16) 0;
  }
}

.burger-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: rem(0);
  width: rem(40);
  height: rem(40);
  background: #ffffff;
  border-radius: rem(1000);
  margin: rem(0) rem(10);

  i {
    font-size: rem(20);
  }
}

.navbar {
  position: fixed;
  background: #fff;
  width: rem(294);
  box-sizing: border-box;
  padding: 0 rem(16);
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 100;
  transform: translateX(100%);
  transition: 0.4s all;

  &__header {
    height: rem(56);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__close {
    font-size: rem(18);
    margin-right: rem(3);
    margin-left: auto;
  }
  &.mobile-open {
    transform: translateX(0);
  }
}

.menu {
  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  &__item {
    margin: rem(32) 0 0;
    padding: 0;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);

    a {
      color: $main-text-color;
    }
  }
}

.btn--login {
  display: block;
  margin-top: rem(48);
}
</style>
