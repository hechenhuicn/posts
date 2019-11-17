<template>
  <div>
    <bNavbar class="navbar navbar-light bg-light fixed-top">
      <div class="container">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-brand">
          HeChenhui
        </router-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              :to="{ name: 'Posts' }"
              class="nav-link">Posts
            </router-link>
          </li>
        </ul>
      </div>
    </bNavbar>
  </div>
</template>

<style>
.navbar-brand {
  letter-spacing: 2px;
  font-weight: bold;
}

.navbar-light .navbar-nav .nuxt-link-active,
.navbar-light .navbar-nav .nuxt-link-active:focus {
  color: #000;
}
</style>