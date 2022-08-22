<template>
  <h1>Transactions is Here</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link
      :to="{
        name: 'transaction-detail-route',
        params: {
          id: transaction.id,
          name: transaction.name,
          price: transaction.price,
        },
      }"
      >{{ transaction.name }}</router-link
    >
  </div>
  <router-view value-props="transactions"></router-view>
</template>

<script>
export default {
  name: "TransactionPage",
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Đi siêu thị ngày 17/05",
          price: 1000000,
        },
        {
          id: 2,
          name: "Đi chơi ngày 19/05",
          price: 300000,
        },
        {
          id: 3,
          name: "Đi Hội An ngày 24/05",
          price: 400000,
        },
        {
          id: 4,
          name: "Đi Về Quê ngày 27/05",
          price: 100000,
        },
      ],
    };
  },
};
</script>

<style></style>
