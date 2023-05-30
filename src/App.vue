<template>
  <div id="app" class="bg-gray-100">
    <header class="text-tahiti">
  <nav class="mx-auto flex max-w-7xl h-10 items-center justify-between p-6 lg:px-8 text-white"  aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only"></span>
        <img class="h-8 w-auto rounded-full" src="https://avatars.githubusercontent.com/u/38014924?v=4" alt=""> 
      </a>
    </div>

    <div class="hidden lg:flex lg:gap-x-12 justify-center ">
      <a href="#" class="text-sm font-semibold leading-6 text-gray-900 font-sans"><router-link to="/artist">Artist</router-link></a>
      <a href="#" class="text-sm font-semibold leading-6 text-gray-900 font-sans"> <router-link to="/playlist">Playlist</router-link></a>
      <a href="#" class="text-sm font-semibold leading-6 text-gray-900 font-sans"><router-link to="/music">Music</router-link></a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <!-- <div class="lg:hidden" role="dialog" aria-modal="true">

    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div> -->
</header>


    <HomePage />
    <router-view />
  </div>
</template>

<script>
import HomePage from './view/HomePage.vue';

export default {
  name: "App",
  components: {
    HomePage,
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
