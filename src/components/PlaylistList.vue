<template>
    <div id="PlaylistList">

                <div class="min-h-screen bg-gray-100 mx-auto flex items-center">
            <div
                class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 " v-for="playlist in playlists" :key="playlist.id">
                <img class="rounded-xl" :src="playlist.imageURL"
                                alt="Playlist cover" />
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="mt-5 text-2xl font-semibold text-left">{{ playlist.name }}</h1>
                        <p class="mt-2 text-slate-500 text-justify" v-for="music in playlist.music" :key="music.id">{{ music.name }}</p>
                    </div>
                    <div>
                        <button
                            class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "></button>
                    </div>
                </div>
            </div>
        </div>


        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'PlaylistList',
    data() {
        return {
            playlists: [],
        };
    },
    mounted() {
        console.log('Playlist COmponent')
        axios.get('http://127.0.0.1:8000/api/playlist/')
            .then(response => {
                this.playlists = response.data.results;
                console.log('this', this.playlists);
            })
            .catch(error => {
                console.log(error);
            });
    },
}
</script>