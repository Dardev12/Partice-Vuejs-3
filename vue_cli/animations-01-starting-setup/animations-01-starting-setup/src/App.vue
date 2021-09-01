<template>
  <div class="container">
    <div class="block" :class="{animate:animateBlock}"></div>
    <button @click="animateaBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para">
    <p v-if="paraIsVisible">Un paragraphe...</p>      
    </transition>
    <button @click="showPara">Toggle para para</button>
  </div>
  <div class="container">
    <transition name="fade-bouton" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show</button>
      <button @click="hideUsers" v-else>Hide</button>
    </transition>

  </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      animateBlock:false,
      dialogIsVisible: false ,
      paraIsVisible:false,
      usersAreVisible:false
      };
  },
  methods: {
    showUsers(){
      this.usersAreVisible=true;
    },
    hideUsers(){
      this.usersAreVisible=false;
    },
    showPara(){
      this.paraIsVisible= !this.paraIsVisible;
    },
    animateaBlock(){
      this.animateBlock=true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition:transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

.para-enter-from{
  /* opacity: 0;
  transform: translateY(-30px); */
}

.para-enter-active{
  /* transition: all 0.3s ease-out; */
  animation: slide-scale 0.3s ease-out;
}

.para-enter-to{
  /* opacity: 1;
  transform: translateY(0); */

}

.para-leave-from{
  /* opacity: 1;
  transform: translateX(0); */
}

.para-leave-active{
 /*  transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
}

.para-leave-to{
  /* opacity: 1;
  transform: translateX(30px); */
}

.modal-enter-from{
  /* opacity: 0;
  transform: translateY(-30px); */
}

.modal-enter-active{
  /* transition: all 0.3s ease-out; */
  animation: modal 0.3s ease-out;
}

.modal-enter-to{
  /* opacity: 1;
  transform: translateY(0); */

}

.modal-leave-from{
  /* opacity: 1;
  transform: translateX(0); */
}

.modal-leave-active{
 /*  transition: all 0.3s ease-in; */
  animation: modal 0.3s ease-out;
}

.modal-leave-to{
  /* opacity: 1;
  transform: translateX(30px); */
}

.fade-button-enter-from,
.fade-button-leave-from{
   opacity: 0;
  /*transform: translateY(-30px); */
}

.fade-button-enter-active
{
  /* transition: all 0.3s ease-out; */
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to
.fade-button-leave-to{
   opacity: 1;
  /*transform: translateY(0); */

}
@keyframes modal{
  from{
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-scale{
  0%{
    transform: translateX(0) scale(1);
  }

  70%{
    transform: translateX(-120px) scale(1.1);
  }

  100%{
    transform: translateX(-150px) scale(1);
  }
}
</style>