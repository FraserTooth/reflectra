<template>
  <div id="resultPanel">
    <!-- Login Name -->
    <!-- <p>{{ username }}</p> -->

    <v-row>
      <v-col cols="3">
        <!-- News -->
        <h1>News</h1>
        <newsList />
      </v-col>

      <!-- The other components -->
    </v-row>
  </div>
</template>

<script>
import NewsList from "./NewsList";

export default {
  name: "ResultPanel",
  components: {
    newsList: NewsList,
  },
  data: () => ({
    username: "",
  }),
  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username;
    }
  },
};
</script>

<style scoped></style>
