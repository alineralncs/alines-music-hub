<template>
    <div id="PlaylistList">
        <div class="h-screen bg-gray-100 flex items-center justify-center mt-40">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
                    v-for="playlist in playlists" :key="playlist.id">
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
</template>
  

<script>
import axios from 'axios';
export default {
    name: 'PlaylistList',
    data() {
        return {
            playlists: [],
            itemsToShow: 5,
        };
    },
    mounted() {
        // console.log('Playlist COmponent')
        axios.get('http://127.0.0.1:8000/api/playlist/')
            .then(response => {
                this.playlists = response.data.results;
                // console.log('this', this.playlists);
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        showMore(playlist) {
            // Increase the number of music items to show
            playlist.showMoreItems = true;
        },
        showLess(playlist) {
            // Decrease the number of items to show
            playlist.showMoreItems = false;
        }
    }
}
</script>