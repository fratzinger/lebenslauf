<template>
  <q-page id="content-index" class="flex flex-center row">
    <div class="col row container-landing justify-center">
      <div class="container-img col-10 col-sm-5 col-md-4">
        <fs-transition name="slide-to-right" :ms="1000">
          <q-img v-show="isVisible.profilePic"
                        :src="profilePic"
                        class="pic-profile circle"
                        spinner-color="white"
                        :ratio="1"
                        v-intersection="setVisible('profilePic')"/>
        </fs-transition>
        <div class="gt-sm flex">
          <q-btn v-for="link in btnLinks"
                 :key="link.title"
                 :to="link.to"
                 :icon="link.icon"
                 :style="link.style"
                 class="full-width q-mb-md q-mr-sm">
            <div class="col">{{ link.title }}</div>
            <external-link-icon v-if="link.isExternal" />
          </q-btn>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-8">
        <div class="container-title-subtitle">
          <fs-transition name="slide-to-right" :ms="1000">
            <div class="text-name text-h3" v-show="isVisible.name" v-intersection="setVisible('name')">Frederik Schmatz</div>
          </fs-transition>
          <fs-transition name="slide-to-top" :ms="1000">
            <div class="subtitle" v-show="isVisible.subtitle" v-intersection="setVisible('subtitle')">
              <span class="q-mr-md">Engineer by <emoji emoji="mortar_board" :size="30" style="" /></span>
              <span class="q-ml-md">Webdeveloper by <emoji emoji="heart" :size="30" /></span>
            </div>
          </fs-transition>
          <fs-transition name="slide-to-top" :ms="1000">
            <div class="attributes q-my-sm" v-show="isVisible.attributes" v-intersection="setVisible('attributes')">
              <span v-for="(attr, i) in attributes" :key="attr">
                <span >{{ attr }}</span>
                <span v-if="i < attributes.length - 1" class="text-blue-grey-3 q-mx-sm">|</span>
              </span>
            </div>
          </fs-transition>
          <fs-transition name="slide-to-top" :ms="1000">
            <div class="shields" v-show="isVisible.shields" v-intersection="setVisible('shields')">
              <img alt="Scrutinizer code quality (GitHub/Bitbucket)" src="https://img.shields.io/scrutinizer/quality/g/fratzinger/lebenslauf">
              <img alt="Travis (.org)" src="https://img.shields.io/travis/fratzinger/lebenslauf">
              <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/fratzinger/lebenslauf">
            </div>
          </fs-transition>
        </div>
        <fs-transition name="slide-to-top" :ms="1000">
          <div class="text-justify" v-show="isVisible.text" v-intersection="setVisible('text')">
            <p>Hallo,</p>
            <p>ich bin Frederik. Ein im Internet groß gewordener Webentwickler mit dem Drang neue Technologien zu lernen.</p>
            <p>
              Schon zu Schulzeiten brachte ich mir selbst Webdesign bei, um mit meinen Freunden eine selbstgestaltete
              Clan-Website zu haben. Angefangen mit Photoshop, wenig CSS und vielen verschachtelten
              <prism inline language="html">{{ tableTag }}</prism>-tags. Später verdiente ich ein paar Brötchen
              mit <prism inline language="css">clearfix: both;</prism>, <q-icon name="fab fa-bootstrap"></q-icon> Bootstrap und <q-icon name="fab fa-wordpress"></q-icon> Wordpress.
            </p>
            <p>
              Während meiner mehr als 5-jährigen Zeit im Fraunhofer IGP als Praktikant, Studentische Hilfskraft und Wiss. Mitarbeiter lernte ich zunächst in C# <prism inline language="clike">using System.Windows.Forms;</prism> typisiert und objektorientiert zu programmieren.
              So programmierte ich verschiedene <prism inline>WinForms</prism>-Anwendungen für Industriepartner des Maschinenbaus (u.a. mit <prism inline>MS Access</prism>, als Mono-Anwendungen für Linux oder eine Schnittstellen zu Robot Expert).
            </p>
            <p>
              Über die Roboter-Offlineprogrammierung kam ich zur Onlineprogrammierung mit Leichtbaurobotern und beschäftigte mich intensiv mit der Mensch-Roboter-Kollaboration mit Cobots von Universal Robots.
            </p>
            <p>
              Dies brachte mich schlussendlich dazu ein HMI für den UR10 und ein Smartphone mit <prism inline>HTML</prism>, <prism inline>CSS</prism>, <prism inline>jQuery</prism>, <prism inline>Websocket</prism>, <prism inline>Node.JS</prism>, <prism inline>Express.js</prism> und <prism inline>Postgres</prism> zu entwickeln.
              Mittlerweile habe diesen <prism inline>Stack</prism> grundlegend durch <prism inline>Vue.js</prism> und <prism inline>Feathers.js</prism> erweitert und bin so als <b>Fullstack-Developer</b> unterwegs. Folgende Abkürzungen benutze ich also täglich: CLI, NPM, TDD, CI/CD, ES6, TS, REST, CRUD, JWT, ACL, SQL, MQTT, ORM, SPA, PWA, JSX, DOM, HTML, SCSS.
            </p>
          </div>
        </fs-transition>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import { Emoji } from "emoji-mart-vue";
import Prism from "vue-prism-component";

import ExternalLinkIcon from "components/ExternalLinkIcon";
import FsTransition from "components/FsTransition";

export default {
  name: "PageIndex",
  components: {
    Emoji,
    Prism,
    ExternalLinkIcon,
    FsTransition
  },
  data() {
    return {
      attributes: [
        "Knobler",
        "Vue.js-Fanboy",
        "Hacker/Maker",
        "Serien-Junkie",
        "Golfer",
        "Musiker"
      ],
      tableTag: "<table>",
      isProfilePicVisible: false,
      isVisible: {
        profilePic: false,
        name: false,
        subtitle: false,
        attributes: false,
        shields: false,
        text: false
      }
    };
  },
  computed: {
    ...mapGetters("uploads", {
      profilePic: "profilePic"
    }),
    btnLinks() {
      return [
        {
          title: "Lebenslauf",
          icon: "fas fa-address-card",
          isExternal: false,
          to: { name: "PageCV" }
        },
        {
          title: "Mein Linked-in Profil",
          icon: "fab fa-linkedin",
          isExternal: true,
          style: { background: "#0077b5", color: "#fff" }
        },
        {
          title: "Mein Github Profil",
          icon: "fab fa-github-square",
          isExternal: true,
          style: { background: "#24292e", color: "#fff" }
        },
        {
          title: "Mein Researchgate Profil",
          icon: "fab fa-researchgate",
          isExternal: true,
          style: { background: "#00ccbb", color: "#fff" }
        }
      ];
    }
  },
  watch: {},
  methods: {
    setVisible(part) {
      setTimeout(() => { this.isVisible[part] = true; }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
:not(pre) > code[class*="language-"] {
  padding: .1em 0.3em !important;
}

#content-index {
  padding: 20px;

  .container-landing {
    max-width:1000px;

    .container-title-subtitle {
      margin-bottom:15px;

      .text-name {
        margin-bottom: 10px;
        text-align: center;

        body.screen--md &,
        body.screen--lg &,
        body.screen--xl & {
          margin-left: -25px;
          text-align: left;
        }
      }

      .subtitle,
      .attributes {
        text-align: center;
      }

      .subtitle {
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 0.125em;
        white-space: nowrap;

        .emoji-mart-emoji {
           transform: translate(0, 8px);
        }
      }

      .shields {
        display: flex;
        justify-content: center;
        img {
          margin: 0 3px;
        }
      }
    }

    .container-img {
      .pic-profile {
        margin-bottom: 20px;
      }

      body.screen--md &,
      body.screen--lg &,
      body.screen--xl & {
        padding-right: 30px;
      }
    }
  }
}
</style>
