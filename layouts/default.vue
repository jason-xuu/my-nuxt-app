<template>
  <div id="app">
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/accordion">Accordion</nuxt-link>
      <nuxt-link to="/grid">Grid</nuxt-link>
      <nuxt-link to="/images">Images</nuxt-link>
    </nav>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
