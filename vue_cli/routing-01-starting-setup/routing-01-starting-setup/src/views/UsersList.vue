<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="confirmSave">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return{changeSaved:false}
  },
  methods:{
    confirmInput(){
      //Fait ça 
      this.$router.push('/Teams');
    },
    confirmSave(){
      this.changeSaved=true;
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('UserList Cmp BeforerouteEnter');
    console.log(to,from);
    next(); 
  },
  beforeRouteLeave(to,from,next){
    console.log('UserList Cmp BeforeRouteELeave');
    console.log(to,from);
    

    if(this.changeSaved){
      next(); 
    }else{
      const userVeutPartir=confirm('Tu n\'as pas sauvegarder les changements' );
      next(userVeutPartir); 
    }
  },
  unmounted(){
    console.log('Unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>