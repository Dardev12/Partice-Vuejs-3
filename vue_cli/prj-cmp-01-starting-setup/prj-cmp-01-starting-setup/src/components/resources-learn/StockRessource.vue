<template>
    
    <ul>
        <item-ressource 
        v-for="res in ressource" 
        :key="res.id" 
        :id="res.id"
        :title="res.title" 
        :description="res.description" 
        :link="res.link"></item-ressource>
    </ul>
</template>

<script>
import ItemRessource from './ItemRessource.vue';

export default {
    inject:['ressource'],
    components:{
        ItemRessource
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>