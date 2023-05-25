<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <main
      id="content"
      class="shrink-0"
      role="main">
      <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
import { useNotesStore } from "@/stores/storeNotes.js";

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.getNotes();
});
</script>
