<template>
  <div>
    <div class="container mx-auto">
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
              <Dropdown> </Dropdown>
            </div>
          </div>
          <div class="w-full">
            <div>
              <List> </List>
            </div>
          </div>
        </div>
        <div class="col-3 p-2 m-2">
          <div
            class="block rounded-lg bg-primary text-light p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <h5 class="mb-2 text-xl">
              Circle Day:Build
              <br />
              Your Toolkit
            </h5>
            <!-- greeting -->
            <small class="">
              50 Days aways <span class="float-right p-2 font-size-6">Event details</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import List from "@/views/List";
export default {
  name: "HelloWord",
  components: {
    Dropdown,
    List,
  },
};
</script>

<style scoped></style>
