<template>
    <div class="container">
        <SearchItem/>
        <MovieList/>
    </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList.vue';
import SearchItem from '@/components/SearchItem.vue';


export default {
  name: 'Movies',
  components: {
    MovieList,
    SearchItem
  }
}
</script>
