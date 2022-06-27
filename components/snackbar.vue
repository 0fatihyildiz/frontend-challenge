<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="$store.getters.getSnackbar.show">
      {{ $store.getters.getSnackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="$store.commit('setSnackbar', {show: false})">
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
    
}
</script>