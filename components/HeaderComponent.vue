<template>
  <header>
    <slot name="header">
      <h1>{{ title }}</h1> <!-- Dynamically display the title -->
    </slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: {
      type: String,
      default: 'Default Header' // Default value for the title prop
    }
  }
};
</script>

<style scoped>
/* Basic styling for header */
header {
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}
</style>
