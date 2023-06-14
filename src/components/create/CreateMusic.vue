<template>
    <div class="flex justify-center">
      <div class="w-1/2">
        <form @submit.prevent="createArtist" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Artist Name:</label>
            <input type="text" v-model="artistData.name" id="name" placeholder="Artist Name"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="artist">Artist:</label>
            <input type="text" v-model="artistData.artist" id="artist" placeholder="Artist"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">Duration:</label>
            <input type="text" v-model="artistData.duration" id="duration" placeholder="Duration"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="genre">Genre:</label>
            <input type="text" v-model="artistData.genre" id="genre" placeholder="Genre"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="lyrics">Lyrics:</label>
            <textarea v-model="artistData.lyrics" id="lyrics" placeholder="Lyrics"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <!-- Add more input fields for other artist properties if applicable -->
          <div class="flex items-center justify-between">
            <button type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create
              Artist</button>
            <div v-if="artistCreated" class="text-green-500 font-bold">Artist created successfully!</div>
          </div>
        </form>
      </div>
    </div>
  </template>
    
  <script>
  import axios from 'axios';
  
  const API_URL = 'http://127.0.0.1:8000/api/music/';
  
  export default {
    data() {
      return {
        artistData: {
          name: '',
          artist: '',
          duration: '',
          genre: '',
          Lyrics: '',
          // Add other properties of the artist here if applicable
        },
        artistCreated: false,
      };
    },
    methods: {
      async createArtist() {
        try {
          const response = await axios.post(API_URL, this.artistData);
          console.log(response.data); // Handle the response as needed
  
          // Optionally, you can perform additional actions after successful creation
          // For example, you can redirect to a different page or refresh the artist list.
  
          // Reset the form after successful creation
          this.artistData = {
            name: '',
            artist: '',
            duration: '',
            genre: '',
            Lyrics: '',
            // Add other properties of the artist here if applicable
          };
  
          // Display the notification message
          this.artistCreated = true;
        } catch (error) {
          console.error(error); // Handle the error
        }
      },
    },
  };
  </script>
    