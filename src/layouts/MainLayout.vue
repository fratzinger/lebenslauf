<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
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
        <EssentialLink
          v-for="link in personLinks"
          :key="link.title"
          v-bind="link"/>
      </q-list>
      <q-list>
        <EssentialLink
          v-for="link in externalLinks"
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

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      personLinks: [
        {
          title: "Github",
          caption: "Github",
          icon: "fab fa-github",
          link: "https://github.com/fratzinger"
        },
        {
          title: "LinkedIn",
          caption: "LinkedIn - Frederik Schmatz",
          icon: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/f-schmatz/"
        },
        {
          title: "Researchgate",
          caption: "Researchgate - Frederik Schmatz",
          icon: "fab fa-researchgate",
          link: "https://www.researchgate.net/profile/Frederik_Schmatz"
        }
      ],
      externalLinks: [
        {
          title: "Fraunhofer IGP",
          caption: "Fraunhofer IGP",
          icon: "fas fa-building",
          link: "https://www.igp.fraunhofer.de/"
        },
        {
          title: "Hanseatic Efficiency",
          caption: "Shell Eco Marathon",
          icon: "fas fa-car",
          link: "https://www.hro-sem.de/"
        }
      ]
    };
  }
};
</script>
