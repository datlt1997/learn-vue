<template>
  <h1>Transaction details page is here</h1>
  <div v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <h3>Price: {{ transaction.price }}</h3>
  </div>
  <div v-else>Loading Transaction {{ $route.params.id }}...</div>
</template>

<script>
export default {
  name: "TransactionDetails",
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data));
  },
};
</script>

<style></style>
