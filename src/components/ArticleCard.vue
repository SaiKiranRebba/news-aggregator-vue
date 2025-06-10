<template>
  <div class="card">
    <img :src="article.urlToImage" alt="Article image" loading="lazy" />
    <h3 class="clamp-2">{{ article.title }}</h3>
    <p>
      <strong>{{ article.source.name }}</strong> -
      {{ formatDate(article.publishedAt) }}
    </p>
    <p v-if="article.description" class="clamp-2">{{ article.description }}</p>
    <a :href="article.url" target="_blank">Read more</a>
  </div>
</template>

<script>
export default {
  props: ["article"],
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--card-bg);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.card img {
  width: 100%;
  height: 40%;
  border-radius: 4px;
  object-fit: cover;
}
.card a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  margin-top: auto;
}
.clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
