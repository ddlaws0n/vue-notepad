<template>
  <AddEditNote
    v-model="noteContent"
    ref="addEditNoteRef"
    placeholder="Edit your note"
    label="Edit your note"
  >
    <template #buttons>
      <div class="flex">
        <button
          type="button"
          @click="$router.back()"
          class="w-full py-3 px-4 mt-3 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          Cancel
        </button>
        <button
          type="button"
          @click="handleSaveClicked"
          :disabled="!noteContent"
          :class="[!noteContent ? `cursor-not-allowed` : '']"
          class="w-full py-3 px-4 mt-3 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          Save Note
        </button>
      </div>
    </template>
  </AddEditNote>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useNotesStore } from "@/stores/storeNotes";

const route = useRoute();
const router = useRouter();

const storeNotes = useNotesStore();
const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
