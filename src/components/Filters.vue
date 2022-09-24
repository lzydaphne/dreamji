<template>
  <div class="little">
    <h1>Search</h1>
    <div class="container-fluid">
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="search"
          v-model="term"
          @keypress.enter.prevent="search(term)"
        />
        <button
          class="btn btn-outline-success"
          type="submit"
          @click.prevent="search(term)"
        >
          Search
        </button>
      </form>
    </div>
    <!-- <label for="search">
      Search
      <input
        class="little"
        id="search"
        v-model="term"
        @keypress.enter="search(term)"
      />
    </label> -->
  </div>

  <!-- <p v-for="filter in filters" :key="filter" @click="() => filterPosts(filter)">
    {{ filter }}
  </p> -->
</template>

<script>
const filters = ["All", "HVAC", "Overhead Doors"];

export default {
  props: ["filterPosts", "search", "filteredPosts"],
  data() {
    return {
      filters,
      term: "",
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
}
.little {
  width: 100%;
  margin-bottom: 50px;
  margin-top: 20px;
}
</style>
