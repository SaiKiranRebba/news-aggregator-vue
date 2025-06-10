<template>
  <div class="header">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/category/technology">Technology</router-link>
      <router-link to="/category/business">Business</router-link>
      <router-link to="/category/sports">Sports</router-link>
      <router-link to="/search">Search</router-link>
    </nav>
    <button class="btn toggle-btn" @click="toggleDarkMode">
      {{ isDark ? "Light Mode" : "Dark Mode" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
  components: {},
  mounted() {
    this.isDark = localStorage.getItem("darkMode") === "true";
    this.updateTheme();
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem("darkMode", this.isDark);
      this.updateTheme();
    },
    updateTheme() {
      document.body.classList.toggle("dark-mode", this.isDark);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: var(--card-bg);
}
.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--card-bg);
}
.navbar a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: var(--primary-color);
  color: var(--bg-color);
}
.navbar a.router-link-exact-active {
  background-color: var(--primary-hover);
}
</style>
