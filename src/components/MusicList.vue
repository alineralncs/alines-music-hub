<template>
    <div id="Music" class="">
    
<main v-if="musics.length > 0" class=" grid place-items-center min-h-screen  p-5">
  <div>

    <!-- <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">Made for you</h1> -->
    <div v-show="musics.length > 0" class="flex justify-center w-full items-center mt-20 mb-10 ">
            <!-- Search input field -->
            <input v-model="searchQuery" type="text" placeholder="Buscar músicas..."
                class="px-4 py-2 rounded-full border border-roxo-escuro w-full  ml-40 bg-roxo-fundo focus:outline-none focus:ring-2 focus:ring-blue-400" />

            <!-- Search button -->
            <button @click="searchMusic"
                class="ml-2 bg-roxo-escuro text-white px-4 py-2 rounded-full mr-40 hover:bg-roxo-hover">Search</button>
        </div>
    <section class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <!-- CARD 1 -->
      <div class="bg-white shadow-lg rounded p-3" v-for="music in musics" :key="music.id">
            <div class="group relative"  >
                <div class="flex justify-center items-center">
                <img class="w-full md:w-72 block rounded" :src="music.artist" alt="" />
            </div>
            <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                </button>

                <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                </button>

                <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                </button>
            </div>
        </div>
        <div class="p-5">
          <h3 class="">{{getTextBeforeDash(music.name)}}</h3>
          <!-- <p class="text-gray-400">Tycho</p> -->
        </div>
      </div>
      <!-- END OF CARD 1 -->

   
    </section>
    <button v-if="totalPages && musics.length > 0" @click="fetchNextPage"
            class="text-white text-md font-semibold bg-roxo-botao py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
            Próxima página
        </button>
  </div>
</main>
<div v-else class="flex justify-center items-center mt-40 mb-10">
                <NotfoundComponent/>
                </div>
    </div>
</template>
  
<script>
import NotfoundComponent from '../components/notfound/NotfoundComponent.vue'
import axios from 'axios';
export default {
    name: 'MusicList',
    components: {
        NotfoundComponent
    },
    data() {
        return {
            musics: [],
            currentPage: 1,
            totalPages: 1,
            searchQuery: '',
        };
    },
    mounted() {
        this.fetchMusics();
    },
    methods: {
        fetchMusics() {
            axios
                .get('http://127.0.0.1:8000/api/music/', {
                    params: {
                        search: this.searchQuery,
                    }
                })
                .then(response => {
                    this.musics = response.data.results;
                    console.log('this muisc', this.musics);
                    console.log('this', this.musics.artist);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        searchMusic() {
            this.currentPage = 1;
            this.fetchMusics();
        },
        fetchNextPage() {
            const nextPage = this.currentPage + 1;
            axios
                .get(`http://127.0.0.1:8000/api/music/?page=${nextPage}`)
                .then(response => {
                    //const newArtists = response.data.results;
                    this.musics = response.data.results;
                    // this.artists = [...this.artists, ...newArtists];
                    // this.artists.push(...newArtists);
                    this.currentPage = nextPage;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deletemusic(musicId) {
            axios
                .delete(`http://127.0.0.1:8000/api/music/${musicId}/`)
                .then(() => {
                    console.log('music deleted successfully');
                    this.fetchmusics(); // Refresh the music list after deletion
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getTextBeforeDash(name) {
      return name.split('-')[0].trim();
    },
    },
};
</script>
  