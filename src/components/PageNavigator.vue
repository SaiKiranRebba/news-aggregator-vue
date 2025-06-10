<template>
  <div class="pagination">
    <button
      class="btn"
      :class="{ disabled: currentPage === 1 }"
      @click="$emit('change-page', currentPage - 1)"
      :disabled="currentPage === 1"
    >
      Previous
    </button>
    <span>Page {{ currentPage }}</span>
    <button
      class="btn"
      :class="{ disabled: !hasMore }"
      @click="$emit('change-page', currentPage + 1)"
      :disabled="!hasMore"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    hasMore: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
