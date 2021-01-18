<template>
    <div class="container">
        <SearchItem :medias="movies" :displayed="displayed" @setDisplay="setDisplay"/>
        <MediaList :type="type" :medias="displayed"/>
    </div>
</template>

<script>
// @ is an alias to /src
import MediaList from '@/components/MediaList.vue';
import SearchItem from '@/components/SearchItem.vue';


export default {
  name: 'Movies',
  components: {
    MediaList,
    SearchItem
  },
  data: function(){
    return {
      type: "movies",
      movies: window.data.movies,
      displayed: window.data.movies
    }
  },
  methods: {
    setDisplay: function(arr){
      this.displayed = arr
    }
  }
}
</script>
