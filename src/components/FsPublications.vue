<template>
  <div>
    <q-card>
      <q-card-section class="text-h6 bg-primary text-white">
        {{ publications.length }} Veröffentlichungen
      </q-card-section>
      <q-card-section>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-for="pub in publications"
            :key="pub.title"
            v-model="pub.expanded"
            style="border-bottom: 1px solid #ddd;"
            expand-icon-toggle
            :class="{'bg-primary': pub.expanded, 'text-white': pub.expanded}"
            icon="perm_identity">
            <template v-slot:header>
              <q-item-section>
                <q-btn
                  flat
                  no-caps
                  align="left"
                  class="text-h6"
                  @click="pub.expanded = !pub.expanded">
                  {{ pub.title }}
                  <span v-if="pub.subtitle" class="text-italic">- {{ pub.subtitle }}</span>
                </q-btn>
                <div>
                  <q-btn
                    :type="pub.url ? 'a' : 'button'"
                    :href="pub.url"
                    target="__blank"
                    :disable="!pub.url"
                    icon="fas fa-file-alt"
                    rounded
                    size="sm"
                    :color="pub.expanded ? 'white' : 'primary'"
                    :text-color="pub.expanded ? 'primary' : 'white'">
                    <span class="q-pl-sm">{{ pub.type }}</span>
                    <q-icon
                      size="0.8rem"
                      v-if="pub.url"
                      name="fas fa-external-link-alt"
                      class="q-ml-sm"></q-icon>
                  </q-btn>
                  <span class="q-px-sm">{{ pub.date }}</span>
                  <span class="q-px-sm">{{ pub.where.title }}</span>
                  <span class="q-px-sm">
                    <a :href="pub.url" target="_blank">{{ pub.doi || pub.isbn }}</a>
                  </span>
                  <q-btn
                    rounded
                    size="sm"
                    icon="fas fa-quote-right"
                    :color="pub.expanded ? 'white' : 'primary'"
                    :text-color="pub.expanded ? 'primary' : 'white'"
                    @click="setPublicationToQuote(pub)"></q-btn>
                </div>
              </q-item-section>
            </template>
            <q-card>
              <q-card-section class="text-black">
                <div class="q-pb-sm">
                  <span v-for="author in pub.authors" :key="author" class="q-pr-sm q-pb-sm">
                    <q-avatar
                      color="blue-grey-6"
                      text-color="white"
                      icon="fas fa-user"
                      size="1rem"
                      style="margin-right:5px"></q-avatar>
                    {{ author }}
                  </span>
                </div>
                <span class="text-bold">Abstract:</span>
                <div class="abstract text-justify">{{ pub.abstract }}</div>
                <div>
                  <q-chip v-for="tag in pub.tags" :key="tag">{{ tag }}</q-chip>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-dialog v-model="isDialogQuoteVisible">
      <q-card style="width:700px;">
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row q-col-gutter-sm">
            <div class="col">
              <q-input v-model="quote" filled type="textarea" />
            </div>
            <div class="col-auto">
              <q-btn color="primary" icon="far fa-clipboard" @click="copyCiteToClipboard"></q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat
label="OK"
color="primary"
v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import { copyToClipboard } from "quasar";

export default {
  name: "FsPublications",
  components: {},
  props: {},
  data() {
    return {
      isDialogQuoteVisible: false,
      publications: [
        {
          expanded: false,
          title:
            "Smart Human-Robot-Collaboration in Mechanical Joining Processes",
          subtitle: "",
          where: {
            title: "Procedia Manufacturing",
            volume: "",
            pages: "",
            url: ""
          },
          type: "Article",
          date: "01/2018",
          url: "https://doi.org/10.1016/j.promfg.2018.06.029",
          openAccess: true,
          authors: [
            "Jens Meißner",
            "Frederik Schmatz",
            "Florian Beuß",
            "Jan Sender",
            "Wilko Flügge",
            "Eugen Gorr"
          ],
          doi: "10.1016/j.promfg.2018.06.029",
          abstract:
            "This publication illustrates the development of an innovative application of human-robot-collaboration in the final aircraftassembly. The focused application is built on a new tool for solid self-piercing riveting which - if handled manually - would result in high physical load on employees. The presented solution is based on a hand guided collaborative lightweight robot combining different methods of force control. Thus the tool can be moved quickly and precisely to reach all joining positionsavoiding physical effort for the operator. Special focus was given on the integrated handling of the entire system, i.e. the tool and the robot. The interlinked sensory of all subsystems involved in the joining process ensures a smart control of the robot system. A remote control system using mobile devices was implemented to increase the usability and to foster the employees’ acceptance of the solution. In addition it enables significantly improved process documentation, reproducibility and transparency in the manual mechanical joining processes.",
          tags: [
            "Human-Robot-Collaboration",
            "Smart Factories",
            "Advanced Automation",
            "Hand Guiding",
            "Ergonomics",
            "Smart Systems",
            "Mechanical Joining"
          ]
        },
        {
          expanded: false,
          title: "Mensch-Roboter-Kollaboration in der Flugzeugendmontage",
          subtitle: "",
          where: {
            title: "Industrie 4.0 Management",
            volume: "",
            pages: "",
            url: ""
          },
          type: "Article",
          date: "02/2019",
          url: "https://doi.org/10.30844/I40M_19-1_S19-22",
          openAccess: false,
          authors: [
            "Frederik Schmatz",
            "Jens Meißner",
            "Jan Sender",
            "Wilko Flügge",
            "Eugen Gorr"
          ],
          doi: "10.30844/I40M_19-1_S19-22",
          abstract:
            "iele Montageprozesse im Flugzeugbau laufen manuell ab. In der Endmontage der Airbus A320-Familie werden unter anderem die Längsstreben, sogenannte Stringer, am Querstoß zweier benachbarter Flugzeugrumpfsektionen über Stringerkupplungen miteinander verbunden. Hierfür werden derzeit herkömmliche Vollniete eingesetzt. Zukünftig wird hier ein Wechsel auf Vollstanzniete angestrebt. Aufgrund hoher Prozesskräfte beim Stanznieten weisen die Werkzeuge ein hohes Eigengewicht auf, wodurch die Montage zu hohen physischen Belastungen der Mitarbeiter während der manuellen Handhabung führen würde. Ein innovatives Assistenzsystem auf Basis eines kollaborierenden Roboters soll Abhilfe schaffen. Durch eine intelligente Steuerung soll es darüber hinaus die Qualitätssicherung maßgeblich unterstützen. Das System ist Gegenstand dieses Beitrags.",
          tags: [
            "Mensch-Roboter-Kollaboration",
            "Smart Factory",
            "Handführung",
            "Ergonomie",
            "Intelligente Assistenzsysteme",
            "Mechanisches Fügen"
          ]
        },
        {
          expanded: false,
          title: "Digitale Montageplanung für das Handwerk",
          subtitle: "Effizienzsteigerung durch vernetzte Prozesse",
          where: {
            title: "Fabriksoftware",
            volume: "24 (2019) 4",
            pages: "35-38",
            url: ""
          },
          type: "Article",
          date: "11/2019",
          url:
            "https://shop.gito.de/de/product_info.php?info=p222_automatisierung--fabriksoftware-4-2019-.html",
          openAccess: false,
          authors: [
            "Anne Fischer",
            "Robert Plath",
            "Frederik Schmatz",
            "Wilko Flügge"
          ],
          doi: "",
          abstract:
            "Im Handwerk ist die Einhaltung von Montageterminen das Hauptziel der Planung vorgelagerter Prozesse. Aufgrund der Abhängigkeit von anderen Gewerken unterliegt dieser Termin einer hohen Dynamik. Die Planung der Abläufe zur Termineinhaltung erfolgt bisher weitestgehend analog mit hohem Optimierungspotenzial. Dafür wird ein Konzept zur Digitalisierung der Montageplanung vorgestellt und implementiert.",
          tags: [
            "Digitalisierung",
            "Handwerk",
            "Prozesstransparenz",
            "Montageplanung"
          ]
        },
        {
          expanded: false,
          title:
            "Qualitätsoptimierung im mechanischen Fügen durch Einsatz von Mensch-Roboter-Kollaboration",
          subtitle: "",
          where: {
            title: "DVS-Berichte",
            volume: "Band 362",
            pages: "58-63",
            url: ""
          },
          type: "Article",
          date: "02/2020",
          url: "https://www.dvs-media.eu/de/neuerscheinungen/3825/roboter-2020",
          openAccess: false,
          authors: [
            "Frederik Schmatz",
            "Stefan Neumann",
            "Jan Sender",
            "Wilko Flügge",
            "Gerson Meschut"
          ],
          isbn: "978-3-96144-077-1",
          abstract:
            "Im Rahmen eines gemeinsamen Forschungsprojektes der Fraunhofer-Einrichtung für Großstrukturen in der Produktionstechnik (Fh-IGP) und dem Laboratorium für Werkstoff - und Fügetechnik (LWF) wird ein kollaborierendes Robotersystem entwickelt, das zum mechanischen Fügen von Fügewerkzeugen mit einem Gewicht von 10kg eingesetzt werden kann. Es unterstützt die Mitarbeiter zum einen körperlich, da es das Werkzeug permanent trägt. Zum anderen wird es zur Erweiterung der Prozessüberwachung eingesetzt, indem die roboterinhärente Sensorik zur Erweiterung der Prozessüberwachung und Fehlerklassifikation genutzt wird. Hierfür wurde ein Versuchsstand und entsprechende Schnittstellen entwickelt, um Prozesskurven bei eingestellten Fehlern aufzuzeichnen und auszuwerten. Dieser Ansatz führt zu einer Erweiterung bestehender Setzprozessüberwachungssysteme, wodurch sich genauere Aussagen über die Fehlerart und –ausprägung und somit die Qualität eines Fügepunktes treffen lassen. Dies führt wiederum dazu, dass notwendige Nacharbeiten sofort identifiziert und zielgerichtet durchgeführt werden können.",
          tags: []
        }
      ],
      quote: "",
      currentPublication: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    setPublicationToQuote(pub) {
      this.currentPublication = pub;
      let authors = pub.authors.map(x => x.split(" "));
      authors = authors.map(x => `${x[1]}, ${x[0][0]}.`);
      if (authors.length > 3) {
        authors = `${authors[0]} et al.`;
      } else {
        authors = authors.join(", ");
      }
      // Gaudio, J. L., & Snowdon, C. T. (2008). Spatial cues more salient than color cues in cotton-top tamarins (saguinus oedipus) reversal learning. Journal of Comparative Psychology, 122, 441-444. doi: 10.1037/0735-7036.122.4.441
      this.quote = `${authors} (${pub.date}). ${pub.title}. ${pub.where.title} ${pub.where.volume}. ${pub.where.pages}. doi: ${pub.doi}`;

      this.isDialogQuoteVisible = true;
    },
    copyCiteToClipboard() {
      copyToClipboard(this.quote)
        .then(x => {
          this.isDialogQuoteVisible = false;
          this.triggerNotificationCite();
        })
        .catch(err => {
          console.log(err);
        });
    },
    triggerNotificationCite() {
      console.log(this.$q);
      this.$q.notify({
        type: "info",
        message: "Citation wurde in Zwischenablage kopiert"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.abstract {
  border-left: 5px solid #ccc;
  padding: 0 0 0 15px;
  margin: 5px 10px 10px;
}
</style>
