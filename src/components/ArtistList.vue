<template>
    <div id="Artist">
        <button
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            <router-link :to="'/createArtist/'">Criar um artista</router-link>
        </button>


        <div class="flex flex-cols gap-6 justify-center items-center flex-wrap">
            <div section="w-full" v-for="artist in artists" :key="artist.id">
                <img class=" w-20 rounded-xl" :src="artist.imageURL" alt="Artist cover" />
            </div>

        </div>

        <!-- <div class="min-h-screen bg-gray-100 mx-auto flex items-center">
            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                v-for="artist in artists" :key="artist.id">
                <img class="rounded-xl" :src="artist.imageURL" alt="Artist cover" />
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="mt-5 text-2xl font-semibold">{{ artist.name }}</h1>
                    </div>
                    <div>
                        <button
                            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
                            @click="deleteArtist(artist.id)">
                            Delete
                        </button>
                        <button
                            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                            <router-link :to="'/artist/' + artist.id">{{ artist.name }}</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'ArtistList',
    data() {
        return {
            artists: [],
        };
    },
    mounted() {
        this.fetchArtists();
    },
    methods: {
        fetchArtists() {
            axios
                .get('http://127.0.0.1:8000/api/artist/')
          
                .then(response => {
                    this.artists = response.data.results;
                    console.log('this', this.artists);
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
  