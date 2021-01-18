<template>
    <div class="container">
      <button class="btn btn-success back" v-on:click="Back()">Back</button>
      <button class="btn btn-warning edit-right" v-on:click="Edit()">Edit</button>

      <div class="single-media">
          <h2>{{ this.media.title }}</h2> 
          <hr>
          <div class="row">
            <div class="col">
              <p v-if="this.type == 'series'" >Season: {{this.media.season}}</p>
              <p><span class="type">Genre:</span> {{this.media.genre}}</p>
              <p><span class="type">Year:</span> {{this.media.year}}</p>
              <p><span class="type">Short:</span> {{this.media.short}}</p>
              <hr>
              <h5>Realized by</h5>
              <p><span class="type">Name:</span> {{this.media.productor.firstname}} {{this.media.productor.name}}</p>
              <p><span class="type">Country:</span> {{this.media.productor.country}}</p>
              <p><span class="type">Birthdate:</span> {{this.media.productor.birthdate}}</p>
            </div>
            <div class="col">
              <img class="cover" :src="this.media.poster">
            </div>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'ViewMedia',
  props: {
    type: String,
  },
  components: {
  },
  data: () => {
    return {
      media: null,
    }
  },
  created: function(){
   if(this.type == 'movies') this.media = window.data.movies[this.$route.params.id]
   if(this.type == 'series') this.media = window.data.series[this.$route.params.id]
  },
  methods: {
    Back: function (){
      if(this.type == 'movies') this.$router.push("/movies");
      if(this.type == 'series') this.$router.push("/series");
    },
    Edit: function(){
      this.$router.push(this.$route.params.id+"/edit");
    }
  },
}
</script>

<style>
.cover{
  width: 100%;
  box-shadow: 0 0.25rem 1rem #42b98370;
}
.type{
  text-decoration: underline;
}
.back{
  margin-bottom: 1em;
}
.edit-right{
  float: right;
  margin-bottom: 1em;
}
</style>