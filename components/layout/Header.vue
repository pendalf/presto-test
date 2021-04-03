<template>
  <header class="header section section--header">
    <div class="top-bar">
      <a href="/" class="logo">
        <img v-if="viewport === 'mobile'" src="~assets/img/logo-mobile.svg" />
        <img v-else src="~assets/img/logo.svg" />
      </a>
      <div class="navbar" :class="menuOpen ? 'mobile-open' : ''">
        <div v-if="viewport === 'mobile'" class="navbar__header">
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
              <nuxt-link to="">Обучение</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="">О компании</nuxt-link>
            </li>
            <li v-if="viewport === 'mobile'" class="menu__item">
              <nuxt-link to="">Наши сервисы</nuxt-link>
            </li>
            <li v-if="viewport === 'mobile'" class="menu__item">
              <nuxt-link to="">Мероприятия</nuxt-link>
            </li>
          </ul>
        </nav>
        <nuxt-link to="" class="btn btn--login">Войти</nuxt-link>
      </div>
      <div
        v-if="viewport === 'mobile'"
        class="burger-menu"
        @click="burgerMenuOpen"
      >
        <i class="icon-burger"></i>
      </div>
    </div>
    <div class="promo">
      <h1 class="promo__title">Любому бизнесу найдётся место на Ozon</h1>
      <div class="promo__text">
        Ozon — это прямой доступ к миллионам клиентов по всей России. Вы больше
        не ограничены размером вашего бизнеса и конкуренцией с крупными
        игроками. Предлагайте покупателям хорошие товары по выгодным ценам, а мы
        позаботимся о сервисе и доставке.
      </div>
      <div
        v-if="viewport !== 'mobile'"
        class="promo__scroll-to"
        @click="scrollToHeaderBottom"
      >
        <i class="icon-arrow-down"></i>
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
      viewport: 'mobile',
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    window.dispatchEvent(new Event('resize'))
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    burgerMenuOpen() {
      this.menuOpen = true
    },
    burgerMenuClose() {
      this.menuOpen = false
    },
    handleResize() {
      const documentWidth = document.documentElement.clientWidth
      this.viewport = documentWidth > 649 ? 'tablet' : 'mobile'
    },
    scrollToHeaderBottom(e) {
      const header = e.target.closest('.header')
      if (header) {
        const headerRect = header.getBoundingClientRect()
        window.scrollTo({ top: headerRect.bottom, behavior: 'smooth' })
      }
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

  @media only screen and (min-width: 650px) {
    border-radius: 0 0 rem(60) rem(60);
  }
}
.logo {
  // width: rem(82);
  @media only screen and (min-width: 650px) {
    width: rem(204);
  }
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
  box-sizing: border-box;

  @media only screen and (min-width: 650px) {
    height: rem(80);
    padding: rem(19) rem(28) rem(21);
  }
  @media only screen and (min-width: 650px) {
    height: rem(80);
    padding: rem(19) rem(28) rem(21);
  }
}
.promo {
  margin: rem(40) rem(16);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    max-width: rem(1176);
    width: 100%;
  }

  &__title {
    font-weight: 500;
    font-size: rem(36);
    line-height: rem(40);
    letter-spacing: rem(0.8);
    color: #ffffff;
    margin: rem(16) 0;

    @media only screen and (min-width: 650px) {
      width: rem(536);
      margin-left: rem(108);
      font-size: rem(46);
      line-height: rem(48);
      letter-spacing: rem(0.8);
    }
    @media only screen and (min-width: 1200px) {
      width: rem(680);
      margin-left: 0;
      font-weight: 500;
      font-size: rem(80);
      line-height: rem(80);
    }
  }
  &__text {
    font-weight: 350;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);
    color: #ffffff;
    margin: rem(16) 0;

    @media only screen and (min-width: 650px) {
      width: rem(536);
      margin-left: rem(108);
      font-size: rem(20);
      line-height: rem(28);
      letter-spacing: rem(0.6);
    }
    @media only screen and (min-width: 1200px) {
      width: rem(680);
      margin-left: 0;
      margin-top: rem(15);
    }
  }
  &__scroll-to {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: rem(32);
    width: rem(80);
    height: rem(80);
    right: rem(108);
    bottom: rem(108);
    background: #000912;
    border-radius: rem(1000);
    box-sizing: border-box;
    color: #ffffff;
    font-size: rem(14);
    visibility: hidden;

    @media only screen and (min-width: 650px) {
      visibility: visible;
    }

    @media only screen and (min-width: 1200px) {
      right: rem(148);
      bottom: rem(148);
    }
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

  @media only screen and (min-width: 650px) {
    transform: translateX(0);
    background: transparent;
    width: auto;
    height: auto;
    padding: 0;
    position: static;

    display: flex;
    align-items: center;
    gap: rem(32);
  }

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
    @media only screen and (min-width: 650px) {
      display: flex;
      gap: rem(32);
    }
  }
  &__item {
    margin: rem(32) 0 0;
    padding: 0;
    font-size: rem(16);
    line-height: rem(20);
    letter-spacing: rem(0.4);

    @media only screen and (min-width: 650px) {
      font-weight: normal;
      font-size: rem(16);
      line-height: rem(20);
      text-align: center;
      letter-spacing: rem(0.4);
      margin-top: 0;
    }

    a {
      color: $main-text-color;
      @media only screen and (min-width: 650px) {
        color: $basic-bg-color;
      }
    }
  }
}

.btn--login {
  display: block;
  margin-top: rem(48);
  @media only screen and (min-width: 650px) {
    margin-top: 0;
  }
}
</style>
