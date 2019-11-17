<template>
  
    <div class="container">
        <h1 class="display-4">
          <router-link to="/posts">HeChenhui</router-link>
        </h1>
    </div>
    
</template>


<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>