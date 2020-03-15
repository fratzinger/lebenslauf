<template>
  <q-card>
    <q-card-section class="text-h6 bg-primary text-white row">
      <div class="col text-h5">
        <q-avatar color="primary" text-color="white" :icon="icon" /> {{ title }}
      </div>
      <slot class="col-auto" name="header-right"></slot>
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
  }
};
</script>

<style lang="scss" scoped>
</style>
