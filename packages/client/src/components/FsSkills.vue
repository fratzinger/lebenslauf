<template>
  <fs-card title="Fähigkeiten" icon="fas fa-laptop-code">
    <template v-slot:header-right>
      <div>
        <q-toggle v-model="isGrouped"
                  color="green"
                  label="gruppieren"
                  left-label/>
        <q-btn-dropdown color="primary">
          <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-icon left name="fas fa-sort-amount-down" style="font-size: 0.8rem;" /> {{ pickedOrder.title }}
          </div>
          </template>
          <q-list>
            <q-item v-for="option in sortOrderOptions"
                    :key="option.title"
                    clickable
                    v-close-popup
                    @click="pickedOrder = option">
              <q-item-section>
                <q-item-label>{{ option.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </template>
    <div class="row">
      <div v-for="(skills, cat) in skillsByCategory"
           :key="cat"
           :class="{'col-lg-6': skillsByCategory.length > 1}"
           class="col-12 col-lg-6 flex">
        <q-card flat bordered class="full-width">
          <q-card-section class="q-p-sm">
            <div v-if="isGrouped" class="text-h6 q-mb-md">
              {{ cat }} <q-badge>{{ skills.length }}</q-badge>
            </div>
            <transition-group name="flip-list" tag="div" class="row q-col-gutter-md">
              <div v-for="skill in skills" :key="skill.id" class="col-xs-6 col-sm-4 col-md-3 col-lg-3 column justify-between">
                <div>
                  <span>{{ skill.name }}</span>
                  <span class="text-grey-6 text-caption"> - {{ skill.since }}</span>
                </div>
                <fs-linear-progress :value="skill.linearValue" :color="skill.color || 'primary'" size="7px"></fs-linear-progress>
              </div>
            </transition-group>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </fs-card>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import { makeFindMixin } from "feathers-vuex";

import FsCard from "components/FsCard";
import FsLinearProgress from "components/FsLinearProgress";

import {
  orderBy as _orderBy,
  uniqBy as _uniqBy
} from "lodash-es";

export default {
  name: "FsSkills",
  components: {
    FsCard,
    FsLinearProgress
  },
  mixins: [
    makeFindMixin({ service: "skills" })
  ],
  props: {},
  data() {
    return {
      pickedOrder: null,
      sortOrderOptions: [
        {
          title: "Dauer",
          value: "learnedAt"
        },
        {
          title: "Höhe",
          value: "value"
        }
      ],
      isGrouped: true
    };
  },
  computed: {
    skillsParams() {
      return {
        query: {},
        paginate: false
      };
    },
    skillsCategories() {
      const result = _uniqBy(this.skills, x => x.type).map(x => x.type);
      return result;
    },
    ascDesc() {
      return (this.pickedOrder.value === "value") ? "desc" : "asc";
    },
    orderedSkills() {
      return _orderBy(this.skills, [this.pickedOrder.value], [this.ascDesc]);
    },
    skillsByCategory() {
      if (!this.isGrouped) {
        return {
          all: this.orderedSkills
        };
      }
      const result = {};
      const misc = [];
      for (let i = 0; i < this.skillsCategories.length; i++) {
        const cat = this.skillsCategories[i];
        const skills = this.orderedSkills.filter(x => x.type === cat);
        if (skills.length === 1) {
          misc.push(...skills);
        } else {
          result[cat] = skills;
        }
      }

      if (misc.length > 0) {
        result["Misc."] = misc;
      }

      return result;
    }
  },
  watch: {},
  created() {
    this.pickedOrder = this.sortOrderOptions[0];
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
