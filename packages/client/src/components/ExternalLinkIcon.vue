<template>
  <q-icon name="fas fa-external-link-alt"
          :class="[`q-ml-${ml}`, `q-mr-${mr}`]"
          class="external-link-icon"></q-icon>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Boilerplate",
  components: {},
  props: {
    ml: {
      type: String,
      default: "sm"
    },
    mr: {
      type: String,
      default: "none"
    }
  }
};
</script>

<style lang="scss" scoped>
.external-link-icon {
  font-size: 0.8em;
  opacity: 0.8;
  margin-top: -0.4em;
}
</style>
