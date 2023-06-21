<template>
  <div id="app" class="bg-roxo-fundo">
    <header class="">

<NavbarComponent />
</header>
<main> 
  <router-view/>
 
  
</main>

  </div>
  
 
</template>

<script>
//import HomePage from './view/HomePage.vue';
import NavbarComponent from './components/NavbarComponent.vue';
//import PlaylistRecomendation from './components/PlaylistRecomendation.vue';

export default {
  name: "App",
  components: {
    //HomePage,
    NavbarComponent,
  //  PlaylistRecomendation,

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
