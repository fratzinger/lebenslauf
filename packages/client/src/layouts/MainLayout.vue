<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat
               dense
               round
               @click="leftDrawerOpen = !leftDrawerOpen"
               icon="menu"
               aria-label="Menu"/>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              bordered
              mini
              content-class="bg-grey-1">
      <q-list class="q-mb-xl">
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import { makeFindMixin } from "feathers-vuex";

import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  components: {
    EssentialLink
  },
  mixins: [makeFindMixin({ service: "urls" })],
  data() {
    return {
      leftDrawerOpen: false
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
    }
  }
};
</script>
