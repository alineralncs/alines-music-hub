<template>
    <div id="Artist">
        <!-- <ul v-if="artists.length > 0">
            <li v-for="artist in artists" :key="artist.id">
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden  mb-10">
                    <div class="md:flex">
                        <div class="md:shrink-0">
                            <img class="h-48 w-full object-cover md:h-full md:w-48" :src="artist.imageURL"
                                alt="Playlist cover">
                        </div>
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-justify">{{
                                artist.name }}
                            </div>
                             <p class="mt-2 text-slate-500" v-for="music in playlist.music" :key="music.id">{{ music.name }}
                            </p> 
                        </div>
                    </div>
                </div> -->
        <div class="min-h-screen bg-gray-100 mx-auto flex items-center">
            <div
                class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 " v-for="artist in artists" :key="artist.id">
                <img class="rounded-xl" :src="artist.imageURL"
                                alt="Playlist cover" />
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="mt-5 text-2xl font-semibold">{{ artist.name }}</h1>
                    </div>
                    <div>
                        <button
                            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "> <router-link :to="'/artist/' + artist.id">{{ artist.name }}</router-link></button>
                    </div>
                </div>
            </div>
        </div>
        <!-- </li>
        </ul> -->
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
        console.log('Artist COmponent')
        axios.get('http://127.0.0.1:8000/api/artist/')
            .then(response => {
                this.artists = response.data.results;
                console.log('this', this.artists);
            })
            .catch(error => {
                console.log(error);
            });
    },
};
</script>