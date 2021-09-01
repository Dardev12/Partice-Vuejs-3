import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';


const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

//Si on place tout nos component ici, lorsque on vas sur le site il telecharge tout les components ce qui peut poser problème si grosse App
//Faire attention à bien gérer ces fichier Css
app.mount('#app');
