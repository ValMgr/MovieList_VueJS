<template>
    <div class="container">
      <div class="form-group">
        <h2>New Media</h2>
        <hr>
        <h4>Media</h4>
        Title: <input class="form-control" type="text" v-model="title" /><br>
        Release Year: <input class="form-control" type="number" min="1950" max="2099" v-model="year" /><br>
        Genre: <input class="form-control" type="text" v-model="genre" /><br>
        Short: <textarea class="form-control" rows="3" v-model="short"></textarea><br>
        Poster (url): <input class="form-control" type="url" v-model="posterUrl" /><br>
        <hr>
        <h4>Productor</h4>
        Name: <input class="form-control" type="text" v-model="prodName" /><br>
        FirstName: <input class="form-control" type="text" v-model="prodFirstName" /><br>
        Nationality: <CountryForm class="form-control" :value="prodNationality" @getCountry="getCountry" /><br>
        Birthdate: <input class="form-control" type="date" v-model="prodBirth" /><br>
        <hr>
        <button class="btn btn-primary" v-on:click="addMedia()">Add</button>
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
  data: () => {
    return {
        title: null,
        year: null,
        genre: null,
        short: null,
        posterUrl: null,
        prodName: null,
        prodFirstName: null,
        prodNationality: null,
        prodBirth: null,
    }
  },
   
  methods: {
    addMedia: function () {
        let newMedia = {
            title: this.title,
            year: this.year,
            genre: this.genre,
            short: this.short,
            poster: this.posterUrl,
            productor: {
              name: this.prodName,
              firstname: this.prodFirstName,
              nationality: this.prodNationality,
              birth: this.prodBirth
            },
        }

        if(this.$route.params.type == 'series') window.global_data.series.push(newMedia);
        if(this.$route.params.type == 'movies') window.global_data.movies.push(newMedia);

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