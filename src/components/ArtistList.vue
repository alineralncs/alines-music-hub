<template>
    <div id="Artist" >
        <div v-show="artists.length > 0" class="flex justify-center items-center mt-20 mb-10">
            <!-- Search input field -->
            <input v-model="searchQuery" type="text" placeholder="Buscar artistas..."
                class="px-4 py-2 rounded-full border border-roxo-escuro w-200 bg-roxo-fundo shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400" />

            <!-- Search button -->
            <button @click="searchArtists"
                class="ml-2 bg-roxo-escuro text-white px-4 py-2 rounded-full hover:bg-roxo-hover">Search</button>
        </div>
        <!-- <button
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            <router-link :to="'/createArtist/'">Criar um artista</router-link>
        </button>
 -->
        <div class="flex  justify-center items-center mt-40 mb-10">
            <div v-if="artists.length > 0" class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                <div  class=" bg-white p-8 rounded-2xl drop-shadow-2xl justify-items-center " v-for="artist in artists"
                    :key="artist.id">
                    <div class="justify-center items-center">

                        <img class="w-40 h-40 rounded-md mb-4" :src="artist.imageURL" alt="Artist cover" />


                        <h1 class="font-bold">{{ artist.name }}</h1>
                        <button
                            class="text-white text-md font-semibold bg-roxo-botao py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                            <router-link :to="'/artist/' + artist.id">Músicas</router-link>
                        </button>


                    </div>

                </div>
            
            </div>
            <div v-else class="flex justify-center items-center mt-40 mb-10">
                <NotfoundComponent/>
                </div>
        </div>
        <button v-if="currentPage < totalPages" @click="fetchNextPage"
            class="text-white text-md font-semibold bg-roxo-botao py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
            Próxima página
        </button>


    </div>
</template>
  
<script>
import axios from 'axios';
import NotfoundComponent from '../components/notfound/NotfoundComponent.vue'

export default {
    name: 'ArtistList',
    components: {
        NotfoundComponent
    },
    data() {
        return {
            artists: [],
            currentPage: 1,
            totalPages: 1,
            searchQuery: '',
        };
    },
    mounted() {
        this.fetchArtists();
    },
    methods: {
        fetchArtists() {
            axios
                .get('http://127.0.0.1:8000/api/artist/', {
                    params: {
                        search: this.searchQuery,
                    }
                })
                .then(response => {

                    this.totalPages = response.data.count;
                    this.artists = response.data.results;
                    console.log('totak', this.totalPages)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        searchArtists() {
            this.currentPage = 1;
            this.fetchArtists();
        },
        fetchNextPage() {
            const nextPage = this.currentPage + 1;
            axios
                .get(`http://127.0.0.1:8000/api/artist/?page=${nextPage}`)
                .then(response => {
                    //const newArtists = response.data.results;
                    this.artists = response.data.results;
                    // this.artists = [...this.artists, ...newArtists];
                    // this.artists.push(...newArtists);
                    this.currentPage = nextPage;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteArtist(artistId) {
            axios
                .delete(`http://127.0.0.1:8000/api/artist/${artistId}/`)
                .then(() => {
                    console.log('Artist deleted successfully');
                    this.fetchArtists(); // Refresh the artist list after deletion
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },
};
</script>
  