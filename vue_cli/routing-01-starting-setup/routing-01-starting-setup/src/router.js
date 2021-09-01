import {createRouter,createWebHistory} from 'vue-router';

import TeamList from './views/TeamsList.vue';
import UserList from './views/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './views/NotFound.vue';
import TeamFooter from './views/TeamFooter.vue';
import UserFooter from './views/UsersFooter.vue';

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: [
        {path:'/',redirect:'/Teams'}, //Soit de cette manière pour path par défaut 
        {
            name:'Team',
            path:'/Teams',
            meta:{needsAuth:true},
            components:{default:TeamList, footer:TeamFooter},
            children: [
            {name:'team-members',path:':teamId', component:TeamMembers, props:true},
            ]//Nested route utilise pour complexe route
        },// alias:'/'ou on défini défaut grace à allias mais pas très réputé en fonction de l'app 
        {
            path:'/User',
            components:{default:UserList,footer:UserFooter},
            beforeEnter(to,from,next){
                console.log('User Before Enter')
                console.log(to,from);
                next();
            }
        },

        {path:'/:notFound(.*)',component:NotFound},//pour gérer invalide url
    ],// short for `routes: routes`
    linkActiveClass:'active',
    scrollBehavior(de,vers,positiongarder){
        //console.log(de,vers,positiongarder);
        if(positiongarder){
            return positiongarder;
        }
        return{left:0,top:0};
    }
});

//Navigation guards permet de sécurisé certains route c'est à dire les rendre inacessible 
router.beforeEach(function(de,vers,suivant){
    console.log('Le Global Before Each')
    console.log(de,vers);
    if(de.meta.needsAuth){
        console.log('Besoin d\'être authentifier !');
        suivant();
    }else{
        suivant();
    }
    // if(de.name==='team-members'){
    //     suivant();
    // }else{
    //     suivant({name:'team-members',params:{teamId:'t2'}});
    // }
    
    
});
//=====

router.afterEach(function(de,vers){
    //Sending analytics data
    console.log('Le Global After Each');
    console.log(de,vers);
});

export default router;