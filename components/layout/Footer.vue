<template>
  <footer class="section section--footer">
    <div class="section__inner">
      <div class="footer-block">
        <h2 class="footer-block__title">Полезные ссылки</h2>
        <div class="footer-block__content">
          <ul class="footer-block__links-list">
            <li class="footer-block__links-item">
              <nuxt-link to="">Полезные ссылки</nuxt-link>
            </li>
            <li class="footer-block__links-item">
              <nuxt-link to="">Адреса складов Ozon</nuxt-link>
            </li>
            <li class="footer-block__links-item">
              <nuxt-link to="">Правила упаковки FBO</nuxt-link>
            </li>
            <li class="footer-block__links-item">
              <nuxt-link to="">Правила упаковки FBS</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-block">
        <h2 class="footer-block__title">Ещё есть</h2>
        <div class="footer-block__content">
          <ul class="footer-block__links-list">
            <li class="footer-block__links-item">
              <nuxt-link to="">Новости</nuxt-link>
            </li>
            <li class="footer-block__links-item">
              <nuxt-link to="">Ozon Seller API</nuxt-link>
            </li>
            <li class="footer-block__links-item">
              <nuxt-link to="">Продажи из-за рубежа</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-block">
        <h2 class="footer-block__title">Мы с соцсетях</h2>
        <div class="footer-block__content">
          <ul class="socials">
            <li class="socials__item">
              <a href=""><i class="icon-instagram"></i></a>
            </li>
            <li class="socials__item">
              <a href=""><i class="icon-facebook"></i></a>
            </li>
            <li class="socials__item">
              <a href=""><i class="icon-vk"></i></a>
            </li>
            <li class="socials__item">
              <a href=""><i class="icon-twitter"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  computed: {},
}
</script>

<style lang="scss">
.section--footer {
  background: #101117;
  color: #ffffff;

  .section__inner {
    display: flex;
    flex-direction: column;
    padding-top: rem(8);
    padding-bottom: rem(36);

    @media only screen and (min-width: 650px) {
      flex-direction: row;
      padding-bottom: rem(60);
      gap: rem(118);
    }
    @media only screen and (min-width: 1200px) {
      gap: rem(198);
    }
  }
}
.footer-block {
  margin: rem(32) rem(16) 0 0;
  @media only screen and (min-width: 650px) {
    margin: rem(52) rem(28) 0 0;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 0;
  }

  &__title {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: rem(18);
    line-height: rem(24);
    letter-spacing: rem(0.6);

    @media only screen and (min-width: 650px) {
      font-size: rem(20);
      line-height: rem(24.5);
    }
  }
  &__links-list {
    margin: 0;
    padding: rem(8) 0 0;
    list-style: none;
    @media only screen and (min-width: 650px) {
      padding-top: rem(9);
    }
  }
  &__links-item {
    list-style: none;
    margin: rem(8) 0 0;
    padding: 0;
    font-weight: 300;
    font-size: rem(14);
    line-height: rem(16);
    letter-spacing: rem(0.4);

    @media only screen and (min-width: 650px) {
      font-size: rem(16);
      line-height: rem(20.5);
      // margin: rem(10) 0 0;
    }

    a {
      color: #ffffff;
    }
  }
  .socials {
    padding: rem(4) 0 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: rem(16);
    align-items: center;

    &__item {
      padding: 0;
      margin: rem(12) 0;
      font-size: rem(21);
      line-height: rem(21);

      a {
        color: #ffffff;
        width: rem(38);
        height: rem(38);
        border-radius: rem(8);
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (min-width: 650px) {
          background: #15171f;
        }
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
