<template>
  <q-card>
    <q-card-section class="text-h6 bg-primary text-white">
      <div class="text-h5">
        <q-avatar color="primary" text-color="white" :icon="icon" /> {{ title }}
      </div>
      <slot name="header-right"></slot>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Boilerplate",
  components: {},
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
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
