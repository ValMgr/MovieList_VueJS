<template>
    <div class="container">
      <div class="form-group">
        <h2 v-if="this.action != 'edit'">New Media</h2>
        <h2 v-if="this.action == 'edit'">Edit Media</h2>
        <hr>
        <h4>Media</h4>
        <label>Title: </label><input class="form-control" type="text" v-model="title" /><br>
        <label v-if="this.$route.params.type == 'series'">Season: </label><input v-if="this.$route.params.type == 'series'" class="form-control" type="text" v-model="season" /><br v-if="this.$route.params.type == 'series'">
        <label>Release Year: </label><input class="form-control" type="number" min="1950" max="2099" v-model="year" /><br>
        <label>Genre: </label><input class="form-control" type="text" v-model="genre" /><br>
        <label>Short: </label><textarea class="form-control" rows="10" v-model="short"></textarea><br>
        <label>Poster (url): </label><input class="form-control" type="url" v-model="posterUrl" /><br>
        <hr>
        <h4>Productor</h4>
        <label>Name: </label><input class="form-control" type="text" v-model="prodName" /><br>
        <label>FirstName: </label><input class="form-control" type="text" v-model="prodFirstName" /><br>
        <label>Nationality: </label><CountryForm class="form-control" :value="prodNationality" @getCountry="getCountry" /><br>
        <label>Birthdate: </label><input class="form-control" type="date" v-model="prodBirth" /><br>
        <hr>
        <button class="btn btn-primary" v-if="this.action != 'edit'" v-on:click="addMedia()">Add</button>
        <button class="btn btn-primary" v-if="this.action == 'edit'" v-on:click="editMedia()">Edit</button>

      </div>
    </div>
</template>

<script>
import CountryForm from '@/components/CountryForm.vue'

export default {
  name: 'AddMedia',
  components: {
    CountryForm
  },
  props: {
    action: String,
    type: String,
  },
  data: () => {
    return {
        title: null,
        year: null,
        genre: null,
        short: null,
        posterUrl: null,
        season: null ,
        prodName: null,
        prodFirstName: null,
        prodNationality: null,
        prodBirth: null,
    }
  },
  created: function () {
    if(this.action == 'edit'){
      let media;
      if(this.type == 'movies') media = window.data.movies[this.$route.params.id]
      if(this.type == 'series') media = window.data.series[this.$route.params.id]
      this.title = media.title;
      this.year = media.year;
      this.season = media.season;
      this.genre = media.genre;
      this.short = media.short;
      this.posterUrl = media.poster;
      this.prodName = media.productor.name;
      this.prodFirstName = media.productor.firstname;
      this.prodNationality = media.productor.country;
      this.prodBirth = media.productor.birthdate;

    }
  },
  methods: {
    addMedia: function () {
        let newMedia = {
            title: this.title,
            year: this.year,
            genre: this.genre,
            short: this.short,
            season: this.season,
            poster: this.posterUrl,
            productor: {
              name: this.prodName,
              firstname: this.prodFirstName,
              country: this.prodNationality,
              birthdate: this.prodBirth
            },
        }

        if(this.$route.params.type == 'series') window.data.series.push(newMedia);
        if(this.$route.params.type == 'movies') window.data.movies.push(newMedia);

        this.$router.push("/"+this.$route.params.type);
    },
    getCountry: function (value) {
      this.prodNationality = value
    }
  },
}
</script>

<style>

input[type=number]::-webkit-inner-spin-button{
  width: 10px;
}

</style>