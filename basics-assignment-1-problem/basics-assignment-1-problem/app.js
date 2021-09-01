const app = Vue.createApp({
    data(){
        return{
            Linkimage:'https://th.bing.com/th/id/OIP.e0blm0QCJwYFWhbyjMHH6AAAAA?pid=ImgDet&rs=1',
            nom:'Darren',
            age:19,
            hasard:null
        };
    },
    methods:{
        nombrehasard(){
            const Pif=Math.random();
            this.hasard=Pif;
            return this.hasard;
        },

    }

});

app.mount("#assignment")