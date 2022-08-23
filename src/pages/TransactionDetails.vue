<template>
  <h1>Transaction details page is here</h1>
  <div v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <h3>Price: {{ transaction.price }}</h3>
  </div>
  <div v-else>Loading Transaction {{ $route.params.id }}...</div>
  {{ transactionFiltered }}
</template>

<script>
export default {
  name: "TransactionDetails",
  computed: {
    transaction() {
      return this.$store.state.transaction;
    },
    transactionFiltered() {
      return this.$store.getters.transactionsFiltered;
    },
  },
  created() {
    this.$store.dispatch("fetchTransaction", { id: this.$route.params.id });
  },
};
</script>

<style></style>
