<template>
  <div id="resultPanel">
    <v-container>
      <!-- Login Name -->
      <p>{{ username }}</p>

      <!-- News -->
      <newsList />

      <!-- The other components -->
    </v-container>
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
