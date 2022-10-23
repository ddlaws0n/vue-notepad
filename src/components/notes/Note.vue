<template>
  <div
    class="flex flex-col bg-white hover:shadow-md border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <div
      class="inline-flex justify-end items-center bg-gray-100 border-b rounded-t-xl py-1 px-4 md:py-2 md:px-5 dark:bg-gray-800 dark:border-gray-700"
    >
      <RouterLink
        :to="`/editNote/${note.id}`"
        custom
        v-slot="{ href, navigate }"
        ><button
          type="button"
          class="mr-2 inline-flex justify-center items-center h-4 w-4 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
          :href="href"
          @click="navigate"
        >
          <span class="sr-only">Edit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:text-blue-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg></button
      ></RouterLink>
      <button
        type="button"
        class="inline-flex justify-center items-center h-4 w-4 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
        @click="storeNotes.deleteNote(note.id)"
      >
        <span class="sr-only">Delete</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 hover:text-red-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
    <div class="p-4 md:p-10">
      <!-- <h3
        v-if="hasTitle"
        class="text-lg font-bold text-gray-800 dark:text-white"
      >
        Card title
      </h3> -->
      <p class="mt-2 text-gray-800 dark:text-gray-400">
        {{ note.content }}
      </p>
    </div>
    <div class="inline-flex justify-end mt-auto py-1 px-4 md:py-2 md:px-5">
      <div class="text-right">
        <small class="mt-5 text-xs text-gray-400 dark:text-gray-400">{{
          characterLength
        }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNotesStore } from "@/stores/storeNotes";

const storeNotes = useNotesStore();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});
</script>
