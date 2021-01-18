<template>
    <div class="medias-list">
     
      <hr>

      <MediaItem v-bind:medias="medias" :type="type" @del="deleteMedia"></MediaItem>
      <router-link :to="{name: 'MediaAdd', params: {type: this.type}}" class="btn btn-primary">Add</router-link>

    </div>
</template>

<script>
import MediaItem from '@/components/MediaItem.vue'

export default {
  name: 'MediaList',
  props: {
      medias: Array,
      type: String
  },
  components: {
    MediaItem,
  },
  data: () => {
    return {
        title: null,
        year: null,
        productor: null,
        short: null,
        search: null,
    }
  },
   
  methods: {
    deleteMedia: function(ind){
        if(this.type == 'series') window.data.series.splice(ind, 1);
        if(this.type == 'movies') window.data.movies.splice(ind, 1);
    }
  },
}
</script>

<style>
.form-group{
  width: 50%;
  left: 25%;
  position: relative;
}
</style>