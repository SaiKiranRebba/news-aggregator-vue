<template>
  <div>
    <h1>Top Headlines</h1>
    <div class="category-buttons">
      <button v-for="cat in categories" :key="cat" @click="changeCategory(cat)">
        {{ cat }}
      </button>
    </div>
    <div v-if="articles.length" class="grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.url"
        :article="article"
      />
    </div>
    <div v-else>
      <p>Loading or no articles found.</p>
    </div>
    <PageNavigator
      v-if="articles.length"
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
      try {
        const res = await getTopHeadlines(
          this.selectedCategory,
          this.currentPage
        );
        this.articles = res.data.articles;
        this.hasMore = res.data.articles.length === 10;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped></style>
