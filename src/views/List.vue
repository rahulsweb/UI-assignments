<template>
  <div>
    <div class="w-full">
      <!-- component -->
      <section class="container mx-auto">
        <div class="md:flex md:flex-col col-12">
          <div class="-mx-4 -my-2">
            <div class="inline-block min-w-full py-2 align-middle">
              <div v-if="posts.length">
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-y-3"
                >
                  <tbody
                    class="w-100 bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr
                      class="w-100"
                      v-for="(post, index) in posts"
                      :key="index"
                      @click="redirectToDetails(post)"
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
              </div>
              <div class="w-full mt-4" v-else>
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
