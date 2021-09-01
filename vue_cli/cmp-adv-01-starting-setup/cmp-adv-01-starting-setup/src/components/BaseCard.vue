<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header">
                <h2>Defaut</h2><!--Si rien mi dans ce slot, il mets ceci à la place-->
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    //On peut nommer slot pour préciser à vue sur quoi il doit agir comme slot
    mounted(){
        console.log(this.$slots.header);
    }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
