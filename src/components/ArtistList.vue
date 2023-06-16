<template>
    <div id="Artist">
        <!-- <button
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            <router-link :to="'/createArtist/'">Criar um artista</router-link>
        </button>
 -->
        <div class="flex h-screen gap-8 justify-center items-center flex-wrap">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 container">
            

            <div class="grid justify-items-center " v-for="artist in artists" :key="artist.id">
                <div class="justify-center items-center">
        
                <img class="w-40 h-40 rounded-full mb-4" :src="artist.imageURL" alt="Artist cover" />
                    
                <button
                    class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                    <router-link :to="'/artist/' + artist.id">{{ artist.name }}</router-link>
                </button>
                      
            </div>
              
        </div>  
        </div>
        </div>
        <button
            v-if=" totalPages"
            @click="fetchNextPage"
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
        >
            Próxima página
        </button>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'ArtistList',
    data() {
        return {
            artists: [],
            currentPage: 1,
            totalPages: 1,
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

                this.totalPages = response.data.count;
                this.artists = response.data.results;
                console.log(this.totalPages)
                })
                .catch(error => {
                console.log(error);
                });
    },
    fetchNextPage() {
        const nextPage = this.currentPage + 1;
        axios
            .get(`http://127.0.0.1:8000/api/artist/?page=${nextPage}`)
            .then(response => {
            const newArtists = response.data.results;
            this.artists.push(...newArtists);
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
  