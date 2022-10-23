<template>
  <div class="grid lg:grid-cols-3 lg:gap-4">
    <div
      class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    >
      <div class="p-4 md:p-10">
        <textarea
          v-model="newNote"
          class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          rows="8"
          placeholder="Enter a new note"
          ref="newNoteRef"
        ></textarea>
        <button
          type="button"
          @click="addNote"
          :disabled="!newNote"
          :class="[!newNote ? disabledClass : '']"
          class="w-full py-3 px-4 mt-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          Save Note
        </button>
      </div>
    </div>
    <Note v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";

const disabledClass = "cursor-not-allowed";
const newNote = ref("");
const newNoteRef = ref(null);
const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem obcaecati velit fuga ut architecto tenetur blanditiis praesentium itaque ipsam quae ipsum consequuntur est eum, nam labore dolor veniam voluptates eveniet!",
  },
  { id: "id2", content: "This is a much shorter note" },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);

  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
