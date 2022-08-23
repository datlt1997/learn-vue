<template>
  <h1>Transactions is Here</h1>
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-detail-route',
          params: {
            id: transaction.id,
          },
        }"
        >{{ transaction.name }}</router-link
      >
    </div>
  </div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>Loading Transaction</div>
</template>

<script>
import usesTransaction from "../uses/fetchTransactions";
export default {
  name: "TransactionPage",
  setup() {
    const { transactions, error, transactionData } = usesTransaction();

    transactionData();
    return { transactions, error, transactionData };
  },
};
</script>

<style></style>
