<template>
  <q-page id="content-index" class="flex flex-center">
    <fs-scroll-to-top />
    <div class="row">
      <div class="col-3 gt-sm">
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-for="anchor in anchors"
                  :key="anchor.title"
                  clickable
                  v-ripple
                  @click="scrollTo(anchor.goTo)"
                  active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon :name="anchor.icon" />
            </q-item-section>
            <q-item-section>{{ anchor.title }}</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-12 col-md-9">
        <fs-person ref="person" class="col-12 q-mb-2"></fs-person>
        <fs-timeline ref="timeline" class="col-12 q-mb-2"></fs-timeline>
        <fs-skills ref="skills" class="col-12 q-mb-2"></fs-skills>
        <fs-publications ref="publications" class="col-12 q-mb-2"></fs-publications>
      </div>
    </div>
  </q-page>
</template>

<script>
import FsScrollToTop from "@/components/FsScrollToTop";

import FsPerson from "@/components/FsPerson";
import FsTimeline from "@/components/FsTimeline";
import FsSkills from "@/components/FsSkills";
import FsPublications from "@/components/FsPublications";

export default {
  name: "PageIndex",
  components: {
    FsScrollToTop,
    FsPerson,
    FsTimeline,
    FsSkills,
    FsPublications
  },
  data() {
    return {};
  },
  computed: {
    anchors() {
      return [
        {
          icon: "fas fa-user",
          title: "Person",
          goTo: "person"
        },
        {
          icon: "fas fa-briefcase",
          title: "Werdegang",
          goTo: "timeline"
        },
        {
          icon: "fas fa-laptop-code",
          title: "Fähigkeiten",
          goTo: "skills"
        },
        {
          icon: "far fa-file-alt",
          title: "Veröffentlichungen",
          goTo: "publications"
        }
      ];
    }
  },
  methods: {
    scrollTo(refName) {
      let ref = this.$refs[refName];
      ref = ref.$el || ref;
      console.log(ref);
      const top = ref.offsetTop + 40;
      window.scroll({
        top: top - 55,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#content-index {
  padding: 20px;
}
</style>
