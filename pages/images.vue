<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <!-- Header section -->
    <header class="bg-light text-center py-3">
      <h1>{{ title }}</h1>
    </header>

    <!-- Main content area with responsive images -->
    <main class="flex-grow-1 p-3">
      <div v-if="images.length" class="row">
        <div class="col-md-4" v-for="image in images" :key="image.id">
          <img :src="image.download_url" :alt="`Image by ${image.author}`" class="img-fluid" />
          <p>{{ image.author }}</p>
        </div>
      </div>
      <div v-else>
        <p>No images available.</p>
      </div>
    </main>

    <!-- Footer section -->
    <footer class="bg-light text-center py-3 mt-auto">
      <p>© 2024 Jason Xu. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Images Page',
      images: []
    };
  },
  async mounted() {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=10`);
      const data = await response.json();
      this.images = data; // Assign fetched data directly to images
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  },
  head() {
    return {
      title: 'Images - My Nuxt App',
      meta: [
        { hid: 'test description', name: 'test description', content: 'Exploring the images feature :)' }
      ]
    };
  }
};
</script>

<style scoped>
/* Basic styles for layout */
.container-fluid {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
}

.img-fluid {
  width: 100%;
  height: auto;
}

footer {
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
}
</style>
