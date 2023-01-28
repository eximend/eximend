<script>
import About from "./About.vue";
import WorkPrograms from "./WorkPrograms.vue";
import Portfolio from "./Portfolio.vue";
import Contact from "./Contacts.vue";


export default {
  data() {
    return {
      headerNav: [{name:'Home',link:'/'}, {name:"About",link:'/about'},{name:"Skils",link:'/workprogram'},{name:"Portfolio",link:'/portfolio'},{name:"Contacts",link:'/contacts'}]
    };
  },
  components: { About, WorkPrograms, Portfolio, Contact }
};
</script>

<template>
  <header class="header">
    <nav >
      <ul class="header__ul">
        <li class="ul__li" v-for="li in headerNav">
          <router-link class="linker" :to="li.link">{{ li.name }}</router-link>
        </li>
      </ul>
      <hr />
    </nav>
    <h1>Viktor Chebotarev</h1>
    <h4>
      Python | Js developer <br />
      23 years old, Astana
    </h4>
    <p class="header__Eng">Ru | Eng | Cn</p>
    <img class="header__Photo" src="../images/ResumePhoto.jpg" alt="da" />
  </header>
  <main class="main">
    <About />
    <WorkPrograms />
    <Portfolio />
    <Contact />
  </main>
</template>

<style></style>
