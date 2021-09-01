<template>
    <form @submit.prevent="EnvoieData">
        <div>
            <label>Nom</label>
            <input type="text" v-model="inputNom"/>
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="inputPhone"/>
        </div>
        <div>
            <label>E-Mail</label>
            <input type="email" v-model="inputEmail"/>
        </div>
        <div>
            <button>Ajout Contacte</button>
        </div>     
    </form>
</template>

<script>
export default{
    emits:['add-contact'],
    data(){
        return{
            inputNom:'',
            inputPhone:'',
            inputEmail:'',
        };
    },
    methods: {
        EnvoieData(){
            this.$emit('add-contact',this.inputNom,this.inputPhone,this.inputEmail);
            
        }
    },

};
</script>



<style>

</style>
