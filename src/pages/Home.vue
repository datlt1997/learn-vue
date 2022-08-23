<template>
  <h1>Overview is here</h1>
  {{ count }}
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    this.count = this.$store.state.transactions;
  },
};
</script>

<style></style>
