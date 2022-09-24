<template>
  <!-- <router-view /> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="nav-link logo" to="/"> 吉小廚</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li> -->
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">菜名搜菜</a> -->
            <router-link class="nav-link option" to="/"> 菜名搜菜</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">食材搜菜</a> -->
            <router-link class="nav-link option" to="/Ingredient">
              食材搜菜</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import Filters from "./components/Filters.vue";
import Posts from "./components/Posts.vue";

// import MOCK_DATA from "./MOCK_DATA.json";
import NEW_DATA from "./NEW_DATA.json";

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
  // computed: {
  //   filteredPosts: {
  //     get () {
  //       return this.posts
  //     },
  //     set () {
  //       this.posts = MOCK_DATA
  //       const results = this.posts.filter((post) => {
  //         if (this.type === "filter") {
  //           return post.category === this.str
  //         } else {
  //           return post.title.toLowerCase().includes(this.str.toLowerCase())
  //         }
  //       })
  //       this.posts = results
  //     }
  //   }
  // },
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
        return post.name.toLowerCase().includes(term.toLowerCase());
      });
    },
    resetPosts() {
      this.posts = NEW_DATA;
    },
  },
};
</script>

<style scoped>
.option {
  color: aliceblue;
}
.logo {
  color: #fa8072;
  font-size: 1.5rem;
}
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
