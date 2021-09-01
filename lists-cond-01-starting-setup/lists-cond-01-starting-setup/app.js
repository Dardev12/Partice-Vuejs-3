const app = Vue.createApp({
  data() {
    return { 
      valeurEntrer:'',
      goals: [] ,
      link:'https://code.tutsplus.com/fr/tutorials/building-a-full-featured-music-player-with-vuetify--cms-31228'
    };
  },
  methods: {
    addBut(){
      this.goals.push(this.valeurEntrer);
      this.valeurEntrer='';
    },
    RemoveBut(idx){
      this.goals.splice(idx,1);//splice permet de supprimer value
    }
  },
});

app.mount('#user-goals');
