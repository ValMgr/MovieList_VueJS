<template>
  
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Productor</th>
      <th scope="col">Short</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(movie, index) in movies" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{movie.title}}</td>
      <td>{{movie.year}}</td>
      <td>{{movie.productor}}</td>
      <td>{{movie.short}}</td>
      <td><button class="btn btn-info" v-on:click="Inspect(index)">View</button></td>
      <td><button class="btn btn-warning" v-on:click="Edit(index)">Edit</button></td>
      <td><button class="btn btn-danger" v-on:click="$emit('del', index)">x</button></td>
    </tr>
  </tbody>
</table>

</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movies: Array,
  },
  methods: {
    Edit: function(index){
     this.$router.push("/movies/"+index+"/edit");
    },
    Inspect: function(index){
     this.$router.push("/movies/"+index+"/view");
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
