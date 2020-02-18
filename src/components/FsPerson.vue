<template>
    <q-card flat bordered class="persona">
      <q-card-section horizontal>
        <div>
          <div class="bg-primary q-pa-md text-h6 text-white">
            <q-icon name="fas fa-user"></q-icon> Frederik Schmatz
          </div>

          <q-list bordered separator class="q-pa-md">
            <q-item v-for="entry in characteristics" :key="entry.title" clickable v-ripple>
              <q-item-section class="text-bold">{{ entry.title }}</q-item-section>
              <q-item-section>{{ entry.value }}</q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "Boilerplate",
  components: {},
  props: {},
  data () {
    return {
      characteristics: [
        {
          title: "Geburtstag",
          value: "15.12.1992"
        },
        {
          title: "Geburtsort",
          value: "München"
        },
        {
          title: "Staatsangehörigkeit",
          value: "deutsch"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
};
</script>

<style lang="scss">
.persona {
  .q-card__section--vert {
    padding: 0px;
  }
}
</style>
