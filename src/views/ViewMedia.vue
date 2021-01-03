<template>
    <div class="container">
      <div class="single-media">
          <h2>id: {{ $route.params.id }}</h2> 
      </div>
    </div>
</template>

<script>

export default {
  name: 'ViewMedia',
  components: {
  },
  data: () => {
    return {
        
    }
  },
   
  methods: {

  },
}
</script>

<style>
.form-group{
  width: 25%;
}
</style>