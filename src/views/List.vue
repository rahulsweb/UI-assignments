<template>
  <div>
    <div class="w-full">
      <!-- component -->
      <section class="container mx-auto">
        <div class="flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto">
            <div class="inline-block min-w-full py-2 align-middle">
              <div
                class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
              >
                <div>
                  <table
                    v-if="posts.length"
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-y-3"
                  >
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr
                        class=""
                        v-for="(post, index) in posts"
                        :key="index"
                        @click="redirectToDetails(post)"
                      >
                        <td
                          colspan="2"
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
                  <table
                    v-else
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-y-3"
                  >
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr class="text-center">
                        <td
                          colspan="2"
                          class="px-4 py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <div class="min-w-0 flex-auto">
                            <p class="font-semibold font-size-10 text-gray-900">
                              Post not available
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Page navigation example" v-if="posts.length">
          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >Previous</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ml-1 mr-1 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>

            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ml-1 mr-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sort"],
  mounted() {},
  computed: {
    posts() {
      let temp = this.$store.getters.post;
      if (this.sort != null) {
        return temp.filter((el, index) => {
          return el.topic == this.sort;
        });
      } else return this.$store.getters.post;
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
