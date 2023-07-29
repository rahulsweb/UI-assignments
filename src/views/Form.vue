<template>
  <div>
    <div class="col-md-8 offset-md-2 mt-10 mb-2">
      <h4 class="text-2xl text-bold dark:text-white">New Post</h4>

      <div
        class="block w-full p-3 mt-2 text-gray-800 border border-gray-300 rounded-lg bg-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div class="mt-3 bg-white p-3 font-size-4 md:flex">
        <div class="col-sm-12 col-md-9 col-lg-9 p-2">
          <form class="">
            <div class="mb-3">
              <label class="block text-gray-700 mb-2 font-size-4" for="Title">
                Title <span class="text-red-700 ml-2">REQUIRED</span>
              </label>

              <input
                v-validate="'required'"
                class="border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded w-full py-2 px-3 mb-1 leading-tight"
                id="title"
                type="title"
                name="title"
                placeholder="Write a descriptive title for your post"
                v-model="title"
                :class="errors.first('title') ? red : ''"
              />
              <p v-if="errors.first('title')" class="text-red-500 text-xs italic">
                Please fill out this Title field.
              </p>
            </div>
            <div class="mb-3">
              <label class="block mb-2 font-size-4" for="Tags">
                Tags
                <span class="text-red-700 ml-2">REQUIRED</span>
              </label>
              <input
                v-validate="'required'"
                class="border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded w-full py-2 px-3 mb-1 leading-tight"
                id="Tags"
                type="Tags"
                name="tags"
                placeholder="+ Add tags to make your post discoverable"
                v-model="tags"
                :class="errors.first('tags') ? red : ''"
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
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
                placeholder="Enter the content"
                :height="120"
                :rows="6"
                :class="errors.first('editor') ? red : ''"
              ></ckeditor>
              <p v-if="errors.first('editor')" class="text-red-500 text-xs italic mt-2">
                Please fill out this Editor field.
              </p>
            </div>
            <div class="pt-2 pb-5 w-full">
              <button
                @click="redirectTo"
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
        <div class="col-sm-12 col-md-3 col-lg-3 p-2 mt-4">
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
// import { Validator } from "vee-validate";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "HelloWord",
  components: {},

  data() {
    return {
      tag: "",
      post: [],
      red:
        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700  rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400",
      green:
        "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400",
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: true,
      showTop: false,
      title: "",
      tags: "",
      editor: ClassicEditor,
      editorData: "",
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
      this.$validator.validateAll().then((res) => {
        if (res) this.submit();
      });
    },
    submit() {
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
    redirectTo() {
      this.$router.push({ path: "/" }).catch((el) => el);
    },
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
