<template>
    <div class="container">
      <h2>HomePage</h2>
      <p class="desc">Here is a short <span style="color:#42b983">Vue.js</span> application. Born from DAWIN's Project, this application is a media library.
      For now there is only 2 media types: <router-link to="/movies">movies</router-link> and <router-link to="/series">series</router-link>. You can add, view and edit each media.</p>

      <p>Developped by: Valentin Magry <br><span style="color:#42b983">Vue.js</span> - <span style="color: #7952b3">Bootstrap</span></p>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
.desc{
  margin: 4em 0 2em 0;
  width: 50%;
  font-size: 1.2em;
}
a{
  text-decoration: underline;
  color: white;
  font-weight: bold;
}
a:hover{
  color: #42b983;
}
</style>
