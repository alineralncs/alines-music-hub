<template>
    <div id="Music">
        <!-- <button
            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            <router-link :to="'/createMusic/'">Criar uma Musica</router-link>
        </button> -->


        <div class=" bg-gray-100  flex items-center justify-center h-screen">
            <div class="grid grid-cols-2 gap-5"> 
            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                v-for="music in musics" :key="music.id">
                <div class="flex justify-between items-center">
                    <div class="flex">

                        <img class="w-20 h-20 rounded-full mb-4" :src="music.artist "  alt="Artist cover" />
                      
                        <h1 class="mt-5 text-2xl font-semibold">{{ music.name }}</h1>
                        <!-- <h1 class="mt-5 text-2xl font-semibold">{{ music.artist }}</h1> -->
             
   
                    </div>
                    <div>
                        <!-- <button
                            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
                            @click="deletemusic(music.id)">
                            Delete
                        </button>
                        <button
                            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                            <router-link :to="'/music/' + music.id">{{ music.name }}</router-link>
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'MusicList',
    data() {
        return {
            musics: [],
        };
    },
    mounted() {
        this.fetchmusics();
    },
    methods: {
        fetchmusics() {
            axios
                .get('http://127.0.0.1:8000/api/music/')
                .then(response => {
                    this.musics = response.data.results;
                    console.log('this', this.musics);
                    console.log('this', this.musics.artist);
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
  