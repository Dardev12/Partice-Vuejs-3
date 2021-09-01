const app = Vue.createApp({
    data(){
        return{
            name:'',
            nom:''
        };
    },
    methods:{
        showText(){
            alert('Vue JS is great');
        },
        showUser(event){

            this.name= event.target.value; 

        },
        showEnter(event){
            this.nom= event.target.value;
        }
    }
});

app.mount('#assignment');