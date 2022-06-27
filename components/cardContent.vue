<template>
  <div class="card-main">
    <div class="card-container" v-if="processedData.length > 0">
      <card v-for="card in processedData" :key="card.id" :data="card" />
    </div>
    <div class="errors" v-if="!processedData.length">
      <div class="title">Filtreyle eşleşen hiçbir NFT bulunamıyor.</div>
    </div>
    <div class="pagination" v-if="prePaginatedData.length / page_size > 1">
      <v-pagination v-model="page" :length="numberOfPages" color="indigo" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import commonMixin from "../mixins/common.mixin";

export default {
  mixins: [commonMixin],
  props: {
    pageProp: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      page: 1,
      page_size: 6,
    };
  },
  created() {
    if (this.pageProp) this.page = this.pageProp;
  },
  mounted() {
    this.$nextTick().then(() => {
      if (!this.processedData.length && this.prePaginatedData.length)
        this.page = 1;
    });
  },
  watch: {
    page() {
      this.setQuery({ page: this.page });
    },
    "$route.query.page"(page) {
      this.page = +page;
    },
  },
  computed: {
    ...mapState(["nftData"]),
    numberOfPages() {
      return Math.ceil(this.prePaginatedData.length / this.page_size);
    },
    processedData() {
      return this.paginateData(
        this.prePaginatedData,
        +this.page,
        this.page_size
      );
    },
    prePaginatedData() {
      const query = this.$route.query;
      ["image", "video"].forEach(
        (p) => (query[p] = query[p] ? query[p] === "true" : undefined)
      );
      ["minPrice", "maxPrice"].forEach(
        (p) => (query[p] = !isNaN(+query[p]) ? +query[p] : undefined)
      );
      return this.sort(
        this.filter(this.nftData, query),
        query.sortBy,
        query.sortOrder === "asc"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.card-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 795px;

  .errors {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .card-container {
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 384px 384px 384px;

    @media screen and (max-width: $lg) {
      grid-template-columns: auto auto auto;
    }

    @media screen and (max-width: $md) {
      grid-template-columns: auto auto;
    }

    @media screen and (max-width: $sm) {
      grid-template-columns: auto;
    }
  }

  .pagination {
    padding-top: 4rem;
  }
}
</style>
