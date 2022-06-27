<template>
  <div class="main">
    <div class="main__content">
      <Snackbar/>
      <filterDialog />
      <div class="main__content__title">
        <div class="main__content__title__content">
          <h2>Basic challenge</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <actions />
      </div>
      <cardContent :pageProp="page" />
    </div>
  </div>
</template>

<script>
export default {
    name: "IndexPage",
    async asyncData({ store, query }) {
        await store.dispatch("getNft");
        return { page: +query.page };
    },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 2rem;

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 80rem;
    margin: 0 auto;
    height: 100%;

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      width: 100%;

      @media screen and (max-width: $md) {
        flex-direction: column;
        align-items: flex-start;
      }

      &__content {
        max-width: 64rem;

        h2 {
          font-weight: 500;
        }

        p {
          margin-top: 0.5rem;
          line-height: 1.5;
          color: gray;
          font-weight: 200;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
