<template>
  <nav class="nav">
    <router-link :to="{ name: 'overview-route' }">Overview</router-link>
    <router-link :to="{ name: 'transaction-route' }">Transactions</router-link>
    <!-- <router-link to="/buggets">Buggets</router-link>
    <router-link to="/reports">Report</router-link>
    <router-link to="/setting">Setting</router-link> -->
  </nav>
</template>

<script>
export default {
  name: "NarBar",
};
</script>

<style></style>
