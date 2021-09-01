<template>
  <section>
    <base-card> <!--Slot très bonne feature au lieu dae passer dans le base card un props on précise une partie slot dans son component et tout ce qui est dans ça balise est le slot-->

      <template v-slot:header><!--Pour appeller le slot 
      shortland de v-slot = #nom par exemple #header or #default
      -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>

      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>

    </base-card>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['fullName', 'infoText', 'role'],
};
</script>
