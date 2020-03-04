<template>
  <div id="cv">
    <q-card>
      <q-card-section class="flex justify-between">
        <div class="text-h5">
          <q-avatar color="primary" text-color="white" icon="fas fa-briefcase" /> Beruflicher Werdegang
        </div>
        <q-btn v-if="jobSortOrder > 0"
               color="primary"
               :label="jobSortOrder > 0 ? 'aufsteigend' : 'absteigend'"
               @click="jobSortOrder *= -1"></q-btn>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-timeline color="primary" layout="comfortable">
          <fs-job v-for="job in sortedJobs" :key="job.start.toString()" :job="job"></fs-job>
        </q-timeline>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section class="flex justify-between">
        <div class="text-h5">
          <q-avatar color="primary" text-color="white" icon="fas fa-graduation-cap" /> Ausbildung
        </div>
        <q-btn v-if="studySortOrder > 0"
               color="primary"
               :label="studySortOrder > 0 ? 'aufsteigend' : 'absteigend'"
               @click="studySortOrder *= -1"></q-btn>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-timeline color="primary" layout="comfortable" id="studiesTimeline">
          <transition-group name="flip-list" tag="div">
            <fs-study v-for="study in sortedStudiums" :key="study.title" :study="study"></fs-study>
          </transition-group>
        </q-timeline>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section class="flex justify-between">
        <div class="text-h5">
          <q-avatar color="primary" text-color="white" icon="fas fa-project-diagram" /> Außeruniversitäre Aktivitäten
        </div>
        <q-btn v-if="activitySortOrder > 0"
               color="primary"
               :label="activitySortOrder > 0 ? 'aufsteigend' : 'absteigend'"
               @click="activitySortOrder *= -1"></q-btn>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-timeline color="primary" layout="comfortable">
          <transition-group name="flip-list" tag="div">
            <fs-activity v-for="activity in sortedActivities" :activity="activity" :key="activity.title"></fs-activity>
          </transition-group>
        </q-timeline>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import { orderBy as _orderBy } from "lodash-es";

import format from "date-fns/format";

import { makeFindMixin } from "feathers-vuex";

import FsActivity from "@/components/timelineEntries/FsActivity";
import FsStudy from "@/components/timelineEntries/FsStudy";
import FsJob from "@/components/timelineEntries/FsJob";

export default {
  name: "FsTimeline",
  components: {
    FsActivity,
    FsStudy,
    FsJob
  },
  props: {},
  mixins: [
    makeFindMixin({ service: "activities", name: "activities" }),
    makeFindMixin({ service: "studies", name: "studies" }),
    makeFindMixin({ service: "jobs", name: "jobs" })
  ],
  data() {
    return {
      date: {
        format
      },
      studySortOrder: -1,
      activitySortOrder: -1,
      jobSortOrder: -1
    };
  },
  computed: {
    activitiesParams() {
      return {
        query: {}
      };
    },
    studiesParams() {
      return {
        query: {}
      };
    },
    jobsParams() {
      return {
        query: {}
      };
    },
    sortedJobs() {
      const order = (this.jobSortOrder > 0) ? "asc" : "desc";
      return _orderBy(this.jobs, "start", order);
    },
    sortedStudiums() {
      const order = (this.studySortOrder > 0) ? "asc" : "desc";
      return _orderBy(this.studies, "end", order);
    },
    sortedActivities() {
      const order = (this.activitySortOrder > 0) ? "asc" : "desc";
      return _orderBy(this.activities, "end", order);
    }
  },
  watch: {},
  created() {},
  mounted() {},
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

  #studiesTimeline {
    .q-timeline__title {
      margin-bottom: 0;
    }
  }

  .description-border-left {
    border-left: 5px solid #ccc;
    padding: 0 0 0 15px;
    margin: 5px 10px 10px;
  }
}

.flip-list-move {
  transition: transform 1s;
}

@media (max-width: $breakpoint-md-max) {
  .q-timeline__subtitle {
    text-align: center !important;
  }
}
</style>
