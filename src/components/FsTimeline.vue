<template>
  <div id="cv">
    <q-card>
      <q-card-section>
        <div class="text-h5">
          <q-avatar color="primary" text-color="white" icon="fas fa-briefcase" /> Beruflicher Werdegang
        </div>
      </q-card-section>
      <q-card-section>
        <q-timeline color="primary" layout="comfortable">
          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            icon="fas fa-briefcase"
          >
            <template v-slot:title>Wiss. Mitarbeiter - Fraunhofer IGP Rostock</template>
            <template v-slot:subtitle>seit {{ date.format(new Date(2017, 12), "MM/yyyy") }}</template>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section class="flex justify-between">
        <div class="text-h5">
          <q-avatar color="primary" text-color="white" icon="fas fa-graduation-cap" /> Ausbildung
        </div>
        <q-btn color="primary" :label="studium.sortOrder > 0 ? 'aufsteigend' : 'absteigend'" @click="studium.sortOrder *= -1"></q-btn>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-timeline color="primary" layout="comfortable">
          <transition-group name="flip-list" tag="div">
          <template v-for="studium in sortedStudiums">
            <q-timeline-entry :key="studium.title" :icon="studium.icon">
              <template v-slot:title>{{ studium.graduation }} {{ studium.title }}</template>
              <template
                v-slot:subtitle
              >{{ date.format(studium.start, "MM/yyyy") }} - {{ date.format(studium.end, "MM/yyyy") }}</template>
              <div>
                <span class="text-bold">
                  {{ studium.establishment }}
                </span>
                <q-chip color="primary" text-color="white" class="chip-grade" icon="fas fa-star"> {{ studium.grade }}
                </q-chip>
              </div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </q-timeline-entry>
          </template>
          </transition-group>
        </q-timeline>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section class="flex justify-between">
        <div class="text-h5">
          <q-avatar color="primary" text-color="white" icon="fas fa-project-diagram" /> Außeruniversitäre Aktivitäten
        </div>
        <q-btn color="primary" :label="activity.sortOrder > 0 ? 'aufsteigend' : 'absteigend'" @click="activity.sortOrder *= -1"></q-btn>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-timeline color="primary" layout="comfortable">
          <transition-group name="flip-list" tag="div">
          <template v-for="activity in sortedActivities">
            <q-timeline-entry :key="activity.title" :icon="activity.icon">
              <template v-slot:title>{{ activity.title }}</template>
              <template v-slot:subtitle>
                {{ date.format(activity.start, "MM/yyyy") }} - {{ date.format(activity.end, "MM/yyyy") }}
              </template>
              <div class="text-bold">{{ activity.establishment }}</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </q-timeline-entry>
          </template>
          </transition-group>
        </q-timeline>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section>
        <div class="text-h5">
          <q-avatar color="primary" text-color="white" icon="fas fa-school" /> Schule
        </div>
      </q-card-section>
      <q-card-section>
        <q-timeline color="primary" layout="comfortable">
          <q-timeline-entry title="Grundschule und Gymnasium" subtitle="1999 - 2011">
            <div>Katholisches Schulzentrum Bernhardinum in Fürstenwalde (Brandenburg)</div>
            <div>
              <b>Abschluss:</b> Allgemeine Hochschulreife, Note: 1,7
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import { orderBy as _orderBy } from "lodash-es";

import format from "date-fns/format";

export default {
  name: "FsTimeline",
  components: {},
  props: {},
  data () {
    return {
      date: {
        format
      },
      studium: {
        sortOrder: -1,
        entries: [
          {
            graduation: "B.Sc.",
            grade: "ohne Abschluss",
            title: "eBusiness",
            establishment: "BTU Cottbus",
            icon: "fas fa-wifi",
            start: new Date(2011, 10),
            end: new Date(2012, 9)
          },
          {
            graduation: "B.Sc.",
            grade: "2.1",
            title: "Wirt.-Ing., Vertiefung Maschinenbau",
            establishment: "Universität Rostock",
            icon: "fas fa-cog",
            start: new Date(2012, 10),
            end: new Date(2015, 9)
          },
          {
            graduation: "M.Sc.",
            grade: "1.7",
            title: "Wirt.-Ing., Vertiefung Produktentwicklung",
            establishment: "Universität Rostock",
            icon: "fas fa-cogs",
            start: new Date(2015, 10),
            end: new Date(2017, 10)
          }
        ]
      },
      activity: {
        sortOrder: -1,
        entries: [
          {
            title: "Hanseatic Efficiency",
            establishment: "Universität Rostock",
            icon: "fas fa-car",
            start: new Date(2013, 10),
            end: new Date(2014, 9),
            description: ""
          },
          {
            title: "Praktikum",
            establishment: "Fraunhofer IGP Rostock",
            icon: "fas fa-laptop-code",
            start: new Date(2014, 8),
            end: new Date(2014, 10),
            description: ""
          },
          {
            title: "Studentische Hilfskraft",
            establishment: "Fraunhofer IGP Rostock",
            icon: "fas fa-laptop-code",
            start: new Date(2014, 10),
            end: new Date(2017, 11),
            description: ""
          },
          {
            title: "IT-Vorstand",
            establishment: "VWI Hochschulgruppe Rostock e.V.",
            icon: "fab fa-wordpress",
            start: new Date(2016, 4),
            end: new Date(2017, 5),
            description: ""
          }
        ]
      }
    };
  },
  computed: {
    sortedStudiums () {
      const { sortOrder, entries } = this.studium;
      const order = (sortOrder > 0) ? "asc" : "desc";
      return _orderBy(entries, "end", order);
    },
    sortedActivities () {
      const { sortOrder, entries } = this.activity;
      const order = (sortOrder > 0) ? "asc" : "desc";
      return _orderBy(entries, "end", order);
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
};
</script>

<style lang="scss">
#cv {
  .q-card {
    margin-bottom: 20px;
  }

  .q-timeline--comfortable .q-timeline__subtitle {
    width: 17%;
  }

  .chip-grade {
    .q-chip__icon {
      font-size: 0.8em;
    }
  }
}

.flip-list-move {
  transition: transform 1s;
}
</style>
