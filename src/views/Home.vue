<template>
  <div>
    <div class="container mx-auto">
      <div class="w-full lg:flex md:flex">
        <div class="col-sm-12 col-md-9 col-lg-9 m-1">
          <div class="mt-4">
            <label class="font-size-10"> Forumx Resourse </label>
            <br />
            <small class="text-gray-500 text-sm">
              Learn how to make the most of your Forumx Forum experience
            </small>
          </div>
          <div class="w-full post" style="width: 98%">
            <div class="">
              <small class="text-gray-500 font-size-6"> SORT BY </small>
              <b-form-select
                class="wp-20 font-size-6 pt-1 pb-1 ml-2 mt-2 border-left"
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
                class="wp-20 font-size-6 pt-1 pb-1 mr-2 mt-2 border-right"
                v-model="selected1"
                :options="options1"
                @change="load"
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
                id="discuss"
                class="sm:float-right xs:float-right lg:float-right p-2 pl-2 pr-2 md:float-right inline-block rounded bg-blue-500 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <span style="font-size: 1rem" class="">+</span>
                <label style="font-size: 0.7rem" class="ml-1">Start a Discussion</label>
              </button>
            </div>
          </div>
          <div class="w-full">
            <div>
              <div v-show="loadComponent">
                <List :sort="selected1"> </List>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 p-2 relative mp-10">
          <Dropdown> </Dropdown>
          <div class="p-2 col-12 center">
            <label class="text-sm pt-3 p-2"> Popular Contributor </label>
            <div class="flex">
              <div class="col-4 m-1">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <span class="text-xs"> {{ "Virat ss" }}</span>
                </div>
              </div>
              <div class="col-4 m-1">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <span class="text-xs"> {{ "John mar" }}</span>
                </div>
              </div>
              <div class="col-4 m-1">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div>
                  <span class="text-xs"> {{ "Test name" }}</span>
                </div>
              </div>
            </div>
            <div class="col-12 flex mt-3">
              <div class="col-4 m-1">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <span class="text-xs"> {{ "User name" }}</span>
                </div>
              </div>
              <div class="col-4 m-1">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <span class="text-xs"> {{ "First name" }}</span>
                </div>
              </div>
              <div class="col-4 m-1">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <span class="text-xs"> {{ "name " }}</span>
                </div>
              </div>
            </div>
          </div>
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
      loadComponent: true,
      selected: null,
      options: [{ text: "Recent" }, { text: "Title" }, { text: "Start date" }],
      selected1: null,
      options1: [
        { value: null, text: "All" },
        { value: 1, text: "Solved topics" },
        { value: false, text: "Unsolved topics" },
      ],
    };
  },
  mounted() {
    this.posts = this.$store.getters || [];
  },

  components: {
    List,
    Dropdown,
  },
  watch: {
    selected1(value) {
      this.load();
    },
  },
  methods: {
    addPost() {
      this.$router.push({ path: "/add" });
    },
    load() {
      this.loadComponent = false;
      setTimeout(this.newLoad, 100);
    },
    newLoad() {
      this.loadComponent = true;
    },
  },
};
</script>
<style scoped></style>
<style>
@media only screen and (min-width: 768px) {
  .wp-20 {
    width: 10%;
    font-size: 0.6rem;
  }
}
@media only screen and (max-width: 767px) {
  #reply {
    margin-top: 5px;
  }
  .wp-20 {
    width: 30%;
    border-radius: 0% !important;
  }
  #discuss {
    display: block;
    margin-top: 10px;
  }
}

.mp-10 {
  margin-top: 4%;
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
