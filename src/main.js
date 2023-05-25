import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './view/HomePage.vue'
import PlaylistList from './/components/PlaylistList.vue'
import ArtistList from './components/ArtistList.vue'
import MusicList from './components/MusicList.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/artist', component: ArtistList },
  { path: '/playlist', component: PlaylistList },
  { path: '/music', component: MusicList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
