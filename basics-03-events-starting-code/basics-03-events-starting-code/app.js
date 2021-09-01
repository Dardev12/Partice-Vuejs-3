const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods:{
      setNom(event,lastname){
        //event fonction propre à js quiutile pour target objet concerné
        this.name= event.target.value + ' ' + lastname;

      },
      Add(num){
        this.counter+=num;
      },
      Reduce(num){
        this.counter-=num;
      },
      envoiForm(){
        //event.preventDefault();
        alert('Remplis');
      },
      confirmer(){
        alert('ça marche');
      }
  }
});

app.mount('#events');


const alter = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  }
});

alter.mount('#alternate');
