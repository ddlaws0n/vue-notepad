import { watch } from 'vue'

export function useWatchCharacters(valueToWatch, charLimit = 500) {
    watch(valueToWatch, (newValue) => {
    if (newValue.length === charLimit) {
      alert(`Only ${ charLimit } allowed`);
    }
  })
}