<template>
  <transition :enter-class="enter + '-enter'"
              :enter-to-class="enter + '-enter-to'"
              :leave-class="leave + '-leave'"
              :leave-to-class="leave + '-leave-to'"
              :enter-active-class="enterActiveClass"
              :leave-active-class="leaveActiveClass"
              @before-leave="beforeLeave"
              @after-enter="afterEnter">
    <slot></slot>
  </transition>
</template>

<script>
const transitions = {
  slideToRight: "slide-to-right",
  slideToLeft: "slide-to-left",
  slideToTop: "slide-to-top",
  slideToBottom: "slide-to-bottom",
  zoomIn: "zoom-in",
  zoomOut: "zoom-out"
};

export {
  transitions
};

export default {
  name: "FsTransition",
  components: {},
  props: {
    name: {
      type: String,
      default: "slide-to-right"
    },
    nameEnter: {
      type: String,
      default: null
    },
    nameLeave: {
      type: String,
      default: null
    },
    isAbsolute: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      transitionName: transitions.slideToRight,
      transitions
    };
  },
  computed: {
    enter() {
      return this.nameEnter || this.name;
    },
    leave() {
      return this.nameLeave || this.name;
    },
    leaveActiveClass() {
      return `transition-leave-active${this.isAbsolute ? " is-absolute" : ""}`;
    },
    enterActiveClass() {
      return `transition-enter-active${this.isAbsolute ? " is-absolute" : ""}`;
    }
  },
  methods: {
    beforeLeave() {
      this.$emit("before-leave");
    },
    afterEnter() {
      this.$emit("after-enter");
    }
  }
};
</script>

<style lang="scss" scoped>
.transition-enter-active,
.transition-leave-active {
  transition: 0.5s ease;
  overflow: hidden;
}

.is-absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

// slide

.slide-to-right-enter,
.slide-to-left-leave-to {
  opacity: 0;
  transform: translate(-2em, 0);
}

.slide-to-left-enter,
.slide-to-right-leave-to {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-to-top-enter,
.slide-to-bottom-leave-to {
  opacity: 0;
  transform: translate(0, 2em);
}

.slide-to-bottom-enter,
.slide-to-top-leave-to {
  opacity: 0;
  transform: translate(0, -2em);
}

.zoom-in-enter,
.zoom-out-leave-to {
  opacity: 0;
  transform: scale(0.7, 0.7);
  //position: absolute;
  overflow: hidden;
  height: 100vh;
}

.zoom-out-enter,
.zoom-in-leave-to {
  opacity: 0;
  transform: scale(1.3, 1.3);
  //position: absolute;
  overflow: hidden;
  height: 100vh;
}
</style>
