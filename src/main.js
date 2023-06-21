import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'

import HomePage from './view/HomePage.vue'
import PlaylistList from './/components/PlaylistList.vue'
import ArtistList from './components/ArtistList.vue'
import ArtistDetails from './components/ArtistDetails.vue'
import MusicList from './components/MusicList.vue'
import CreateArtist from './components/create/CreateArtist.vue'
import CreateMusic from './components/create/CreateMusic.vue'
import PlaylistRecomendation from './components/PlaylistRecomendation.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/artist', component: ArtistList },
  { path: '/artist/:id', component: ArtistDetails },
  { path: '/playlist', component: PlaylistList },
  { path: '/music', component: MusicList },
  { path: '/createArtist', component: CreateArtist },
  { path: '/createMusic', component: CreateMusic },
  { path: '/foryou', component: PlaylistRecomendation },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
