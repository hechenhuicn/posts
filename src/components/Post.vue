<template>
    <div class="my-5">
        <h1 class="display-1 my-5">
            {{ post.title }}
        </h1>
        <img
            :src="post.imageUrl"
            :alt="post.title"
            class="rounded w-100 my-3"
        >
        <div>
            {{ post.description }}
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Post',
  data() {
      return {
          post:{}
      }
  },
  created() {
      axios.get(`http://localhost:4000/posts/${this.$route.params.id}`)
        .then(response => {
            // window.console.log(response);
            this.post=response.data;
        })
        .catch(error => {
            window.console.log(error)
        })
  }
}
</script>