<template>
  <div>
    <div class="w-full post">
      <!-- component -->

      <section class="sm:mt-5">
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block w-full m-1">
              <div class="" v-if="posts.length">
                <ul class="list-group">
                  <li
                    v-for="(post, index) in posts.slice(
                      (this.currentPage - 1) * this.perPage,
                      this.currentPage * this.perPage
                    )"
                    :key="post.id"
                    style="width: 98%"
                    :class="
                      post.topic
                        ? 'bg-green-100'
                        : index == 1
                        ? 'hover:ring-orange-500'
                        : 'hover:ring-blue-500'
                    "
                    class="list-group-item p-3 mt-1 mb-1 border hover:outline-none hover:border-blue-500 hover:ring-1 rounded w-full leading-tight"
                  >
                    <div class="" @click="redirectToDetails(post)">
                      <div class="col-12 flex">
                        <div class="col-4">
                          <div class="min-w-0 flex-auto">
                            <p class="font-semibold font-size-6 text-gray-900">
                              {{ post.title }}
                            </p>

                            <p
                              class="w-full mt-1 truncate font-size-6 text-gray-500"
                              v-html="post.editor"
                            ></p>
                          </div>
                        </div>
                        <div class="col-2">
                          <p class="font-size-6">0 replies</p>
                          <p class="font-size-6 text-gray-600 dark:text-gray-400">
                            10.3k views
                          </p>
                        </div>
                        <div class="col-3">
                          <div class="flex items-center gap-x-2">
                            <img
                              class="object-cover w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            />
                            <div>
                              <h2 class="font-size-6 text-gray-800 dark:text-white">
                                {{ post.tag }}
                              </h2>
                              <p class="font-size-6 text-gray-600 dark:text-gray-400">
                                July 27 ,2023
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div
                            class="flex gap-x-6"
                            style="
                              margin: auto;
                              text-align: center;
                              justify-content: center;
                            "
                          >
                            <i
                              class="fas fa-heart"
                              :class="post.topic ? 'text-blue-500' : 'text-gray-500'"
                            ></i>

                            <i
                              class="fas fa-star"
                              :class="
                                post.topic
                                  ? 'text-blue-500'
                                  : index == 1
                                  ? 'text-orange-400'
                                  : 'text-gray-500'
                              "
                            ></i>
                            <i
                              class="fas fa-check"
                              :class="post.topic ? 'text-green-500' : 'text-gray-500'"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="mt-2">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    size="md"
                    class=""
                  ></b-pagination>
                </div>
              </div>
              <div class="w-full mt-2" v-else>
                <ul class="list-group text-center">
                  <li class="p-3 list-group-item">
                    <div>
                      <p>Post not available</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sort"],

  data() {
    return {
      currentPage: 1,
      perPage: 3,
      dummy: [
        {
          title: "Software Rngineer",
          tag: "Raul",
          editor: "<h2>Content of the editor.</h2>",
          date: "2023-07-26T15:17:24.235Z",
          id: 1690384644235,
          topic: true,
        },
        {
          title: "News ",
          tag: "private",
          editor: "<p>Indian news</p>",
          date: "2023-07-26T16:05:06.992Z",
          id: 1690387506992,
          topic: false,
        },
      ],
    };
  },

  computed: {
    posts() {
      let temp = this.$store.getters.post;
      let length = this.$store.getters.post.length;
      if (!length) {
        temp = this.dummy;
        temp.map((el, index) => {
          let action = "AddPost";

          this.$store.dispatch(action, el);
        });
      }
      if (this.sort != null) {
        return temp.filter((el, index) => {
          return el.topic == this.sort;
        });
      } else return temp;
    },
    rows() {
      return this.posts.length;
    },
  },

  watch: {
    sort(value) {
      return this.posts;
    },
  },

  mounted() {},

  methods: {
    redirectToDetails(post) {
      this.$router.push({ path: "/details/" + post.id });
    },
  },
};
</script>
<style>
.page-item span {
  background: white !important;
}
</style>
