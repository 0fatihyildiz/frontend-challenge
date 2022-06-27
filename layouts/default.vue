<template>
  <v-app id="inspire">
    <div class="main">
      <headerVue />
      <Nuxt />
      <footerVue />
    </div>
  </v-app>
</template>

<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    headerVue,
    footerVue,
  },
  data() {
    return {};
  },
};
</script>
