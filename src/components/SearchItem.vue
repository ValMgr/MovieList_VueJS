<template>
   <div class="form-group">
      Search: <input class="form-control" type="text" v-model="search"><br>
        <button class="btn btn-primary" v-on:click="searchMovies()">Search</button>
        <button class="btn btn-secondary" v-on:click="resetSearch()">x</button>
    </div>
</template>

<script>

import MovieList from '@/components/MovieList.vue';

export default {
    name: "SearchItem",
    data: function(){
        return {
            search: null,
            result: null,
            movies: window.global_data.movies
        }
    },
    created: function () {
        this.result = this.movies
        MovieList.setResult(this.result)
    },
    methods: {
        searchMovies: function (){
            if(this.search == ""){
                this.result = this.movies
            }
            else{
                let r = [];
                for(const movie of this.movies) {
                    for (const param in movie) {
                        if(movie[param].toLowerCase().includes(this.search.toLowerCase())){
                                r.push(movie)
                                break;
                        }
                    }
                }
                this.result = r;
            }
        },
        resetSearch: function(){
            this.result = this.movies
        }
    }
}
</script>

<style>

</style>