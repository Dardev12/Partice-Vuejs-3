<template>
    <base-card>
        <base-button 
        @click="setSelectedTab('stock-ressource')" 
        :mode="storedResButtonMode">Memo Stockez</base-button>
        <base-button 
        @click="setSelectedTab('ajout-ressource')" 
        :mode="addResButtonMode">Ajout ressource</base-button>
    </base-card>

    <keep-alive>
        <component :is="selectedTab"/>
    </keep-alive>
    
</template>

<script>
import StockRessource from './StockRessource.vue';
import AjoutRessource from './AjoutRessource.vue';
export default {
    components:{
        StockRessource,
        AjoutRessource,
    },
    data(){
        return{
            selectedTab:'stock-ressource',
            stockResources:[
                {
                    id:'guide-officiel',
                    title:'Guide Officiel',
                    description:'Doc Officiel de Vue.js',
                    link:'https://vuejs.org',
                },
                {
                    id:'google',
                    title:'Google',
                    description:'Google Partout',
                    link:'https://google.org',
                },
            ]
        };
    },
    provide(){
        return{
            ressource:this.stockResources,
            ajout:this.addRessource,
            remove:this.removeRessource
        }
    },
    computed:{
        storedResButtonMode(){
            return this.selectedTab==='stock-ressource' ? null :'flat';
        },
        addResButtonMode(){
            return this.selectedTab==='ajout-ressource' ? null :'flat';
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab=tab;
        },
        addRessource(titre,description,link){
            const nouveauxRes={
                id:new Date().toISOString(),
                title:titre,
                description:description,
                link:link,
            };
            this.stockResources.unshift(nouveauxRes);
            this.selectedTab='stock-ressource';
        },
        removeRessource(resId){
            const resIndex=this.stockResources.findIndex((res)=>res.id===resId);
            this.stockResources.splice(resIndex,1);
        }
    },
    
}
</script>

<style scoped>

</style>