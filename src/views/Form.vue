<template>
  <div>
    <div class="col-md-8 offset-2 mt-10">
      <h4 class="text-2xl text-bold dark:text-white">New Post</h4>

      <div
        class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <strong class="text-gray-500 font-size-1 text-red-700 mt-2">
          Your content will need to be approved by a moderator</strong
        >
      </div>
      <div class="mt-5 bg-white p-3">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2 font-size-4" for="Title">
            Title <span class="text-red-500 ml-2">REQUIRED</span>
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Title"
            type="text"
            placeholder="Title"
          />
        </div>
        <div class="mb-6">
          <label class="block font-bold mb-2 font-size-4" for="Tags">
            Tags
            <span class="text-red-500 ml-2">REQUIRED</span>
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Tags"
            type="Tags"
            placeholder="Tags"
          />
        </div>
        <div class="mt-8">
          <label class="block mb-2 font-size-4"
            >Title <span class="text-red-500 ml-2">REQUIRED</span></label
          >
          <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
          ></ckeditor>
        </div>
        <div class="pt-2 pb-5 w-full">
          <button
            class="text-dark font-bold py-2 px-4 rounded outline-black shadow-outline"
            type="button"
          >
            Close
          </button>
          <button
            class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit topic
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "HelloWord",
  components: {},
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
};
</script>

<style scoped>
.form {
  /* position: relative; */
  left: 12%;
  margin-top: 5%;
}
h1 {
  font-size: calc(1.375rem + 1.5vw);
}
</style>
