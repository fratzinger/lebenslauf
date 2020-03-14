<template>
  <q-page id="content-index" class="flex flex-center row">
    <div class="col row container-landing justify-center">
      <div class="container-img col-10 col-sm-5 col-md-4">
        <q-img :src="profilePic"
               class="pic-profile"
               spinner-color="white"
               :ratio="1"/>
        <div class="gt-sm flex ">
          <q-btn icon="fab fa-linkedin"
                 class="full-width q-mb-md q-mr-sm"
                 style="background: #0077b5; color: #fff;">
                 <div class="col">Mein Linked-in Profil<external-link-icon /></div>
          </q-btn>
          <q-btn icon="fab fa-github-square"
                 class="full-width q-mb-md q-mr-sm"
                 style="background: #24292e; color: #fff">
                 <div class="col">Mein Github Profil<external-link-icon /></div>
          </q-btn>
          <q-btn icon="fab fa-researchgate"
                 class="full-width q-mb-md q-mr-sm"
                 style="background: #00ccbb; color: #fff">
                 <div class="col">Meine Veröffentlichungen<external-link-icon /></div>
          </q-btn>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-8">
        <div class="container-title-subtitle">
          <div class="text-name text-h3">Frederik Schmatz</div>
          <div class="subtitle">
            <span class="q-mr-md">Engineer by <emoji emoji="mortar_board" :size="30" style="" /></span>
            <span class="q-ml-md">Webdeveloper by <emoji emoji="heart" :size="30" /></span>
          </div>

          <div class="attributes q-my-sm">
            <span v-for="(attr, i) in attributes" :key="attr">
              <span >{{ attr }}</span>
              <span v-if="i < attributes.length - 1" class="text-blue-grey-3 q-mx-sm">|</span>
            </span>
          </div>
          <div class="shields">
            <img alt="Scrutinizer code quality (GitHub/Bitbucket)" src="https://img.shields.io/scrutinizer/quality/g/fratzinger/lebenslauf">
            <img alt="Travis (.org)" src="https://img.shields.io/travis/fratzinger/lebenslauf">
            <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/fratzinger/lebenslauf">
          </div>
        </div>
        <div class="text-justify">
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
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import { Emoji } from "emoji-mart-vue";
import Prism from "vue-prism-component";

import ExternalLinkIcon from "components/ExternalLinkIcon";

export default {
  name: "PageIndex",
  components: {
    Emoji,
    Prism,
    ExternalLinkIcon
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
      tableTag: "<table>"
    };
  },
  computed: {
    ...mapGetters("uploads", {
      profilePic: "profilePic"
    })
  },
  watch: {}
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
        border-radius: 50%;
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
