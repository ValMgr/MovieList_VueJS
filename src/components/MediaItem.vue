<template>
  
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th v-if="this.type == 'series'" scope="col">Season</th>
      <th scope="col">Genre</th>
      <th scope="col">Year</th>
      <th scope="col">Productor</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(media, index) in medias" :key="index">
      <td scope="row">{{index+1}}</td>
      <td>{{media.title}}</td>
      <td v-if="type == 'series'">{{media.season}}</td>
      <td>{{media.genre}}</td>
      <td>{{media.year}}</td>
      <td>{{media.productor.firstname}} {{media.productor.name}}</td>
      <td><button class="btn btn-info" v-on:click="Inspect(index)">View</button></td>
      <td><button class="btn btn-warning" v-on:click="Edit(index)">Edit</button></td>
      <td><button class="btn btn-danger" v-on:click="$emit('del', index)">x</button></td>
    </tr>
  </tbody>
</table>

</template>

<script>
export default {
  name: 'MediaItem',
  props: {
    medias: Array,
    type: String
  },
  methods: {
    Edit: function(index){
     this.$router.push("/"+this.type+"/"+index+"/edit");
    },
    Inspect: function(index){
     this.$router.push("/"+this.type+"/"+index);
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
