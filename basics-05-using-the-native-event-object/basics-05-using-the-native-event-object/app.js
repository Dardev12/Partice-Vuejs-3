const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName:'',
      /* fullname:'', */
    };
  },
  watch:{
    counter(value){
      if(value>50){
        const that=this;
        setTimeout(function(){
          that.counter=0;
        },200);
        
      }
    }
    //Permet d'oberser nos valeur
    //ou on peut fair newvalue,oldvalue en param
   //Très puissant comme outil
    /*  name(value){
      if(value===''){
        this.fullname='';
      }else{
        this.fullname=value+ ' ' + this.lastName;
      }
     
    },
    lastName(value){
      if(value===''){
        this.fullname='';
      }else{
        this.fullname=this.name+ ' ' + value;
      }
    } */

  },
  methods: {
    outputFullName: function(){
      console.log('TEST')
      if(this.name === ''){
        return '';
      }
        return this.name + ' ' + 'Lambert'
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    }
  },
  computed:{
    //Utile pour perfomance car si on utilise que methods risque de recharge trop longue
    
    outputName: function(){
      console.log('TEST')
      if(this.name === '' || this.lastName===''){
        return '';
      }
        return this.name + ' ' + this.lastName;
    }
  }
});

app.mount('#events');
