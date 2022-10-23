<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <div class="p-4 md:p-10">
      <h3
        v-if="hasTitle"
        class="text-lg font-bold text-gray-800 dark:text-white"
      >
        Card title
      </h3>
      <p class="mt-2 text-gray-800 dark:text-gray-400">
        {{ note.content }}
      </p>
      <div class="text-right text-gray-400"><small>XXX characters</small></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>
