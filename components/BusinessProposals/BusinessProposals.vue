<template>
  <AppSection
    :title="'Предлагаем бизнесу'"
    :section-suffix="'business-proposals'"
  >
    <accordion>
      <accordion-item v-for="(item, index) in items" :key="index">
        <template slot="accordion-trigger">
          <h3>{{ item.title }}</h3>
        </template>
        <template slot="accordion-content">
          {{ item.subtitle }}
        </template>
      </accordion-item>
    </accordion>
  </AppSection>
</template>
<script>
import Accordion from '~/components/accordion/accordion'
import AccordionItem from '~/components/accordion/accordion-item'
import AppSection from '~/components/layout/AppSection'

export default {
  name: 'BusinessProposals',
  components: {
    AppSection,
    Accordion,
    AccordionItem,
  },
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.section--business-proposals {
  margin-bottom: rem(36);
}
</style>
