<template>
  <q-linear-progress v-intersection="tween"
                     :value="tweenedNumber"
                     :color="color"
                     :size="size"></q-linear-progress>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import {
  debounce as _debounce
} from "lodash-es";

import gsap from "gsap";

export default {
  name: "FsLinearProgress",
  components: {},
  props: {
    value: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "7px"
    },
    tweenDuration: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      tweenedNumber: 0
    };
  },
  computed: {},
  watch: {
    value(newVal, oldVal) {
      this.tween();
    }
  },
  mounted() {},
  methods: {
    tween() {
      setTimeout(() => {
        gsap.to(this.$data, { duration: this.tweenDuration, tweenedNumber: this.value });
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
