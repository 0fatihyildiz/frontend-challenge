<template>
  <div class="header">
    <div class="content">
      <v-skeleton-loader type="button"></v-skeleton-loader>
      <v-skeleton-loader type="avatar"></v-skeleton-loader>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  z-index: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;

  .content {
    max-width: 80rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
