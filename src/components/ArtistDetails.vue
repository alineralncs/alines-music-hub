<template>
    <div id="ArtistDetails">
      <div v-if="artists">
        <div class="min-h-screen bg-gray-100 mx-auto flex items-center">
          <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img class="rounded-xl" :src="artists.imageURL" alt="Playlist cover" />
            <div class="flex justify-between items-center">
              <div>
                <h1 class="mt-5 text-2xl font-semibold">{{ artists.name }}</h1>
                <h1 class="mt-5 text-2xl font-semibold">{{ artists.music }}</h1>
              </div>
              <div>
                <button
                  class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
                >
                  Ver Músicas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Nenhum artista selecionado.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ArtistDetails',
    data() {
      return {
        artists: null, 
      };
    },
    mounted() {
      const artistId = this.$route.params.id; 
        console.log(artistId)
      axios
        .get(`http://127.0.0.1:8000/api/artist/${artistId}`)
        .then(response => {
          this.artists = response.data;
          console.log('artist', response.data)
        })
        .catch(error => {
          console.log(error);
        });
    },
  };
  </script>
  