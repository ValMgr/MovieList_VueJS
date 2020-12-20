<template>
  <div id="app">
     <header class="navbar">
      <section class="navbar-section">
        <div id="title">
          <h1>VueJs - DAWIN</h1>
        </div>
      </section>
      <section class="navbar-section">
        <div id="nav">
         <router-link to="/">Home</router-link> |
         <router-link to="/movies">Movies</router-link>
        </div>
      </section>
    </header>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body{
  background-color: rgb(33, 37, 41);
}

#nav {
  padding: 30px;
}

h1{
  color: #42b983;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar{
  position: fixed;
  justify-content: center;
  z-index: 10;
  width: 100%;
  padding: 10px 0;
  background-color: rgb(33, 37, 41);
  box-shadow: 0 0.25rem 1rem #42b98370;
  align-items: stretch;
  display: flex;
  display: -ms-flexbox;
  -ms-flex-align: stretch;
  -ms-flex-pack: justify;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  top: 0;
} 

.navbar section{
  align-self: center;
}

.navbar section:first-child {
  float: left;
  margin-left: 50px;
}

.navbar section:last-child {
  float: right;
  margin-right: 50px;
}

.container:first-of-type{
  margin-top: 15vh;
}
</style>
