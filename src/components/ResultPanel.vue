<template>
  <div id="resultPanel">
    <!-- Login Name -->
    <!-- <p>{{ username }}</p> -->

    <v-row>
      <v-col cols="3">
        <!-- News -->
        <h1>
          <v-icon color="white" class="ml-2 mr-2 mb-1">far fa-newspaper</v-icon
          >News
        </h1>
        <v-divider dark></v-divider>
        <newsList />
      </v-col>

      <v-col cols="6"></v-col>

      <!-- The other components -->
      <v-col cols="3">
        <!-- Weather -->
        <h1>
          <v-icon color="white" class="ml-2 mr-2 mb-1">fas fa-cloud-sun</v-icon
          >Weather
        </h1>
        <v-divider dark></v-divider>
        <v-card class="mx-auto card" color="transparent" outlined>
          <h1>Dummy</h1>
          <h1>Dummy</h1>
          <h1>Dummy</h1>
        </v-card>

        <!-- Other contents -->
        <h1>
          <v-icon color="white" class="ml-2 mr-2 mb-1">fas fa-cloud-sun</v-icon
          >Other Contents
        </h1>
        <v-divider dark></v-divider>
        <v-card class="mx-auto card" color="transparent" outlined> </v-card>
      </v-col>
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
