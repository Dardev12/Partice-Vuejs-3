<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="texte" ref="goal"/>
        <button @click="setGoal">Envoie Objectif</button>
        <teleport to="body"><!--Transport partie du code à une partie désirer-->
            <error-alert v-if="inputIsImvalid">
            <h2>Invalide</h2>
            <p>Veuillez entrer un caractère..</p>
            <button @click="resetValue">Ça marche</button>
            </error-alert>
        </teleport>
        
    </div>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue';


export default {
    components:{
        ErrorAlert
    },
    data(){
        return{
            inputIsImvalid:false
        }
    },
   methods:{
       setGoal(){
           const enteredValue=this.$refs.goal.value;
           if(enteredValue===''){
               this.inputIsImvalid=true;
           }
       },
       resetValue(){
           this.inputIsImvalid=false;
       }
   }
}
</script>
