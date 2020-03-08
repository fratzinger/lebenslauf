<template>
  <q-timeline-entry :icon="activity.icon">
    <template v-slot:title>{{ activity.title }}</template>
    <template v-slot:subtitle>
      {{ date.format(activity.startAt, "MM/yyyy") }} - {{ date.format(activity.endAt, "MM/yyyy") }}
    </template>
    <div class="text-bold">{{ activity.establishment }}</div>
    <div v-if="activity.descriptions && Array.isArray(activity.descriptions) && activity.descriptions.length > 0" class="description-border-left">
      <div v-if="activity.descriptions.length == 1">{{ activity.descriptions[0] }}</div>
      <ul v-else class="q-pl-md">
        <li v-for="description in activity.descriptions" :key="description">{{ description }}</li>
      </ul>
    </div>
    <div>
      <span class="text-bold q-mr-sm">Skills:</span>
      <q-chip v-for="skill in activity.skills" :key="skill">{{ skill }}</q-chip>
    </div>
  </q-timeline-entry>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import format from "date-fns/format";

export default {
  name: "FsActivity",
  components: {},
  props: {
    activity: {
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
