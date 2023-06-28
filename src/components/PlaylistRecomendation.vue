<template>
    <div id="PlaylistRecomendation" class="bg-roxo-fundo flex justify-center items-center h-screen">
        <!-- <h1 class="text-2xl font-bold">Playlist Recommendation</h1> -->
        <div class="flex drop-shadow-2xl bg-white rounded-3xl ">
            <section class="m-4 p-10 justify-center items-center " v-show="!recomendationCreated && !playlist">
                <div class="flex justify-center items-center"> 
                <!-- <h1 class="text-2xl font-bold">Criar uma Playlist</h1>  -->
                <img  class="w-40  rounded-full justify-center items-center h-40" src="../assets/Ativo11.svg" />
                </div>
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
  