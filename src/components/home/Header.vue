<template>
  <header class="header">
    <h4 class="logo">Tools y'all</h4>
    <div class="nav">
      <router-link class="link-home" to="/">Home</router-link> |
      <router-link class="link" to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/mixins.scss";
.header {
  padding: 0.5rem;
  @include flexbox(row, space-between, center);
  border-bottom: 2px solid black;
  .logo {
    font-size: 1rem;
  }
  #nav {
    .link {
      font-size: 1rem;
    }
  }
}
</style>