const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value; //ref fait le café
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  //unmount utile aussi
});

app.mount('#app');
