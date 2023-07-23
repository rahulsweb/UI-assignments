<template>
  <div id="app">
    <div class="w-full">
      <Header />
    </div>
    <div class="bg-gray-200">
      <div class="container mx-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/layout/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/users.scss";

body {
  background-color: #e5e7eb !important;
}
</style>
