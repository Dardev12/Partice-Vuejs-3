<template>
    <section>
        <header>
          <h1>Mes Amis</h1>
        </header>

        <add-friend @add-contact="AjoutContact"> </add-friend>

        <ul>
          <!-- <friend-contact v-for='friend in friends' Id='friend.id'></friend-contact> 
            v-bind les Boolean props
          -->
          <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :Id="friend.id"
            :Name="friend.name"
            :Phone="friend.phone"
            :Email="friend.email"
            :isFavorite="friend.isFavorite"
            @enlever="enleverStatusFav"
            @delete-friend="SupprimerContact"
          ></friend-contact>
            <!--<friend-contact  Id='dl' Name='Darren Lambert' Phone='4189743218' Email='darren@gmail.com' v-bind:isFavorite="true"></friend-contact> Id='dl' Name='Darren Lambert' Phone='4189743218' Email='darren@gmail.com' -->
            <!--<friend-contact Id='cl' Name='Clarata' Phone='4123562589' Email='clacla@gmail.com' ></friend-contact>-->
        </ul>

    </section>
    

</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default{
  components: { FriendContact },
    data(){
        return{
            friends:[
                {
                    id:'dl',
                    name:'Darren Lambert',
                    phone:'4189743218',
                    email:'darren@gmail.com',
                    isFavorite:true,
                },
                {
                    id:'cl',
                    name:'Clarata',
                    phone:'411232314',
                    email:'clacla@gmail.com',
                    isFavorite:false,
                }
            ]
        };
    },
    methods: {
      enleverStatusFav(friendId){
        const identite=this.friends.find(
          (friend)=>friend.id===friendId
          );
        identite.isFavorite= !identite.isFavorite;
        
      },
      AjoutContact(nom,phone,email){
          const newFriend={
            id: new Date().toISOString(),
            name:nom,
            phone: phone,
            email:email,
            isFavorite:false,
          };
          this.friends.push(newFriend);
      },
      SupprimerContact(friendId){
        this.friends=this.friends.filter((friend)=>friend.id !== friendId);//Autre manière de chercher objet
      }
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>