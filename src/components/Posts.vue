<template>
  <h1>Posts</h1>

  <div class="container">
    <div class="row">
      <div class="col" v-for="post in posts" :key="post.id">
        <div class="card" style="width: 18rem">
          <img :src="post.imageURL" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ post.name }}</h5>
            <p
              class="card-text"
              v-for="(step, index) in post.steps"
              :key="index"
            >
              {{ index + 1 }}. {{ step }}
            </p>
            <a href="#" class="btn btn-primary">詳細資訊</a>
          </div>
        </div>
      </div>
    </div>

    <!-- <h2>{{ post.title }}</h2> -->
    <!-- <p>{{ post.description }}</p> -->
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>
