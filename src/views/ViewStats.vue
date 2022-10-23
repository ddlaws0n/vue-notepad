<template>
  <div><h1 class="text-center text-lg mb-4">Your Stats</h1></div>
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="border rounded-lg overflow-hidden dark:border-gray-700">
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Value
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  Number of Notes
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                >
                  {{ notesStore.totalNotesCount }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a class="text-blue-500 hover:text-blue-700" href="#"
                    >Delete</a
                  >
                </td>
              </tr>

              <tr
                class="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  Combined Character Count
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                >
                  {{ notesStore.totalCharCount }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a class="text-blue-500 hover:text-blue-700" href="#"
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNotesStore } from "@/stores/storeNotes";

const notesStore = useNotesStore();
</script>
