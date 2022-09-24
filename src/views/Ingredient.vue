<template>
  <div class="container">
    <div class="half">
      <Filters
        :filterPosts="filterPosts"
        :search="search"
        :filteredPosts="filteredPosts"
      />
    </div>
  </div>
  <div class="container">
    <div class="half">
      <Posts :posts="posts" />
    </div>
  </div>
</template>

<script>
import Filters from "../components/Filters.vue";
import Posts from "../components/Posts.vue";

// import MOCK_DATA from "./MOCK_DATA.json";
import NEW_DATA from "../NEW_DATA.json";

export default {
  name: "App",
  components: {
    Filters,
    Posts,
  },
  data() {
    return {
      // posts: MOCK_DATA,
      posts: NEW_DATA,
      str: "",
      type: "",
    };
  },

  methods: {
    filterPosts(catName) {
      this.resetPosts();
      if (catName !== "All") {
        this.posts = this.posts.filter((post) => {
          // return post.category === catName;
          return post.name === catName;
        });
      }
    },
    search(term) {
      this.resetPosts();
      this.posts = this.posts.filter((post) => {
        // return post.title.toLowerCase().includes(term.toLowerCase());
        for (let i = 0; i < 3; i++) {
          if (post.steps[i].includes(term)) {
            return true;
          }
        }
        // console.log(post.ingredients);
        // return post.steps.toLowerCase().includes(term.toLowerCase());
      });
    },
    resetPosts() {
      this.posts = NEW_DATA;
    },
  },
};
</script>

<style scoped>
#app {
  width: 100%;
}
.container {
  display: flex;
  /* margin: 20px; */
}
.half {
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
