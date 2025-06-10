<template>
  <div>
    <h1>Top Headlines</h1>
    <div class="category-buttons">
      <button v-for="cat in categories" :key="cat" @click="changeCategory(cat)">
        {{ cat }}
      </button>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div v-else-if="articles.length" class="grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.url"
        :article="article"
      />
    </div>
    <PageNavigator
      v-if="articles.length && !loading"
      :currentPage="currentPage"
      :hasMore="hasMore"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import { getTopHeadlines } from "@/services/newsApi";
import ArticleCard from "@/components/ArticleCard.vue";
import PageNavigator from "@/components/PageNavigator.vue";

export default {
  components: { PageNavigator, ArticleCard },
  data() {
    return {
      articles: [],
      error: null,
      loading: false,
      categories: ["general", "technology", "sports", "business"],
      selectedCategory: "general",
      currentPage: 1,
      hasMore: false,
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    changeCategory(cat) {
      this.selectedCategory = cat;
      this.currentPage = 1;
      this.fetchArticles();
    },
    changePage(page) {
      if (page < 1) return;
      this.currentPage = page;
      this.fetchArticles();
    },
    async fetchArticles() {
      this.error = null;
      this.loading = true;
      try {
        const res = await getTopHeadlines(
          this.selectedCategory,
          this.currentPage
        );
        this.articles = res.data.articles;
        this.hasMore = res.data.articles.length === 10;
      } catch (err) {
        this.error = "Failed to fetch articles. Please try again later.";
        this.articles = [];
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
