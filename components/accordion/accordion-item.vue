<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible" class="accordion__content">
        <!-- This slot will handle all the content that is passed to the accordion -->
        <slot name="accordion-content"></slot>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  inject: ['Accordion'],
  props: {},
  data() {
    return {
      index: null,
    }
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active
    },
  },
  created() {
    this.index = this.Accordion.count++
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.Accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    },
  },
}
</script>

<style lang="scss">
.accordion__item {
  cursor: pointer;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;

  margin-top: rem(32);

  @media only screen and (min-width: $tablet) {
    margin-top: rem(40);
  }

  @media only screen and (min-width: $desktop) {
    margin-top: rem(28);
  }

  h3 {
    font-weight: 500;
    font-size: rem(18);
    line-height: rem(24);
    letter-spacing: rem(0.6);
    margin: 0;
    padding: 0;

    @media only screen and (min-width: $tablet) {
      font-size: rem(24);
      line-height: rem(28.5);
    }
  }

  &:after {
    font-family: '#{$icomoon-font-family}' !important;
    content: $icon-plus;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: rem(4);
    width: rem(24);
    height: rem(24);
    font-size: rem(15);

    background: #edf3f9;
    border-radius: rem(100);
    box-sizing: border-box;

    @media only screen and (min-width: $tablet) {
      width: rem(40);
      height: rem(40);
      padding: rem(12);
      font-size: rem(16);
    }
  }
}

.accordion__trigger_active {
  &:after {
    content: $icon-minus;
  }
}

.accordion__content {
  margin-right: rem(45);
  margin-top: rem(12);
  margin-bottom: rem(1);
  font-weight: 350;
  font-size: rem(16);
  line-height: rem(20);
  letter-spacing: rem(0.4);

  @media only screen and (min-width: $tablet) {
    margin-right: rem(60);
    margin-top: rem(4);
    margin-bottom: rem(0);
    font-size: rem(20);
    line-height: rem(28.5);
    letter-spacing: rem(0.6);
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
