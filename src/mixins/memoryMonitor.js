export default {
  data() {
    return {
      memoryInterval: null,
    };
  },
  methods: {
    logMemoryUsage() {
      if (performance && performance.memory) {
        const used = performance.memory.usedJSHeapSize / 1024 / 1024;
        const total = performance.memory.totalJSHeapSize / 1024 / 1024;
        const limit = performance.memory.jsHeapSizeLimit / 1024 / 1024;

        console.log(
          `[Memory Monitor] Used: ${used.toFixed(
            2
          )} MB | Total: ${total.toFixed(2)} MB | Limit: ${limit.toFixed(2)} MB`
        );
      } else {
        console.warn("[Memory Monitor] Not supported in this browser.");
      }
    },
  },
  mounted() {
    this.memoryInterval = setInterval(this.logMemoryUsage, 10000); // every 10 seconds
  },
  beforeDestroy() {
    clearInterval(this.memoryInterval);
  },
};
