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
        at_published: "2019-11-20T01:55:00.0000000Z",
      },
      {
        title: "TITLE2",
        text: "text2...",
        url: "https://vuetifyjs.com/ja/components/cards",
        at_published: "2019-11-10T21:22:00.0000000Z",
      },
      {
        title: "TITLE3",
        text: "text3...",
        url: "https://vuetifyjs.com/ja/components/cards",
        at_published: "2019-11-15T13:01:00.0000000Z",
      },
    ],
  }),
};
</script>

<style scoped></style>
