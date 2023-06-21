<template>
    <div id="Music">
        <div class="flex justify-center items-center mt-40 mb-10">
            <!-- Search input field -->
            <input v-model="searchQuery" type="text" placeholder="Search artists..."
                class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />

            <!-- Search button -->
            <button @click="searchMusic"
                class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Search</button>
        </div>
        <!-- <button
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            <router-link :to="'/createArtist/'">Criar um artista</router-link>
        </button>
 -->
        <div class="flex justify-center items-center mt-40 mb-10">
            <div v-if="musics.length > 0" class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                <div  class=" bg-roxo-cards p-8 rounded-2xl shadow-md justify-items-center " v-for="music in musics" :key="music.id">
                    <div class="justify-center items-center">

                        <img class="w-40 h-40 rounded-md mb-4" :src="music.artist" alt="Artist cover" />


                        <h1 class="font-bold">{{ music.name }}</h1>
                        <!-- <button
                            class="text-white text-md font-semibold bg-roxo-botao py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                            <router-link :to="'/artist/' + artist.id">Músicas</router-link>
                        </button> -->


                    </div>

                </div>
            
            </div>
            <div v-else class="flex justify-center items-center mt-40 mb-10">
                    <p>No muisc found.</p>
                </div>
        </div>
        <button v-if="totalPages && musics.length > 0" @click="fetchNextPage"
            class="text-white text-md font-semibold bg-roxo-botao py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
            Próxima página
        </button>
        <!-- <button
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            <router-link :to="'/createMusic/'">Criar uma Musica</router-link>
        </button> -->


     
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'MusicList',
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
    },
};
</script>
  