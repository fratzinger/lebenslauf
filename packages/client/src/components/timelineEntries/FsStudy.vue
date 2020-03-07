<template>
  <q-timeline-entry :icon="study.icon">
    <template v-slot:title>{{ study.graduation }} {{ study.title }}</template>
    <template
      v-slot:subtitle>{{ date.format(study.start, "MM/yyyy") }} - {{ date.format(study.end, "MM/yyyy") }}</template>
    <div>
      <q-chip color="primary"
              text-color="white"
              class="chip-grade q-mr-md"
              size="md"
              icon="fas fa-star"><span class="q-ml-sm">{{ study.grade }}</span>
      </q-chip>
      <span class="text-bold">{{ study.establishment }}</span>
    </div>
    <div>{{ study.description }}</div>
    <div v-for="thesis in study.theses" :key="thesis.title">
      <div><span class="text-bold">{{ thesis.type }} :</span> {{ thesis.title }}</div>
      <div v-if="thesis.description">{{ thesis.description }}</div>
    </div>
  </q-timeline-entry>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import format from "date-fns/format";

export default {
  name: "FsStudy",
  components: {},
  props: {
    study: {
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
