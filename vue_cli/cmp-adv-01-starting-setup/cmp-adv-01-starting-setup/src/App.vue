<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader/>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
<!--     <active-goals v-if="selectedComponent=== 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent=== 'manage-goals'"></manage-goals> -->
    <keep-alive> 
      <component :is="selectedComponent"/> 
    </keep-alive>
    <!--Comme son nom l'indique(keep alive) maintient les data du component en vie et ne pas mettre de component à l'intérieur --><!--Détermine le component qui sera dévoiler -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
//import BadgeList from './components/BadgeList.vue';
//import UserInfo from './components/UserInfo.vue';
//import CourseGoal from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components:{
    /* 'the-header': TheHeader*/
    TheHeader, //soit juste le nom du compo ou une valeur name qui prend data du compo //Toujours en Pascal Case
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent=cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>