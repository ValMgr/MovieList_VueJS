<template>
    <div class="container">
     
      <hr>

    <MovieItem v-bind:movies="result" @del="deleteMovie"></MovieItem>
 
        <hr>
      <div class="form-group">
        Title: <input class="form-control" type="text" v-model="title" /><br>
        Year: <input class="form-control" type="number" v-model="year" /><br>
        Productor: <input class="form-control" type="text" v-model="productor" /><br>
        Short: <input class="form-control" type="text" v-model="short" /><br>
        <button class="btn btn-primary" v-on:click="addMovie()">Add</button>
        
      </div>
    </div>
</template>

<script>
import MovieItem from '../components/MovieItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieItem,
  },
  data: () => {
    return {
        title: null,
        year: null,
        productor: null,
        short: null,
        search: null,
        

        movies: window.global_data.movies,
    }
  },
   
  methods: {
    addMovie: function () {
        let newMovie = {
            title: this.title,
            year: this.year,
            productor: this.productor,
            short: this.short,
        }
        this.movies.push(newMovie);

        this.title = '';
        this.year = '';
        this.productor = '';
        this.short = '';

    },
    deleteMovie: function(ind){
        this.movies.splice(ind, 1);
    },
    setResult: function(result){
      this.result = result
    }
  },
}
</script>

<style>
.form-group{
  width: 25%;
}
</style>