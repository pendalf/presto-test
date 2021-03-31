<template>
  <AppSection :title="'Остались вопросы?'" :section-suffix="'prefooter'">
    <template slot="section-subtitle">
      Узнавайте информацию из первых рук, общайтесь с действующими продавцами,
      будьте в курсе новых инструментов и возможностей маркетплейса.
    </template>
    <accordion>
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
      <appBtn :to="'/'" class="btn--white">Все вопросы-ответы</appBtn>
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
  display: flex;
  flex-direction: column;
  .section {
    &__subtitle {
      margin-bottom: 0;
    }
    &__footer {
      margin-top: rem(32);
    }
  }
  .accordion__trigger:after {
    background: none;
  }
}
</style>
