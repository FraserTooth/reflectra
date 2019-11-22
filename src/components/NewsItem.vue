<template>
  <div id="newItem">
    <v-card class="mx-auto card" color="transparent" outlined>
      <v-card-text class="white--text pb-0">
        <v-row>
          <div>{{ news.datePublished | dateFilter }}</div>
        </v-row>
        <v-row>
          <div>
            {{ news.provider[0].name }}
          </div>
        </v-row>

        <v-row>
          <!-- <v-col cols="2" align="center" justify="center">
            <v-img
              class="white--text align-end"
              :height="100"
              :width="100"
              :src="news.image.thumbnail.contentUrl"
            >
            </v-img>
          </v-col> -->
          <!-- <v-col cols="10"> -->
          <a :href="news.url" target="_blank" rel="noopener noreferrer">
            <h3 class="mb-0">{{ news.name }}</h3>
          </a>
          <!-- </v-col> -->
        </v-row>
        <!-- <div>{{ news.description }}</div> -->
        <!-- <a :href="news.url" target="_blank" rel="noopener noreferrer">
          <v-btn text color="white">Link</v-btn>
        </a> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: ["news"],
  data: () => ({}),
  filters: {
    dateFilter: (date) => {
      return date.slice(0, 10);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:link {
  color: white;
}
a:visited {
  color: white;
}
a:hover {
  color: #bccc2a;
}
a:active {
  color: #bccc2a;
}
img {
  width: 40px;
  height: 40px;
}
</style>
