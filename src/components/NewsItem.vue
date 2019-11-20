<template>
  <div id="newItem">
    <v-card class="mx-auto">
      <v-card-text>
        <div>2019-11-19</div>
        <p class="display-1 text--primary">{{ news.title }}</p>
        <div class="text--primary">{{ news.text }}</div>
      </v-card-text>
      <v-card-actions>
        <a :href="news.url" target="_blank" rel="noopener noreferrer">
          <v-btn text color="deep-purple accent-4">Learn More</v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: ["news"],
  data: () => ({}),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
