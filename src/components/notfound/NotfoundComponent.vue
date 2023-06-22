<template>

<div id="Notfound">
    <!-- This is an example component -->
<!-- <div class="h-screen w-screen bg-roxo-fundo flex items-center"> -->
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 pb-40">
        <div class="max-w-lg">
        <img class="drop-shadow-2xl "  src="@/assets/GoodiesCrying.png"/>
    </div>
    
        <div class="max-w-md">
      		<div class="text-5xl font-dark font-bold">404</div>
            <p
              class="text-2xl md:text-3xl font-light leading-normal"
            >Desculpe, não foi possível encontrar esta página.</p>
          <p class="mb-8">Essa página não existe em produção, para receber recomendações e ver músicas e artistas é necessário ter acesso a API localmente. </p>
          
          <button class="px-4 inline py-2 mr-8 leading-5 shadow text-white font-bold transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-purple-700 active:bg-blue-600 hover:bg-roxo-hover">
            <router-link to="/">Página Inicial</router-link>
            </button> 

            <button class="px-4 inline py-2 leading-5 shadow text-white font-bold transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-purple-700 active:bg-blue-600 hover:bg-roxo-hover">
            <a href="https://github.com/alineralncs/django-music-api/tree/main/musicapi">Link do Github</a>
            </button>
    </div>
  
  <!-- </div> -->
</div>
</div>
</template>

<script>

export default {
    name: 'NotfoundComponent'
}
</script>