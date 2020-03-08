<template>
  <q-card>
    <q-card-section class="row q-col-gutter-md">
      <div v-for="skill in skills" :key="skill.id" class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
        <div>{{ skill.name }}</div>
        <q-linear-progress :value="skill.linearValue"></q-linear-progress>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import { makeFindMixin } from "feathers-vuex";

export default {
  name: "FsSkills",
  components: {},
  mixins: [makeFindMixin({ service: "skills" })],
  props: {},
  data() {
    return {};
  },
  computed: {
    skillsParams() {
      return {
        query: {},
        paginate: false
      };
    }
  },
  watch: {
    skills() {
      console.log(this.skills);
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
© 2020 GitHub, Inc.
