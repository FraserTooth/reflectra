<template>
  <div id="newItem">
    <v-card class="mx-auto">
      <v-card-text>
        <div>{{ news.datePublished }}</div>
        <div>
          {{ news.provider[0]["0"].name }}
        </div>

        <v-row>
          <v-col cols="2" align="center" justify="center">
            <v-img
              class="white--text align-end"
              :height="100"
              :width="100"
              :src="news.image.thumbnail.contentUrl"
            >
            </v-img>
          </v-col>
          <v-col cols="10">
            <p class="display-1 text--primary">{{ news.name }}</p>
          </v-col>
        </v-row>
        <div class="text--primary">{{ news.description }}</div>
      </v-card-text>
      <v-card-actions>
        <a :href="news.url" target="_blank" rel="noopener noreferrer">
          <v-btn text color="deep-purple accent-4">Link</v-btn>
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
img {
  width: 40px;
  height: 40px;
}
</style>
