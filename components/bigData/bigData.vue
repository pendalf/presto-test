<template>
  <transition name="big-data">
    <AppSection
      v-if="showBigData"
      :title="'Big data'"
      :section-suffix="'big-data'"
    >
      <div class="big-data__close" @click="showBigData = false"></div>
      <template slot="section-subtitle">
        Хотите узнать о популярных поисковых pапросах?
      </template>
      <app-btn :to="'/'" type="button">Хочу узнать</app-btn>
    </AppSection>
  </transition>
</template>

<script>
import AppSection from '~/components/layout/AppSection'
import appBtn from '~/components/elements/button/appBtn'

export default {
  name: 'BigData',
  components: {
    AppSection,
    appBtn,
  },
  props: {},
  data() {
    return {
      showBigData: true,
    }
  },
  computed: {},
}
</script>

<style lang="scss">
.section--big-data {
  margin-top: rem(32);
  opacity: 1;

  @media only screen and (min-width: $tablet) {
    margin-top: rem(41);
    padding-bottom: rem(24);
  }
  @media only screen and (min-width: $desktop) {
    margin-top: rem(80);
  }

  .section {
    &__inner {
      background-image: url('~assets/img/big-data-320.jpg');
      background-size: cover;
      border-radius: rem(20);
      overflow: hidden;
      position: relative;
      padding: rem(24) rem(16);
      height: rem(208);
      box-sizing: border-box;

      @media only screen and (min-width: $tablet) {
        display: grid;
        grid-column-gap: rem(0);
        grid-row-gap: rem(0);
        background-image: url('~assets/img/big-data-990.jpg');
        padding: rem(24) rem(127) rem(24) rem(84);
        height: rem(168);
      }
      @media only screen and (min-width: $desktop) {
        background-image: url('~assets/img/big-data-1920.jpg');
        padding-right: rem(85);
      }
    }
    &__title {
      margin-top: rem(1);
      margin-bottom: 0;
      font-size: rem(30);
      line-height: rem(36);
      letter-spacing: rem(0.6);
      color: #ffffff;

      @media only screen and (min-width: $tablet) {
        font-size: rem(56);
        line-height: rem(60);
        letter-spacing: rem(0.8);
        grid-area: 1 / 1 / 2 / 2;
      }
    }
    &__subtitle {
      margin-top: rem(11);
      margin-bottom: rem(24);
      font-size: rem(14);
      line-height: rem(16);
      letter-spacing: rem(0.4);
      color: #ffffff;

      @media only screen and (min-width: $tablet) {
        margin-top: rem(12);
        font-size: rem(20);
        line-height: rem(24.5);
        letter-spacing: rem(0.6);
        max-width: rem(300);
        grid-area: 2 / 1 / 3 / 2;
      }
    }
    &__content {
      @media only screen and (min-width: $tablet) {
        grid-area: 1 / 2 / 3 / 3;
        display: flex;
        justify-content: center;
      }
    }
  }
  .btn {
    align-self: flex-start;

    @media only screen and (min-width: $tablet) {
      align-self: flex-end;
      margin-top: rem(-25);
    }
  }
}

.big-data {
  &__close {
    position: absolute;
    top: rem(24);
    right: rem(16);
    width: rem(24);
    height: rem(24);
    background: #000912;
    border-radius: rem(1000);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: rem(4);
    color: #ffffff;
    font-size: rem(12);
    line-height: rem(16);
    box-sizing: border-box;
    cursor: pointer;

    @media only screen and (min-width: $tablet) {
      right: rem(24);
    }

    &:after {
      font-family: 'icomoon';
      content: $icon-close;
    }
  }
}

.big-data-leave-active {
  animation: hideBigData 0.8s ease infinite;
  animation-iteration-count: 1;
}
@keyframes hideBigData {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    height: rem(208);
    margin-top: rem(32);
  }
  to {
    opacity: 0;
    height: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
}
@media only screen and (min-width: $tablet) {
  @keyframes hideBigData {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      height: rem(168);
      margin-top: rem(41);
      padding-bottom: rem(24);
    }
    to {
      opacity: 0;
      height: 0;
      margin-top: 0;
      padding-bottom: rem(0);
    }
  }
}
@media only screen and (min-width: $desktop) {
  @keyframes hideBigData {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      height: rem(168);
      margin-top: rem(80);
      padding-bottom: rem(24);
    }
    to {
      opacity: 0;
      height: 0;
      margin-top: 0;
      padding-bottom: rem(0);
    }
  }
}
</style>
