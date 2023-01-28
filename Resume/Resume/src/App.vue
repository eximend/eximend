<script>
import { RouterLink, RouterView } from "vue-router";
import About from "./components/About.vue";
import WorkPrograms from "./components/WorkPrograms.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contacts.vue";

export default {
  data() {
    return {
      headerNav: ["Home", "About", "Skils", "Portfolio", "Contacts"],
    };
  },
  components: { About, WorkPrograms, Portfolio, Contact }
};
</script>

<template>
  <RouterView></RouterView>
</template>

<style></style>
