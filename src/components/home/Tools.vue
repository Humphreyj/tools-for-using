<template>
  <div class="toolbox" v-for="tool in tools" :key="tool.id">
    <div class="tool">
      <img v-bind:src="tool.img" alt="`${tool.name} logo`" class="logo" />
      <p class="name">{{ tool.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["tools"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/mixins.scss";
.toolbox {
  @include flexbox(row, space-evenly, center);
  width: 75%;
  margin: 2rem auto;
  border-radius: 0.6rem;
  box-shadow: 0.1rem 0.1rem 0.2rem #222;
  .tool {
    border: 0.1rem solid black;
    min-height: 5rem;
    padding: 0.5rem;
    font-size: 1rem;
  }
}
</style>
