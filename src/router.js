import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import TransactionPage from "./pages/Transactions.vue";
import TransactionDetail from "./pages/TransactionDetails.vue";
import NotFound from "./pages/404.vue";
import UserEdit from "./pages/UserEdit.vue";

const routes = [
  {
    path: "/",
    name: "overview-route",
    component: HomePage,
  },
  {
    path: "/user-edit",
    name: "user-edit",
    component: UserEdit,
  },
  {
    path: "/transactions",
    name: "transaction-route",
    component: TransactionPage,
    children: [
      {
        path: ":id",
        name: "transaction-detail-route",
        component: TransactionDetail,
      },
    ],
  },
  {
    path: "/ts",
    redirect: "./transactions",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
