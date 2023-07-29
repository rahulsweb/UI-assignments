<template>
  <div>
    <div class="w-full">
      <!-- component -->

      <section class="sm:mt-5">
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full">
              <div class="overflow-hidden" v-if="posts.length">
                <table class="min-w-full border-separate border-spacing-y-3">
                  <thead class="border-b font-medium dark:border-neutral-500"></thead>
                  <tbody
                    class="w-100 bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr
                      class="w-100 border hover:outline-none hover:border-blue-500 hover:ring-blue-500 hover:ring-1 rounded w-full py-2 px-3 mb-1 leading-tight"
                      v-for="(post, index) in posts"
                      :key="index"
                      @click="redirectToDetails(post)"
                      :class="post.topic ? 'bg-green-100' : ''"
                    >
                      <td
                        class="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <div class="min-w-0 flex-auto">
                          <p class="font-semibold font-size-6 text-gray-900">
                            {{ post.title }}
                          </p>

                          <p
                            class="w-full mt-1 truncate font-size-6 text-gray-500"
                            v-html="post.editor"
                          ></p>
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <p class="font-size-6">0 replies</p>
                        <p class="font-size-6 text-gray-600 dark:text-gray-400">
                          10.3k views
                        </p>
                      </td>
                      <td
                        class="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
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
                      </td>

                      <td class="px-4 py-4 whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <i
                            class="fas fa-heart"
                            :class="post.topic ? 'text-blue-500' : 'text-gray-500'"
                          ></i>
                          <i
                            class="fas fa-star"
                            :class="post.topic ? 'text-blue-500' : 'text-gray-500'"
                          ></i>
                          <i
                            class="fas fa-check"
                            :class="post.topic ? 'text-green-500' : 'text-gray-500'"
                          ></i>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="clearfix btn-group col-md-2 offset-md-5">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    v-if="page != 1"
                    @click="page--"
                  ></button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
                    :key="index"
                    @click="page = pageNumber"
                  >
                    {{ pageNumber }}
                  </button>
                  <button
                    type="button"
                    @click="page++"
                    v-if="page < pages.length"
                    class="btn btn-sm btn-outline-secondary"
                  ></button>
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
      page: 1,
      perPage: 9,
      pages: [],
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
  mounted() {},
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
  },
  watch: {
    sort(value) {
      return this.posts;
    },
  },
  methods: {
    redirectToDetails(post) {
      this.$router.push({ path: "/details/" + post.id });
    },
  },
};
</script>
