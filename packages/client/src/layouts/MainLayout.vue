<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="justify-between">
        <div>
          <q-btn flat
               dense
               round
               @click="leftDrawerOpen = !leftDrawerOpen"
               icon="menu"
               aria-label="Menu"/>
        </div>
        <div>
          <q-btn flat>
            Github<external-link-icon />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              bordered
              mini
              content-class="bg-grey-1 column justify-between">
      <q-list>
        <essential-link v-for="link in personalUrls"
                        :key="link.title"
                        v-bind="link"/>
      </q-list>
      <q-list>
        <essential-link v-for="link in externalUrls"
                        :key="link.title"
                        v-bind="link"/>
      </q-list>
    </q-drawer>
    <q-page-container>
      <fs-transition :name-enter="transitionEnter"
                     :name-leave="transitionLeave"
                     is-absolute>
        <router-view class="route"></router-view>
      </fs-transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { makeFindMixin } from "feathers-vuex";
import { mapGetters } from "vuex";

import FsTransition from "components/FsTransition";

import EssentialLink from "components/EssentialLink";
import ExternalLinkIcon from "components/ExternalLinkIcon";

export default {
  name: "MainLayout",
  components: {
    EssentialLink,
    ExternalLinkIcon,
    FsTransition
  },
  mixins: [makeFindMixin({ service: "urls" })],
  data() {
    return {
      leftDrawerOpen: false,
      transitionName: "slide-to-right",
      transitionEnter: "slide-to-right",
      transitionLeave: "slide-to-right"
    };
  },
  computed: {
    ...mapGetters("urls", {
      findUrlsInStore: "find"
    }),
    urlsParams() {
      return {
        query: {}
      };
    },
    personalUrls() {
      return this.findUrlsInStore({
        query: {
          type: "personal"
        }
      }).data;
    },
    externalUrls() {
      return this.findUrlsInStore({
        query: {
          type: "external"
        }
      }).data;
    },
    transitionMode() {
      return (this.transitionLeave && this.transitionLeave.startsWith("zoom")) ? false : "out-in";
    }
  },
  watch: {
    "$route"(to, from) {
      this.transitionLeave = this.transitionLeave = from.meta && from.meta.transition && from.meta.transition.leaveNotOverridable;
      if (!this.transitionLeave) { this.transitionLeave = to.meta && to.meta.transition && to.meta.transition.overrideLeave; }
      if (!this.transitionLeave) { this.transitionLeave = from.meta && from.meta.transition && from.meta.transition.leave; }
      if (!this.transitionLeave) { this.transitionLeave = "slide-to-right"; }

      this.transitionEnter = to.meta && to.meta.transition && to.meta.transition.enterNotOverridable;
      if (!this.transitionEnter) { this.transitionEnter = from.meta && from.meta.transition && from.meta.transition.overrideEnter; }
      if (!this.transitionEnter) { this.transitionEnter = to.meta && to.meta.transition && to.meta.transition.enter; }
      if (!this.transitionEnter) { this.transitionEnter = "slide-to-right"; }
    }
  }
};
</script>

<style lang="scss">
// transitions

.q-page-container {
  &.transition-active {
    height: 100vh;
    overflow: hidden;
  }
}

.route {
  display: flex;
  flex: 1;
  box-sizing: border-box;
  position: relative;
  padding: 20px;

  &.transition-active {
    overflow:hidden;
  }

}
</style>
