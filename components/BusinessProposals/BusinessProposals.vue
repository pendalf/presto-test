<template>
  <AppSection
    :title="'Предлагаем бизнесу'"
    :section-suffix="'business-proposals'"
  >
    <accordion class="accordion-props">
      <div
        v-for="(itemsCol, index) in itemsCols"
        :key="index"
        class="accordion-props__col"
      >
        <accordion-item v-for="(item, index2) in itemsCol" :key="index2">
          <template slot="accordion-trigger">
            <h3>{{ item.title }}</h3>
          </template>
          <template slot="accordion-content">
            {{ item.subtitle }}
          </template>
        </accordion-item>
      </div>
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
  computed: {
    itemsCols() {
      const cols = Math.ceil(this.items.length / 2)
      return this.items.reduce((p, c, i, a) => {
        if (i % cols === 0) p.push({})
        p[p.length - 1][i] = c
        return p
      }, [])
    },
  },
}
</script>

<style lang="scss">
.section--business-proposals {
  margin-bottom: rem(36);

  @media only screen and (min-width: 650px) {
    padding-top: rem(3);
    margin-bottom: rem(121);
  }
  @media only screen and (min-width: 1200px) {
    margin-bottom: rem(160);
  }
}
.accordion-props {
  @media only screen and (min-width: 650px) {
    display: flex;
    align-items: flex-start;
    gap: rem(60);
    margin-top: rem(-5);
  }
  @media only screen and (min-width: 1200px) {
    margin-top: rem(8);
  }
  &__col {
    flex-basis: 100%;
  }
}
</style>
