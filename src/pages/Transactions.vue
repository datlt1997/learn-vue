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
import { ref } from "vue";
export default {
  name: "TransactionPage",
  // data() {
  //   return {
  //     transactions: [],
  //   };
  // },
  // created() {
  //   fetch("http://localhost:3000/transactions")
  //     .then((response) => response.json())
  //     .then((data) => (this.transactions = data));
  // },
  setup() {
    const transactions = ref([]);
    const error = ref(null);

    const transactionData = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions");

        if (!response.ok) throw new Error("error get api data");

        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };

    transactionData();
    return { transactions, error, transactionData };
  },
};
</script>

<style></style>
