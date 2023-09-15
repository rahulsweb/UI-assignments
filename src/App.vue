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
  created(){
  navigator.geolocation.getCurrentPosition(function(location) {
  console.log(location.coords.latitude);
  console.log(location.coords.longitude);
  console.log(location.coords.accuracy);
});
  }
};
</script>

<style lang="scss">
@import "@/assets/css/users.scss";

.ck-content {
  height: 200px;
  resize: vertical !important;
}
body {
  background-color: #e5e7eb !important;
}
</style>
