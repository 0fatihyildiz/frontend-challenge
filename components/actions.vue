<template>
  <div class="actions">
    <v-select
      v-model="sortVal"
      :items="sortData"
      class="vuetify-combobox"
      placeholder="Sırala"
      color="indigo"
      item-color="indigo"
      elevation="0"
      solo
      dense
      hide-details
    ></v-select>
    <v-btn icon color="gray" @click="$store.commit('setDialog', true)">
      <v-icon>mdi-filter</v-icon>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  z-index: 20;

  .vuetify-combobox {
    width: 12rem;
  }
}
</style>

<script>
import commonMixin from '../mixins/common.mixin';

export default {
  mixins: [commonMixin],
  data() {
    return {
      dialog: false,
      sortVal: "default",
      sortData: [
        { text: "Sırala", value: "default" },
        { text: "En yeni", value: "date.desc" },
        { text: "En eski", value: "date.asc" },
        { text: "En pahalı", value: "price.desc" },
        { text: "En ucuz", value: "price.asc" },
      ],
    };
  },
  created() {
    const { sortBy, sortOrder } = this.$route.query;
    if (!sortBy || sortBy === "id") return;
    this.sortVal = `${sortBy}.${sortOrder}`;
  },
  watch: {
    sortVal(val) {
      let sortBy = val.split(".")[0];
      let sortOrder = val.split(".")[1];
      if (val === "default") {
        sortBy = "id";
        sortOrder = "asc";
      }
      this.setQuery({ sortBy, sortOrder });
    },
  },
};
</script>
