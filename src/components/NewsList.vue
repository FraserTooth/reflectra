<template>
  <div id="newsList">
    <div v-for="item in dummyNews" :key="item.url">
      <newsItem :news="item" class="mb-2" />
    </div>
  </div>
</template>

<script>
import NewsItem from "./NewsItem";

export default {
  name: "NewsList",
  components: {
    newsItem: NewsItem,
  },
  data: () => ({
    dummyNews: [
      {
        title: "TITLE1",
        text: "text1...",
        url: "https://vuetifyjs.com/ja/components/cards",
      },
      {
        title: "TITLE2",
        text: "text2...",
        url: "https://vuetifyjs.com/ja/components/cards",
      },
      {
        title: "TITLE3",
        text: "text3...",
        url: "https://vuetifyjs.com/ja/components/cards",
      },
    ],
  }),
};
</script>

<style scoped></style>
