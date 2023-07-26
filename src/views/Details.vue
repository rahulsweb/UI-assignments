<template>
  <div>
    <div class="container mx-auto post">
      <div class="w-full lg:flex md:flex">
        <div class="col-sm-12 col-md-9 col-lg-9 m-2">
          <div class="mt-4">
            <div
              class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6"
            >
              <h4 v-if="posts" class="text-2xl text-bold dark:text-white">
                {{ posts.title }}
              </h4>
              <!-- <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  
              </p> -->
              <div class="flex items-center gap-x-2 mt-2">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div class="m-2">
                  <h2 class="font-size-4 text-gray-800 dark:text-white">
                    {{ posts.tag }}
                  </h2>
                </div>
                <div class="m-2">
                  <p class="font-size-4 font-normal text-gray-500 dark:text-gray-400">
                    July 27 ,2023
                  </p>
                </div>
                <div class="m-2">
                  <p class="font-size-4">0 replies</p>
                </div>
                <div class="m-2">
                  <p class="font-size-4 font-normal text-gray-500 dark:text-gray-400">
                    10.3k views
                  </p>
                </div>
              </div>
              <hr class="mt-2" />
              <div class="p-2">
                <div class="">
                  <small class="text-gray-500">
                    Replies <strong class="ml-2 mr-2 font-size-10">10</strong></small
                  >
                  <small class="text-gray-500"
                    >Created <strong class="ml-2 mr-2 font-size-10">1 Year</strong>
                  </small>
                  <small class="text-gray-500">
                    Last reply
                    <strong class="ml-2 mr-2 font-size-10"> 2 days</strong></small
                  >

                  <button
                    @click="redirectTo(posts)"
                    type="button"
                    class="md:float-right inline-block bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Reply to this topic
                  </button>
                </div>
              </div>
              <hr class="mt-1" />
              <ul class="my-4 space-y-3 list-group">
                <li class="ml-3 p-2 pt-2 list-group-item">
                  <div>
                    <p class="font-size-4">
                      starting your own business is an exciting and momentous endeavor
                      that should be celebrated every chane you get.We invite you to
                      introduce your busuness to the community and find out what others
                      are t in te comments below! Feel free to include interesting
                      business origin storis, noteworthy milestones,or anythings else
                      you'd like to share.We'd love t hear it!
                    </p>

                    <hr class="mt-2" />

                    <div class="mt-2 w-full">
                      <div class="order-1 flex float-right">
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div class="m-2">
                          <h2 class="font-size-4 text-gray-800 dark:text-white">
                            {{ posts.tag }}
                          </h2>
                        </div>
                        <div class="m-2">
                          <p
                            class="font-size-4 font-normal text-gray-500 dark:text-gray-400"
                          >
                            July 27 ,2023
                          </p>
                        </div>
                      </div>
                      <div class="">
                        <div class="order-2">
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-thumbs-up text-gray-400"></i> 2
                          </button>
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-heart text-gray-400"></i> 2
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ml-3 p-2 pt-2 list-group-item">
                  <div>
                    <p class="font-size-4">
                      starting your own business is an exciting and momentous endeavor
                      that should be celebrated every chane you get.We invite you to
                      introduce your busuness to the community and find out what others
                      are t in te comments below! Feel free to include interesting
                      business origin storis, noteworthy milestones,or anythings else
                      you'd like to share.We'd love t hear it!
                    </p>

                    <hr class="mt-2" />

                    <div class="mt-2 w-full">
                      <div class="order-1 flex float-right">
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div class="m-2">
                          <h2 class="font-size-4 text-gray-800 dark:text-white">
                            {{ posts.tag }}
                          </h2>
                        </div>
                        <div class="m-2">
                          <p
                            class="font-size-4 font-normal text-gray-500 dark:text-gray-400"
                          >
                            July 27 ,2023
                          </p>
                        </div>
                      </div>
                      <div class="">
                        <div class="order-2">
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-thumbs-up text-gray-400"></i> 2
                          </button>
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-heart text-gray-400"></i> 2
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ml-3 p-2 pt-2 list-group-item">
                  <div>
                    <p class="font-size-4">
                      starting your own business is an exciting and momentous endeavor
                      that should be celebrated every chane you get.We invite you to
                      introduce your busuness to the community and find out what others
                      are t in te comments below! Feel free to include interesting
                      business origin storis, noteworthy milestones,or anythings else
                      you'd like to share.We'd love t hear it!
                    </p>

                    <hr class="mt-2" />

                    <div class="mt-2 w-full">
                      <div class="order-1 flex float-right">
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div class="m-2">
                          <h2 class="font-size-4 text-gray-800 dark:text-white">
                            {{ posts.tag }}
                          </h2>
                        </div>
                        <div class="m-2">
                          <p
                            class="font-size-4 font-normal text-gray-500 dark:text-gray-400"
                          >
                            July 27 ,2023
                          </p>
                        </div>
                      </div>
                      <div class="">
                        <div class="order-2">
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-thumbs-up text-gray-400"></i> 2
                          </button>
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-heart text-gray-400"></i> 2
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="ml-3 p-2 pt-2 list-group-item">
                  <div>
                    <p class="font-size-4">
                      starting your own business is an exciting and momentous endeavor
                      that should be celebrated every chane you get.We invite you to
                      introduce your busuness to the community and find out what others
                      are t in te comments below! Feel free to include interesting
                      business origin storis, noteworthy milestones,or anythings else
                      you'd like to share.We'd love t hear it!
                    </p>

                    <hr class="mt-2" />

                    <div class="mt-2 w-full">
                      <div class="order-1 flex float-right">
                        <img
                          class="object-cover w-8 h-8 rounded-full"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />
                        <div class="m-2">
                          <h2 class="font-size-4 text-gray-800 dark:text-white">
                            {{ posts.tag }}
                          </h2>
                        </div>
                        <div class="m-2">
                          <p
                            class="font-size-4 font-normal text-gray-500 dark:text-gray-400"
                          >
                            July 27 ,2023
                          </p>
                        </div>
                      </div>
                      <div class="">
                        <div class="order-2">
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-thumbs-up text-gray-400"></i> 2
                          </button>
                          <button
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            <i class="fas fa-heart text-gray-400"></i> 2
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 m-3">
          <Dropdown> </Dropdown>
        </div>
      </div>
      <div></div>
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
      let postData = {};
      data.map((el, index) => {
        if (el.id == this.tag) {
          postData = el;
        }
      });
      return postData;
    },
  },
  mounted() {
    this.tag = this.$route.params.id;
  },
  components: {
    Dropdown,
  },

  methods: {
    redirectTo(post) {
      this.$router.push({ path: "/add/" + post.id });
    },
  },
};
</script>

<style>
.post button {
  font-size: 0.5rem !important;
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
