//Function random conseiller de faire à l'extérieur car dans Vue ne se renouvelle pas 
function getValeurHasard(min,max){
    return Math.floor(Math.random()*(max-min)) + min;//Le * () détermine le maximum et minimum
}


const games = Vue.createApp({
    data(){
        return{
            vieJoueur:100,
            vieMonstre:100,
            countManche:0,
            gagnant:null,
            historique:[],
        }
    },
    methods: {
        startPartie(){
            this.vieJoueur=100;
            this.vieMonstre=100;
            this.countManche=0;
            this.gagnant=null;
            this.historique=[];
        },
        attaquerMonstre(){
            this.countManche++;
            const valeurdegat = getValeurHasard(5,12);
            this.vieMonstre-=valeurdegat;
            this.storyBataille('joueur','Attaque',valeurdegat);
            this.attaquerJoueur();
            
        },
        attaquerJoueur(){
            const valeurdegat = getValeurHasard(8,15);
            this.vieJoueur-=valeurdegat;
            this.storyBataille('monstre','Attaque',valeurdegat);
        },
        attaqueSpécialJ(){
            this.countManche++;
            const valeurdegat =  getValeurHasard(10,25);
            this.vieMonstre-=valeurdegat;
            this.storyBataille('joueur','SAttaque',valeurdegat);
            this.attaquerJoueur();
        },
        soinJoueur(){
            this.countManche++;
            const valeursoin =  getValeurHasard(8,20);
            if(this.vieJoueur+valeursoin>100){
                this.vieJoueur=100;
            }else{
                this.vieJoueur+=valeursoin;
            }
            this.storyBataille('joueur','Soin',valeursoin);
            this.attaquerJoueur();
        },
        abandonner(){
            this.gagnant='monstre';
        },
        storyBataille(Qui,Comment,Valeur){
            //unshift pour séparer en colonne
            this.historique.unshift({
                actionPar:Qui,
                actionType:Comment,
                actionValeur:Valeur});
        }
        
    },
    computed:{
        lifeBarM(){
            if(this.vieMonstre<0){
                return {width:'0%'};
            }
            return {width: this.vieMonstre +'%'};
        },
        lifeBarJ(){
            if(this.vieJoueur<0){
                return {width:'0%'};
            }
            return {width: this.vieJoueur +'%'};
        },
        useSAttaque(){
            return this.countManche % 3 !== 0 ;
        }
    },
    watch:{
        vieJoueur(value){
            if(value<=0&&this.vieMonstre<=0){
                //Nul
                this.gagnant='draw';
            }else if(value <=0){
                //Joueur perd
                this.gagnant='monstre';
            }
        },
        vieMonstre(value){
            if(value<=0&&this.vieJoueur<=0){
                //Nul
                this.gagnant='draw';
            }else if(value <=0){
                //Monstre 
                this.gagnant='joueur';
            }
        }
    }
});

games.mount('#game');

/* const monsters = Vue.createApp({
    data(){
        
    },
    methods: {
        
        
    },
    computed:{

    },
    watch:{
        
    }
});

monsters.mount('#monster');

const players = Vue.createApp({
    data(){
        
    },
    methods: {
        
        
    },
    computed:{

    },
    watch:{
        
    }
});

players.mount('#player');

const control = Vue.createApp({
    data(){
        
    },
    methods: {
        
        
    },
    computed:{

    },
    watch:{
        
    }
});


control.mount('#controls');

const logs = Vue.createApp({
    data(){
        
    },
    methods: {
        
        
    },
    computed:{

    },
    watch:{

    }
});


logs.mount('#log'); */