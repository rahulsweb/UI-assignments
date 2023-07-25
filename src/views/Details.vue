<template>
  <div>
    <div class="post container mx-auto">
      <div class="w-full flex">
        <div class="col-9 m-2">
          {{ posts }}
        </div>
        <div class="col-3 p-2 m-2 relative top-8">
          <Dropdown> </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";

export default {
  name: "HelloWord",
  data() {
    return {
      tag: "",
    };
  },
  computed: {
    posts() {
      let data = this.$store.getters.post;

      return data.filter((el, index) => {
        return el.tag == this.tag;
      });
    },
  },
  mounted() {
    this.tag = this.$route.params.name;
    alert(this.tag);
  },
  component: {
    Dropdown,
  },

  methods: {},
};
</script>

<style>
.post .btn {
  font-size: 0.3rem !important;
}
.border-left {
  border: 1px solid gray;
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
}
.border-right {
  border: 1px solid gray;
  border-top-right-radius: 20%;
  border-bottom-right-radius: 20%;
}
</style>
