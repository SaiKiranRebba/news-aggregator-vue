<template>
  <div>
    <input
      v-model="query"
      @input="debouncedSearch"
      placeholder="Search news..."
    />
    <select v-model="sortBy" @change="onSearch">
      <option value="publishedAt">Newest</option>
      <option value="relevancy">Relevance</option>
    </select>
    <div class="grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.url"
        :article="article"
      />
    </div>
    <div v-if="!articles.length">
      Please, search something to see the results
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
import { searchArticles } from "@/services/newsApi";
import ArticleCard from "@/components/ArticleCard.vue";
import PageNavigator from "@/components/PageNavigator.vue";

export default {
  components: { ArticleCard, PageNavigator },
  data() {
    return {
      query: "",
      sortBy: "publishedAt",
      currentPage: 1,
      articles: [],
      hasMore: false,
      debounceTimer: null,
    };
  },
  methods: {
    debouncedSearch() {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.currentPage = 1;
        this.onSearch();
      }, 300);
    },
    changePage(page) {
      if (page < 1) return;
      this.currentPage = page;
      this.onSearch();
    },
    async onSearch() {
      if (!this.query) return;
      try {
        const res = await searchArticles(
          this.query,
          this.sortBy,
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

<style scoped>
input {
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
}
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
