<template>
  <fs-transition name-enter="slide-to-top"
                 name-leave="slide-to-bottom">
      <q-page-sticky v-show="scrollPos > 1000"
                     v-scroll="scrolled"
                     position="bottom-left"
                     :offset="[18, 18]">
        <q-btn round
              color="primary"
              icon="fas fa-arrow-up"
              @click="scrollToTop" />
      </q-page-sticky>
    </fs-transition>
</template>

<script>
import {
  debounce as _debounce
} from "lodash-es";

import FsTransition from "components/FsTransition";

// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "FsScrollToTop",
  components: {
    FsTransition
  },
  props: {},
  data() {
    return {
      scrollPos: 0,
      window
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    scrolled: _debounce(function(pos) {
      this.scrollPos = pos;
    }, 100, {
      maxWait: 500
    }),
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
