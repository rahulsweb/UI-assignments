<template>
  <div>
    <div class="col-md-8 offset-2 mt-10 mb-2">
      <h4 class="text-2xl text-bold dark:text-white">New Post</h4>

      <div
        class="block w-full p-4 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-stone-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <strong class="text-gray-500 font-size-10 text-red-700 mt-2">
          Your content will need to be approved by a moderator</strong
        >
      </div>
      <div
        class="p-2 mt-3 text-sm text-gray-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-gray-400"
        role="alert"
      >
        <span class="font-size-4 text-bold"
          ><i class="fa fa-magic"></i> Forum forum is a peer-to-peer community for anyone
          building their website and online business</span
        >
        <span class="float-right font-size-4 text-bold">GOT IT</span>
      </div>
      <div class="mt-3 bg-white p-3 font-size-4 flex">
        <div class="col-9 p-2">
          <form class="w-full max-w-lg">
            <div class="mb-4">
              <label class="block text-gray-700 mb-2 font-size-4" for="Title">
                Title <span class="text-red-700 ml-2">REQUIRED</span>
              </label>

              <input
                :class="errors.first('title') ? 'border-red-400' : ''"
                class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Title"
                name="title"
                type="text"
                placeholder="Write a descriptive title for your post"
                v-model="title"
                v-validate="'required'"
              />
              <p v-if="errors.first('title')" class="text-red-500 text-xs italic">
                Please fill out this Title field.
              </p>
            </div>
            <div class="mb-2">
              <label class="block mb-2 font-size-4" for="Tags">
                Tags
                <span class="text-red-700 ml-2">REQUIRED</span>
              </label>
              <input
                v-validate="'required'"
                :class="tags ? 'border-red-400' : 'border-green-400'"
                class="border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="Tags"
                type="Tags"
                name="tags"
                placeholder="+ Add tags to make your post discoverable"
                v-model="tags"
              />
              <p v-if="errors.first('tags')" class="text-red-500 text-xs italic">
                Please fill out this Tags field.
              </p>
            </div>
            <div class="mt-2">
              <label class="block mb-2 font-size-4"
                >Title <span class="text-red-700 ml-2">REQUIRED</span></label
              >
              <ckeditor
                v-validate="'required'"
                name="editor"
                :class="!editorData ? 'border-red-400' : 'border-green-400'"
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
                :height="120"
                :rows="6"
              ></ckeditor>
              <p v-if="errors.first('editor')" class="text-red-500 text-xs italic mt-2">
                Please fill out this Editor field.
              </p>
            </div>
            <div class="pt-2 pb-5 w-full">
              <button
                class="bg-transparent hover:bg-blue-500 text-dark-700 font-semibold py-2 px-4 border border-gray-900 hover:border-transparent rounded"
              >
                Close
              </button>
              <button
                class="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="submitData"
              >
                Submit topic
              </button>
            </div>
          </form>
        </div>
        <div class="col-3 p-2 mt-4">
          <div
            class="text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div
              class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
            >
              <h3 class="font-semibold font-size-6 text-gray-900 dark:text-white">
                Moderator options
              </h3>
            </div>
            <div class="px-3 py-2">
              <p class="font-size-4 text-gray-700">After posting...</p>
              <div class="flex text-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="mt-1 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <p class="font-size-4 ml-1">Hide topic</p>
              </div>
            </div>
          </div>
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
      tag: "",
      post: [],
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: true,
      showTop: false,
      title: "",
      tags: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "insertTable",
          "|",
          "imageUpload",
          "mediaEmbed",
          "|",
          "undo",
          "redo",
          "uploader",
        ],
        table: {
          toolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
        // extraPlugins: [this.uploader],
        language: "nl",

        // extraPlugins: ["uploadimage"],
      },
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.tag = this.$route.params.id;
      let data = this.$store.getters.post;

      data.map((el, index) => {
        if (el.id == this.tag) this.post = el;
      });
      this.title = this.post.title;
      this.tags = this.post.tag;
      this.editorData = this.post.editor;
    }
  },
  computed: {},
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    submitData() {
      let date = new Date();
      let action = "AddPost";
      let data = {
        title: this.title,
        tag: this.tags,
        editor: this.editorData,
        date: date,
        id: Date.now(),
        topic: Date.now() % 2 ? true : false,
      };
      if (this.tag) {
        data.id = this.tag;
        console.log(data);
        action = "UpdatePost";
      }

      this.$store.dispatch(action, data);
      this.showAlert();
      this.showTop = true;
      this.$router.push({ path: "/" });
    },
    // uploader(editor) {
    //   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    //     return new UploadAdapter(loader);
    //   };
    // },
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
.ck {
  /* height: 500px;
  resize: vertical; */
}
.ck-content {
  height: 500px;
  resize: vertical !important;
}
</style>
