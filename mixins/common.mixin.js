export default {
  methods: {
    paginateData(array, page_number, page_size) {
      page_number--;
      return array.slice(
        page_number * page_size,
        page_number * page_size + page_size
      );
    },
    filter(
      array,
      { image = true, video = true, minPrice = 0, maxPrice = Infinity }
    ) {
      return array.filter((item) => {
        return (
          ((item.type === "image" && image) ||
            (item.type === "video" && video)) &&
          item.price >= minPrice &&
          item.price <= maxPrice
        );
      });
    },
    sort(array, prop, isAscending) {
      if (prop === "date")
        array.map((i) => (i.date = new Date(i.date).getTime()));
      if (prop === "id") array.map((i) => (i.id = +i.id));
      return array.sort((a, b) => {
        if (a[prop] < b[prop]) return isAscending ? -1 : 1;
        if (a[prop] > b[prop]) return isAscending ? 1 : -1;
        return 0;
      });
    },
    setQuery(query) {
      this.$router.push({
        query: {
          ...this.$route.query,
          ...query,
        },
      });
    },
  }
};