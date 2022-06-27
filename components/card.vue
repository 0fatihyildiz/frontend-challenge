<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card class="card">
      
      <div class="card-img">
        <v-img
          class="img-card"
          v-if="hover && data.type == 'video'"
          height="250"
          :src="data.gif"
        ></v-img>
        <v-img height="250" :src="data.img"></v-img>
      </div>
      <div v-if="data.type == 'video'" class="card-badge">video</div>
      <div class="card__title">
        <v-card-title class="title">{{ data.name }}</v-card-title>
        <div class="price">${{ data.price }}</div>
      </div>
      <div class="card__bottom">
        <div class="date">{{ dateFormating(data.date) }}</div>
        <div class="description">
          {{ data.description }}
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    dateFormating(date) {
      return new Date(date).toString().split(" ").slice(1, 4).join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  height: fit-content;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1) !important;
  max-width: 384px;
  width: 100%;
  position: relative;

  .card-badge{
    background-color: #00000054;
    color: rgba(255, 255, 255, 0.612);
    padding: 0.2rem 0.5rem 0.3rem 0.6rem;
    font-size: 1rem;
    border-radius: 0 0 0 .5rem;
    position: absolute;
    top: 0;
    right: 0;
    font-weight: bold;
    font-variant: small-caps;
  }

  .card-img{
    display: relative; 
    height: 250px; 
    width: 100%;

    .img-card{
      position: absolute; 
      z-index: 10; 
      width:100%;
    }
  }

  @media screen and (max-width: $sm) {
    max-width: 100%;
  }

  &__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.1rem 0 1.1rem;
    margin: 0;

    .title {
      flex-shrink: 0;
      padding: 0;
    }

    .price {
      font-size: 16px;
      font-weight: 600;
      color: #3f51b5;
    }
  }
  &__bottom {
    padding: 0.5rem 1.1rem 1.1rem;
    margin: 0;

    .date {
      margin-top: -10px;
      font-size: 12px;
    }

    .description {
      margin-top: 10px;
      font-size: 14px;
      font-weight: medium;
      color: gray;
    }
  }
}
</style>
