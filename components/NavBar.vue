<template>
      <div class="nav">
        <nuxt-link to="/" class="brand"><img src="~/assets/javivilchis-logo.png" width="40px" /> Real World Events</nuxt-link>
        <nav>
          <nuxt-link to="/">List</nuxt-link>&nbsp;|
          <nuxt-link to="/event/create">Create</nuxt-link> |
          <nuxt-link to="/universal">What is Universal Mode?</nuxt-link>
        </nav>
      </div>
    </template>
    
    <style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b0b9;
  text-decoration: none;
}
.brand img {
  width: 20px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b0b9;
  border-bottom: solid 2px #39b0b9;
}
.nav a {
  display: inline-block;
}
</style>