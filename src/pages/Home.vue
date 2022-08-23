<template>
  <h1>Overview is here</h1>
  <input type="text" v-model="keyword" />
  <ul>
    <li v-for="searchFilter in searchFilters" :key="searchFilter">
      {{ searchFilter }}
    </li>
  </ul>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  name: "HomePage",
  setup() {
    const keyword = ref("");
    const arraySearchs = reactive([
      "hi",
      "hifo",
      "hifoxo",
      "fo",
      "fofi",
      "fofiso",
    ]);

    const searchFilters = computed(() =>
      arraySearchs
        .map((arraySearch) => {
          return arraySearch.toLowerCase();
        })
        .filter((arraySearch) =>
          arraySearch.includes(keyword.value.toLowerCase())
        )
    );

    watch(keyword, (oldValue, newValue) => {
      console.log(oldValue, newValue);
    });

    watchEffect(() => {
      if (keyword.value) {
        console.log("running");
      }
    });

    return { keyword, arraySearchs, searchFilters };
  },
};
</script>

<style></style>
