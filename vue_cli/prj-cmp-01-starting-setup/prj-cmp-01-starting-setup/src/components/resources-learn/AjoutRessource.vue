<template>
    <base-dialog v-if="inputInvalid" title="Caractère invalide" @close="confirmErreur">
        <template #default>
            <p>Ça marche pas ta tapé une connerie réssaie</p>
        </template>
        <template #actions>
            <base-button @click="confirmErreur">Okay!!</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="envoieData">
            <div class="form-control">
                <label for="title">Titre</label>
                <input id="title" name="title" type="text" ref="titreInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description"  rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Lien</label>
                <input id="link" name="link" type="url" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Ajout Memo</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject:['ajout'],
    data(){
        return{
            inputInvalid:false
        };
    },
    methods: {
        envoieData(){
            const enteredTitle=this.$refs.titreInput.value;
            const enteredDesc=this.$refs.descInput.value;
            const enteredLink=this.$refs.linkInput.value;
            if(enteredTitle.trim()===''||enteredDesc.trim()===''||enteredLink.trim()===''){
                return this.inputInvalid=true;
            }else{
                
                return this.ajout(enteredTitle,enteredDesc,enteredLink);
            }
            
        },
        confirmErreur(){
            this.inputInvalid=false;
        }

    },
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>