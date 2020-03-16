<template>
  <div id="cv">
    <fs-card v-if="sortedJobs.length > 0" title="Beruflicher Werdegang" icon="fas fa-briefcase">
      <template v-slot:header-right>
        <q-btn v-if="sortedJobs.length > 1"
              v-slot:header-right
              color="white"
              text-color="black"
              :icon="`fas ${(jobSortOrder > 0) ? 'fa-sort-numeric-down' : 'fa-sort-numeric-down-alt'}`"
              :label="jobSortOrder > 0 ? 'aufsteigend' : 'absteigend'"
              @click="jobSortOrder *= -1"></q-btn>
      </template>
      <q-timeline v-if="sortedJobs.length > 0" color="primary" :layout="timelineLayout">
        <fs-job v-for="job in sortedJobs" :key="job.startAt.toString()" :job="job"></fs-job>
      </q-timeline>
    </fs-card>
    <fs-card v-if="sortedStudiums.length > 0" title="Ausbildung" icon="fas fa-graduation-cap">
      <template v-slot:header-right>
        <q-btn v-if="sortedStudiums.length > 1"
               color="white"
               text-color="black"
               :icon="`fas ${(studySortOrder > 0) ? 'fa-sort-numeric-down' : 'fa-sort-numeric-down-alt'}`"
               :label="studySortOrder > 0 ? 'aufsteigend' : 'absteigend'"
               @click="studySortOrder *= -1"></q-btn>
      </template>
      <q-timeline color="primary" :layout="timelineLayout" id="studiesTimeline">
          <transition-group name="flip-list" tag="div">
            <fs-study v-for="study in sortedStudiums" :key="study.title" :study="study"></fs-study>
          </transition-group>
        </q-timeline>
    </fs-card>
    <fs-card v-if="sortedActivities.length > 0" title="Außeruniversitäre Aktivitäten" icon="fas fa-project-diagram">
      <template v-slot:header-right>
        <q-btn v-if="sortedActivities.length > 1"
               color="white"
               text-color="black"
               :icon="`fas ${(activitySortOrder > 0) ? 'fa-sort-numeric-down' : 'fa-sort-numeric-down-alt'}`"
               :label="activitySortOrder > 0 ? 'aufsteigend' : 'absteigend'"
               @click="activitySortOrder *= -1"></q-btn>
      </template>
      <q-timeline color="primary" :layout="timelineLayout">
          <transition-group name="flip-list" tag="div">
            <fs-activity v-for="activity in sortedActivities" :activity="activity" :key="activity.title"></fs-activity>
          </transition-group>
        </q-timeline>
    </fs-card>
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
import FsCard from "@/components/FsCard";

export default {
  name: "FsTimeline",
  components: {
    FsActivity,
    FsStudy,
    FsJob,
    FsCard
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
      return _orderBy(this.jobs, "startAt", order);
    },
    sortedStudiums() {
      const order = (this.studySortOrder > 0) ? "asc" : "desc";
      return _orderBy(this.studies, "endAt", order);
    },
    sortedActivities() {
      const order = (this.activitySortOrder > 0) ? "asc" : "desc";
      return _orderBy(this.activities, "endAt", order);
    },
    timelineLayout() {
      return this.$q.screen.lt.sm ? "dense" : "comfortable";
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

@media (max-width: $breakpoint-md-max) and (min-width: $breakpoint-sm-max) {
  .q-timeline__subtitle {
    text-align: center !important;
  }
}
</style>
