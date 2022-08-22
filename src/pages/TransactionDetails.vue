<template>
  <h1>Transaction details page is here</h1>
  <h1>ID: {{ $route.params.id }}</h1>
  <h1>Name: {{ $route.params.name }}</h1>
  <h1>Price: {{ $route.params.price }}</h1>
</template>

<script>
export default {
  name: "TransactionDetails",
};
</script>

<style></style>
