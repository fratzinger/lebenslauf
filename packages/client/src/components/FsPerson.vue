<template>
    <q-card flat bordered class="persona">
      <q-card-section horizontal>
        <div class="col">
          <div class="bg-primary q-pa-md text-h6 text-white">
            <q-icon name="fas fa-user" class="q-mr-2"></q-icon>
            <span>{{ name }}</span>
          </div>
          <q-list bordered separator class="q-pa-md">
            <q-item v-for="entry in otherCharacteristics"
                    :key="entry.name"
                    clickable
                    v-ripple>
              <q-item-section class="text-bold">{{ entry.name }}</q-item-section>
              <q-item-section>{{ entry.value }}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-img class="col-5"
               src="https://cdn.quasar.dev/img/parallax2.jpg"/>
      </q-card-section>
    </q-card>
</template>

<script>
import { makeFindMixin } from "feathers-vuex";
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "FsPerson",
  components: {},
  props: {},
  mixins: [makeFindMixin({ service: "characteristics" })],
  data() {
    return {
    };
  },
  computed: {
    characteristicsParams() {
      return {
        query: {}
      };
    },
    name() {
      const name = this.characteristics.find(x => x.name === "Name");
      if (name) { return name.value; } else { return ""; };
    },
    otherCharacteristics() {
      return this.characteristics.filter(x => x.name !== "Name");
    }
  },
  watch: {},
  created() {},
  mounted() {},
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
