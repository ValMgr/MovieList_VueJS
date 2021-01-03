import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

window.global_data = {
  movies: [
    {title: "13 Hours", year: "2016", productor: "Michael Bay", short: "Le 11 septembre 2012, à Benghazi..."},
    {title: "Titanic", year: "1998", productor: "James Cameron", short: "Le Titanic est un paquebot transatlantique..."},
    {title: "Interstellar", year: "2014", productor: "Christopher Nolan", short: "Dans un futur proche, la Terre est de moins en moins accueillante..."},
  ],
  series: [
    {title: "Dark", year: "2017", productor: "Baran bo Odar", season: 3, short: "Lorsque deux enfants disparaissent dans une petite ville allemande, son passé tragique refait surface."}
  ]
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
