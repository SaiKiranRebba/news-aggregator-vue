<template>
  <div>
    <h1>Category: {{ category }}</h1>
    <div class="grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.url"
        :article="article"
      />
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
      category: this.$route.params.category,
      currentPage: 1,
      hasMore: false,
    };
  },
  watch: {
    "$route.params.category": function (newVal) {
      this.category = newVal;
      this.currentPage = 1;
      this.fetchArticles();
    },
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    changePage(page) {
      if (page < 1) return;
      this.currentPage = page;
      this.fetchArticles();
    },
    async fetchArticles() {
      try {
        const res = await getTopHeadlines(this.category, this.currentPage);
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
