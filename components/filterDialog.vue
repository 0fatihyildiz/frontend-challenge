<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.getters.getDialog"
      @click:outside="$store.commit('setDialog', false)"
      scrollable
      max-width="300px"
    >
      <v-card>
        <v-card-title>Filtre</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px" class="content">
          <div>
            <div class="content__label">Fiyat Aralığı</div>
            <div class="inputs">
              <v-text-field
                v-model="minPrice"
                placeholder="min eg: 1000"
                :rules="[priceRules]"
                color="indigo"
                class="input"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="maxPrice"
                placeholder="max eg: 4000"
                :rules="[priceRules]"
                color="indigo"
                class="input"
                clearable
              ></v-text-field>
            </div>
          </div>
          <div>
            <div class="content__label">Tür</div>
            <v-checkbox
              v-model="type"
              label="Resim"
              value="image"
              color="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="type"
              label="Video"
              value="video"
              color="indigo"
              hide-details
            ></v-checkbox>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="action">
          <v-btn
            color="indigo darken-1"
            @click="$store.commit('setDialog', false)"
            text
          >
            iptal
          </v-btn>
          <v-btn color="indigo darken-1" @click="setFilter" text> filtrele </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style lang="scss" scoped>
.content {
  &__label {
    font-size: 14px;
    font-weight: 600;
    margin: 10px 0;
  }
  .alert {
    padding: 0;
  }
  .inputs {
    display: flex;
    gap: 10px;

    .input {
      margin: 0;
    }
  }
}

.action {
  display: flex;
  justify-content: flex-end;
}
</style>

<script>
import { mapState } from "vuex";
import commonMixin from "../mixins/common.mixin";

export default {
  mixins: [commonMixin],
  data() {
    return {
      type: [],
      items: [],
      minPrice: null,
      maxPrice: null,
    };
  },
  created() {
    const { image, video, minPrice, maxPrice } = this.$route.query;
    image && this.type.push("image");
    video && this.type.push("video");
    if (!image && !video) this.type = ["image", "video"];
    if (minPrice) this.minPrice = +minPrice;
    if (maxPrice) this.maxPrice = +maxPrice;
  },
  methods: {
    setFilter() {
      const query = {};
      query.image = this.type.includes("image");
      query.video = this.type.includes("video");
      query.minPrice = this.minPrice ?? undefined;
      query.maxPrice = this.maxPrice ?? undefined;
      query.page = 1;
      if ((this.minPrice || this.maxPrice) && (this.minPrice > +this.maxPrice))
        return this.$store.commit("setSnackbar", {show: true, text: "Min fiyat max fiyatdan büyük olamaz",});
      this.$store.commit("setDialog", false);
      this.setQuery(query);
    },
    priceRules(v) {
      return (
        ((typeof +v === "number" && !isNaN(v)) ||
          "Fiyat değeri sayı olmalıdır.") &&
        (v >= 0 || "Fiyat değeri pozitif olmalıdır.")
      );
    },
  },
};
</script>
