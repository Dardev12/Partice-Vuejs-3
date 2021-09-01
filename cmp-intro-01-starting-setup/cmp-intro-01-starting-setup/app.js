const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:'julie',
                    name:'Julie Jones',
                    phone:'09876 543 221',
                    email:' julie@localhost.com' 
                }
            ],
            

        };
    }
});

app.component('friend-contact',{
    template:`
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">
            {{detailsvisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsvisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
    data(){
        return{
            detailsvisible:false,
            friend:{
                id:'manuel',
                name:'Manuel Lorenz',
                phone:'01234 5678 991',
                email:'manuel@localhost.com' 
            }
            
        };
    },
    methods:{
        toggleDetails(){
            this.detailsvisible= !this.detailsvisible;
        }
    }
});
app.mount('#app')