<template>
  <AppSection :title="'Остались вопросы?'" :section-suffix="'prefooter'">
    <template slot="section-subtitle">
      Узнавайте информацию из первых рук, общайтесь с действующими продавцами,
      будьте в курсе новых инструментов и возможностей маркетплейса.
    </template>
    <accordion class="accordion--prefooter">
      <accordion-item v-for="(item, index) in faq" :key="index">
        <template slot="accordion-trigger">
          <h3>{{ item.title }}</h3>
        </template>
        <template slot="accordion-content">
          {{ item.subtitle }}
        </template>
      </accordion-item>
    </accordion>
    <template slot="section-footer">
      <app-btn :to="'/'" class="btn--white">Все вопросы-ответы</app-btn>
    </template>
  </AppSection>
</template>

<script>
import { mapState } from 'vuex'

import AppSection from '~/components/layout/AppSection'
import Accordion from '~/components/accordion/accordion'
import AccordionItem from '~/components/accordion/accordion-item'
import appBtn from '~/components/elements/button/appBtn'

export default {
  name: 'Prefooter',
  components: {
    AppSection,
    Accordion,
    AccordionItem,
    appBtn,
  },
  computed: {
    ...mapState({ faq: 'faq' }),
  },
}
</script>

<style lang="scss">
.section--prefooter {
  background: #15171f;
  border-radius: rem(32) rem(32) rem(0) rem(0);
  color: #ffffff;
  padding-bottom: rem(40);
  margin-top: rem(36);
  @media only screen and (min-width: $tablet) {
    padding-top: rem(41);
    padding-bottom: rem(135);
  }
  @media only screen and (min-width: $desktop) {
    padding-top: rem(80);
    border-radius: rem(60) rem(60) rem(0) rem(0);
    padding-bottom: rem(103);
  }
  .section {
    &__title {
      max-width: none;
      @media only screen and (min-width: $tablet) {
        max-width: rem(350);
      }
      @media only screen and (min-width: $desktop) {
        max-width: rem(550);
      }
    }
    &__subtitle {
      margin-bottom: rem(17);
      @media only screen and (min-width: $tablet) {
        margin-bottom: 0;
        max-width: rem(400);
      }
      @media only screen and (min-width: $desktop) {
        max-width: rem(520);
      }
    }
    &__footer {
      margin-top: rem(32);
    }
    &__inner {
      display: flex;
      flex-direction: column;

      @media only screen and (min-width: $tablet) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows:
          auto
          auto 1fr;
        grid-column-gap: rem(0);
        grid-row-gap: rem(0);
      }
    }
  }
  .accordion__trigger {
    margin-top: rem(24);
    @media only screen and (min-width: $desktop) {
      margin-top: rem(32);
    }
    h3 {
      @media only screen and (min-width: $desktop) {
        font-weight: normal;
        font-size: rem(30);
        line-height: rem(36);
        letter-spacing: rem(0.6);
      }
    }
    &:after {
      background: none;
    }
  }

  @media only screen and (min-width: $tablet) {
    .section {
      &__title {
        grid-area: 1 / 1 / 2 / 2;
        margin-top: rem(40);
      }
      &__subtitle {
        grid-area: 2 / 1 / 3 / 2;
        margin-top: 0;
        font-size: rem(20);
        line-height: rem(28.5);
        letter-spacing: rem(0.6);
        margin-top: rem(8);
      }
      &__footer {
        grid-area: 3 / 1 / 4 / 2;
        margin-top: rem(32);
      }
      &__content {
        grid-area: 1 / 2 / 4 / 3;
        margin-left: rem(16);
      }
    }
  }

  .section__content {
    @media only screen and (min-width: $tablet) {
      margin-left: rem(12);
    }
  }
  .accordion--prefooter {
    @media only screen and (min-width: $tablet) {
      // padding-top: rem(16);
    }
    @media only screen and (min-width: $desktop) {
      padding-top: rem(9);
    }
    .accordion__item {
      @media only screen and (min-width: $desktop) {
        margin-right: rem(18);
      }
    }
    .accordion__trigger {
      @media only screen and (min-width: $tablet) {
        padding-top: rem(16);
      }
      @media only screen and (min-width: $desktop) {
        padding-top: 0;
      }
      h3 {
        @media only screen and (min-width: $tablet) {
          font-weight: normal;
          font-size: rem(30);
          line-height: rem(36);
          letter-spacing: rem(0.6);
        }
      }
    }
    .accordion__content {
      @media only screen and (min-width: $tablet) {
        margin-top: rem(19);
        // margin-right: rem(50);
      }
      @media only screen and (min-width: $desktop) {
        padding-bottom: rem(1);
      }
    }
  }
}
</style>
