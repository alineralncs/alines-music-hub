<template>
    <div id="PlaylistRecomendation" class="bg-roxo-fundo flex justify-center items-center h-screen">
        <!-- <h1 class="text-2xl font-bold">Playlist Recommendation</h1> -->
        <div class="flex drop-shadow-2xl bg-white rounded-3xl ">
          
                <!-- <section class="  rounded-l-2xl hidden md:flex">

            <img  v-show="!recomendationCreated && !playlist" class="w-full" src="../assets/Ativo12.svg" />
            <img v-show="recomendationCreated && playlist" class="w-full" src="../assets/Ativo11.svg" />
          <img class="w-full " src="../assets/Ativo10.svg" /> 

            </section> -->
        
            <section class="m-4 p-10 justify-center items-center " v-show="!recomendationCreated && !playlist">
                <!-- <h1 class="text-2xl font-bold">Criar uma Playlist</h1>  -->
                <img  class="w-20  rounded-full bg-roxo-escuro justify-center items-center h-20" src="../assets/Ativo11.svg" />
                <form @submit.prevent="createRecomendation" class="mt-4">
                    <div class="mb-4 w-full">
                        <input
                            class="text-sm w-full mb-4  pl-3 py-2 rounded-full border focus:outline-none border-roxo-escuro hover:border-roxo-claro focus:border-roxo-escuro "
                            type="text" id="genre" v-model="recomendationData.genre"
                            placeholder="Insira seu genêro de música preferido" />

                    </div>
                    <div class="mb-4">
                            <input
                            class="text-sm w-full mb-4  p-10 pl-3 py-2 rounded-full border focus:outline-none border-roxo-escuro hover:border-roxo-claro focus:border-roxo-escuro "
                            type="text" id="subgenre"  v-model="recomendationData.subgenre"
                            placeholder="Insira seu subgenêro de música preferido" />
                    </div>
                    <!-- <div class="mb-4">
                        <label for="name" class="block font-medium">Name:</label>
                        <input type="text" id="name" v-model="recomendationData.name"
                            class="border border-gray-300 rounded-md p-2" />
                    </div> -->
                    <button 
                        class="font-bold shadow-2xl hover:bg-roxo-hover text-white rounded-full bg-roxo-escuro w-full py-2"
                        type="submit">Criar Playlist</button>

                    <!-- <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded">Create
                        Recommendation</button> -->
                </form>
            </section>
            <section>
                <div v-if="recomendationCreated && playlist" class="mt-4 text-green-600 font-medium">
                    Recommendation created successfully!
                    <div class="h-screen bg-gray-100 flex items-center justify-center mt-40">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                    v-for="playlist in playlist" :key="playlist.id">
                    <div class="flex justify-between items-center">
                        <div>
                            <h1 class="mt-5 text-2xl font-semibold justify-center text-center">{{ playlist.name }}</h1>
                            <ul v-if="playlist.showMoreItems" class="flex flex-wrap">
                                <li v-for="music in playlist.music" :key="music.id"
                                    class="rounded-3xs p-2 mb-4 flex items-center text-left">
                                    <div>
                                        <img class="rounded-lg w-10 h-10 mr-2" :src="music.artist" alt="Playlist cover" />
                                    </div>
                                    <div>
                                        <p class=" font-bold text-left">{{ music.name }}</p>
                                        <p class="text-gray-500 text-left">{{ music.genre }} - {{ music.subgenre }}</p>
                                    </div>
                                </li>
                            </ul>
                            <ul v-else>
                                <li v-for="music in playlist.music.slice(0, itemsToShow)" :key="music.id"
                                    class="p-2 mb-4 flex items-center">
                                    <div>
                                        <img class="rounded-lg w-10 h-10 mr-2" :src="music.artist" alt="Playlist cover" />
                                    </div>
                                    <div>
                                        <p class="text-left font-bold">{{ music.name }}</p>
                                        <p class="text-gray-500 text-left">{{ music.genre }} - {{ music.subgenre }}</p>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div>

                        </div>
                    </div>
                    <div>
                        <button v-if="playlist.music.length > itemsToShow"
                            class="text-blue-500 hover:text-blue-700 font-semibold" @click="showMore(playlist)"
                            v-show="!playlist.showMoreItems">Show More</button>
                        <button class="text-blue-500 hover:text-blue-700 font-semibold" @click="showLess(playlist)"
                            v-show="playlist.showMoreItems">Show Less</button>
                    </div>
                </div>
            </div>
        </div>
                </div>
            </section>
        </div>



    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'PlaylistRecomendation',
    data() {
        return {
            recomendationData: {
                genre: '',
                subgenre: '',
                name: '',
            },
            recomendationCreated: false,
            playlist: null,
        };
    },
    methods: {
        async createRecomendation() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/recomendation/', this.recomendationData);
                console.log(response.data);

                this.recomendationData = {
                    genre: '',
                    subgenre: '',
                    name: '',
                };

                this.recomendationCreated = true;
                this.playlist = response.data.playlist;
            } catch (error) {
                console.error(error); // Handle the error
            }
        },
    },
};
</script>
  
<style>/* Add your custom styles here */</style>
  