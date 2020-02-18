<template>
  <q-page id="content-index" class="flex flex-center">
    <fs-person></fs-person>
    <fs-timeline></fs-timeline>
    <fs-skills></fs-skills>
  </q-page>
</template>

<script>
import FsPerson from "@/components/FsPerson";
import FsTimeline from "@/components/FsTimeline";
import FsSkills from "@/components/FsSkills";

export default {
  name: "PageIndex",
  components: {
    FsPerson,
    FsTimeline,
    FsSkills
  }
};
</script>

<style lang="scss" scoped>
#content-index {
  padding: 20px;
}
</style>
