<template>
    <p>oioioio</p>
    <div id="PlaylistList">
        <ul v-if="playlists.length > 0">
            <li v-for="playlist in playlists" :key="playlist.id">
                <div class="playlist-container">
                    <div class="playlist-info">
                        <p class="playlist-name">{{ playlist.name }}</p>
                        <ul class="music-list">
                            <li v-for="music in playlist.music" :key="music.id">
                                <p>{{ music.lyrics }}A</p>
                            </li>
                        </ul>
                    </div>
                    <div class="playlist-image">
                        <img :src="playlist.imageURL" alt="Playlist Image" />
                    </div>
                </div>
            </li>
        </ul>
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