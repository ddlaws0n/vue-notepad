<template>
  <div
    class="flex flex-col bg-gray-100 border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <div class="p-4 md:p-10">
      <label
        class="ml-1 block text-sm font-medium mb-2 dark:text-white"
        v-if="props.label"
        >{{ props.label }}</label
      >
      <textarea
        v-model="modelValue"
        @input="$emit('update:modelValue', modelValue)"
        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        rows="8"
        :placeholder="props.placeholder"
        ref="textAreaRef"
        maxlength="500"
        v-autofocus
      ></textarea>
      <slot name="buttons" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Enter a new note here",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textAreaRef = ref(null);

const focusTextarea = () => {
  textAreaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>
