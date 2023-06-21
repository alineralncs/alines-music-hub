<template>
  <div>

    <div class="bg-gray-100">
      <nav class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        ">
        <div class="flex items-center justify-between">
          <router-link to="/">
            <img src="../assets/musiclist.svg" alt="Logo MusicList">
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
            md:justify-center
        
          ">
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <button
              class="text-white text-md font-semibold bg-roxo-botao py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
              <router-link to="/foryou">For you</router-link> </button>

          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/artist">Artist</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/playlist">Playlist</router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/music">Music</router-link>
          </li>

        </ul>
      </nav>
    </div>
  </div>
  <!-- <div class="hidden lg:flex lg:gap-x-12 justify-center">
     
      
      
    </div> -->
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      showMenu: false,
      // mobileMenuId: 'mobile-menu',
    };
  },

}
</script>
