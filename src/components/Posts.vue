<template>
    <div>
        <h1 class="display-1 my-5">Posts</h1>
        <div class="row justify-content-center">
            <div
                v-for="post in posts"
                :key="post.id"
                class="col-md-6"
            >
                <div class="card my-3">
                      <router-link :to="{ name: 'Post', params: {id: post.id } }">
                      <img
                          :src="post.imageUrl"
                          :alt="post.title"
                          class="card-img-top"
                      >
                      <div class="card-body">
                          <h5 class="card-title">{{ post.title }}</h5>
                          <h6 class="card-subtitle mb-2 text-black-50">{{ post.author }}</h6>
                      </div>
                      </router-link>
                      <div class="card-footer">
                          <button
                              class="btn btn-link"
                              @click="destroyAction(post.id)">Delete
                          </button>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  created() {
        axios.get(`http://localhost:4000/posts`)
            .then(response => {
                // 用了eslint所以要加window
                // window.console.log(response)
                this.$store.commit('setList', response.data)
            })
  },
  computed: {
      posts() {
          return this.$store.state.list
      }
  },
  methods: {
      destroyAction(id) {
          this.$store.dispatch('destroyAction', id)
      }
  }
}
</script>