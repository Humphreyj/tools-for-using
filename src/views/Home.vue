<template>
  <div class="home">
    <Header />
    <Tools />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/home/Header.vue";
import Tools from "@/components/home/Tools.vue";

export default {
  name: "Home",
  components: {
    Header,
    Tools,
  },
};
</script>
