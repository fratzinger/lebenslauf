<template>
  <div>
    <fs-card :title="publications.length + ' Veröffentlichungen'" icon="far fa-file-alt">
      <q-list bordered class="rounded-borders">
          <q-expansion-item v-for="pub in publications"
                                :key="pub.title"
                                v-model="pub.expanded"
                                style="border-bottom: 1px solid #ddd;"
                                expand-icon-toggle
                                :class="{'bg-primary': pub.expanded, 'text-white': pub.expanded}"
                                icon="perm_identity">
            <template v-slot:header>
              <q-item-section>
                <q-btn flat
                       no-caps
                       align="left"
                       class="text-h6"
                       @click="pub.expanded = !pub.expanded">
                  {{ pub.title }}
                  <span v-if="pub.subtitle" class="text-italic">- {{ pub.subtitle }}</span>
                </q-btn>
                <div>
                  <q-btn :type="pub.url ? 'a' : 'button'"
                         :href="pub.url"
                         target="__blank"
                         :disable="!pub.url"
                         icon="fas fa-file-alt"
                         rounded
                         size="sm"
                         :color="pub.expanded ? 'white' : 'primary'"
                         :text-color="pub.expanded ? 'primary' : 'white'">
                    <span class="q-pl-sm">{{ pub.type }}</span>
                    <q-icon size="0.8rem"
                            v-if="pub.url"
                            name="fas fa-external-link-alt"
                            class="q-ml-sm"></q-icon>
                  </q-btn>
                  <span class="q-px-sm">{{ date.format(pub.date, "MM/yyyy") }}</span>
                  <span class="q-px-sm" v-if="pub.where">{{ pub.where.title }}</span>
                  <span class="q-px-sm">
                    <a :href="pub.url" target="_blank">{{ pub.doi || pub.isbn }}</a>
                  </span>
                  <q-btn rounded
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
                    <q-avatar color="blue-grey-6"
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
    </fs-card>
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
import { makeFindMixin } from "feathers-vuex";

import format from "date-fns/format";

import FsCard from "components/FsCard";

export default {
  name: "FsPublications",
  components: {
    FsCard
  },
  mixins: [
    makeFindMixin({ service: "publications" })
  ],
  props: {},
  data() {
    return {
      date: {
        format
      },
      isDialogQuoteVisible: false,
      quote: "",
      currentPublication: null
    };
  },
  computed: {
    publicationsParams() {
      return {
        query: {}
      };
    }
  },
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
