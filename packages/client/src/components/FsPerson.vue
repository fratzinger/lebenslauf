<template>
  <div v-scroll="scrolled" class="persona">
    <fs-transition :name-enter="transitions.slideToBottom"
                   :name-leave="transitions.slideToTop">
      <q-img v-show="showFixedPic"
            class="fixed-pic"
            :src="profilePic"/>
    </fs-transition>
    <q-card flat
            :bordered="$q.screen.gt.xs"
            class="flex row reverse justify-center">
        <q-img class="col-8 col-sm-5"
               :class="{'q-mb-md': $q.screen.lt.sm, 'circle': $q.screen.lt.sm }"
               :src="profilePic"/>
        <div class="col-12 col-sm-7">
          <div class="bg-primary q-pa-md text-h6 text-white">
            <q-icon name="fas fa-user" class="q-mr-2"></q-icon>
            <span>{{ name }}</span>
          </div>
          <q-list bordered separator class="q-pa-md">
            <q-item v-for="entry in otherCharacteristics"
                    :key="entry.name"
                    clickable
                    v-ripple>
              <q-item-section class="text-bold">{{ entry.name }}</q-item-section>
              <q-item-section>{{ entry.value }}</q-item-section>
            </q-item>
          </q-list>
        </div>

    </q-card>
  </div>

</template>

<script>
import { makeFindMixin } from "feathers-vuex";
import { mapGetters } from "vuex";

import FsTransition, { transitions } from "components/FsTransition";

import {
  debounce as _debounce
} from "lodash-es";

export default {
  name: "FsPerson",
  components: {
    FsTransition
  },
  props: {},
  mixins: [makeFindMixin({ service: "characteristics" })],
  data() {
    return {
      scrollPos: 0,
      transitions
    };
  },
  computed: {
    ...mapGetters("uploads", {
      profilePic: "profilePic"
    }),
    characteristicsParams() {
      return {
        query: {}
      };
    },
    name() {
      const name = this.characteristics.find(x => x.name === "Name");
      if (name) { return name.value; } else { return ""; };
    },
    otherCharacteristics() {
      return this.characteristics.filter(x => x.name !== "Name");
    },
    showFixedPic() {
      return this.scrollPos > 400;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    scrolled: _debounce(function(pos) {
      this.scrollPos = pos;
    }, 100)
  }
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.persona {
  .q-card__section--vert {
    padding: 0px;
  }

  .fixed-pic {
    position: fixed;
    z-index: 2001;
    right: 10px;
    top: 10px;
    width: 120px;
    border-radius: 50%;
    border: 3px solid #fff;
  }
}
</style>
