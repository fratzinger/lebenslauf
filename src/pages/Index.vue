<template>
  <q-page id="content-index" class="flex flex-center">
    <div class="row">
      <fs-person class="col-12"></fs-person>
      <fs-timeline class="col-12"></fs-timeline>
      <fs-skills class="col-12"></fs-skills>
      <fs-publications class="col-12"></fs-publications>
    </div>
  </q-page>
</template>

<script>
import FsPerson from "@/components/FsPerson";
import FsTimeline from "@/components/FsTimeline";
import FsSkills from "@/components/FsSkills";
import FsPublications from "@/components/FsPublications";

export default {
  name: "PageIndex",
  components: {
    FsPerson,
    FsTimeline,
    FsSkills,
    FsPublications
  }
};
</script>

<style lang="scss" scoped>
#content-index {
  padding: 20px;
}
</style>
