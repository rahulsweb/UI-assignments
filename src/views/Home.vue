<template>
  <div>
    <div class="post container mx-auto">
      <div class="w-full flex">
        <div class="col-9 m-2">
          <div class="mt-4">
            <label class="font-size-10"> Forumx Resourse </label>
            <br />
            <small class="text-gray-500 font-size-6">
              Learn how to make the most of your Forumx Forum experience
            </small>
          </div>
          <div class="w-full">
            <div class="">
              <small class="text-gray-500 font-size-6"> SORT BY </small>
              <b-form-select
                class="w-30 font-size-4 pt-1 pb-1 ml-2 mb-2 mt-2 border-left"
                v-model="selected"
                :options="options"
              >
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >Actively</b-form-select-option
                  >
                </template>
              </b-form-select>

              <b-form-select
                class="w-30 font-size-4 pt-1 pb-1 mr-2 mb-2 mt-2 border-right"
                v-model="selected1"
                :options="options1"
              >
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >Status</b-form-select-option
                  >
                </template>
              </b-form-select>

              <button
                @click="addPost"
                type="button"
                class="float-right inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                + Start a Discussion
              </button>
            </div>
          </div>
          <div class="w-full">
            <div>
              <List> </List>
            </div>
          </div>
        </div>
        <div class="col-3 p-2 m-2 relative top-8">
          <Dropdown> </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/views/List";

import Dropdown from "@/components/Dropdown";

export default {
  name: "HelloWord",
  data() {
    return {
      posts: [],
      selected: null,
      options: [{ text: "Recent" }, { text: "Title" }, { text: "Start date" }],
      selected1: null,
      options1: [{ text: "All" }, { text: "Solved topics" }, { text: "Unsolved topics" }],
    };
  },
  mounted() {
    this.posts = this.$store.getters || [];
  },
  components: {
    List,
    Dropdown,
  },
  methods: {
    addPost() {
      this.$router.push({ path: "/add" });
    },
  },
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
