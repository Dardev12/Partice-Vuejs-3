<template>
    <li>
        <h2>{{Name}} {{isFavorite ?'(Favorite)':''}}</h2>
        <button @click="enleverDetails">{{detailVisible === false ? 'Show' :'Hide'}}Details</button>
        <button @click="enleverFavorite">{{isFavorite ? 'Enlever' :'Ajouter'}} Favoris</button>
        <ul v-if="detailVisible">
            <li><strong>Phone:</strong> {{Phone}}</li>
            <li><strong>Email:</strong> {{Email}}</li>
        </ul>
        <button @click="this.$emit('delete-friend',Id)">Supprimer Ami(e)</button>
    </li>
</template>

<script>

    export default{
        emits:['enlever','delete-friend'],
        /* emits:{
            'enlever-favoris':function(id){
                if(id){
                    return true;
                }else{
                    console.warn('Id est introuvable');
                    return false;
                }
            }
        },
        Gestion d'erreur */
        data(){
            return{
                detailVisible:false,
            }
        },
        methods: {
            enleverDetails(){
                this.detailVisible= !this.detailVisible;
            },
            enleverFavorite(){
                this.$emit('enlever',this.Id);//$emit permet communication to parent compo (permier arg 'nom ', deuxième arg la variable id concerné)
            }
        },
       /*  props:[
            'Id',
            'Name',
            'Phone',
            'Email',
            'isFavorite'
        ] */
        props:{
            //Details props utile pour travail en team
            //Props supporte String,Number,Boolean,Array,Object,Date,Function,Symbol
            Id:{
                type:String,
                required:true
            },
            Name:{
                type:String,
                required:true
            },
            Phone:{
                type:String,
                required:true
            },
            Email:{
                type:String,
                required:true
            },
            isFavorite:{
                type:Boolean,
                required:false,//peut ou ne peut pas être obligatoire
                default:false,//ou on peut mettre fonction pour default
                /* validator:function(value){
                    return value==='1' || value==='0';
                } */
            },
        }
    };
</script>
