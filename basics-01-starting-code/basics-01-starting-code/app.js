const app = Vue.createApp({
    el:'user-goal',
    data(){
        //autre manière de call data
        return{
            butCours: 'Base de Vue JS',
            someText: 'Maitrisé Vue !!',
            vueLink:'https://vuejs.org'
        };
    },
    methods:{
        active(){
            alert('Bonjour');
        },
        outputGoal(){
            const randomNumber =Math.random();
            if(randomNumber<0.5){
                return this.butCours; //pour call la valeur dans l'instance vue data
            }else{
                return this.someText;
            }
        }
    }

});

app.mount('#user-goal');
//gére l'élément que l'on veut controler