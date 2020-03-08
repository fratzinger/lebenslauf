<template>
  <q-timeline-entry :icon="job.icon">
    <template v-slot:title>{{ job.title }} - {{ job.institution }}</template>
    <template v-slot:subtitle>
      <span v-if="job.endAt">{{ date.format(job.startAt, "MM/yyyy") }} - {{ date.format(job.endAt, "MM/yyyy") }}</span>
      <span v-else>seit {{ date.format(job.startAt, "MM/yyyy") }}</span>
    </template>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </q-timeline-entry>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import format from "date-fns/format";

export default {
  name: "FsJob",
  components: {},
  props: {
    job: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      date: {
        format
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
