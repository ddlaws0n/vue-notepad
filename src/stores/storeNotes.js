import { defineStore, acceptHMRUpdate } from "pinia";

export const useNotesStore = defineStore('notes', {
    state: () => {
        return { 
            notes: [
                {
                    id: "test1",
                    content:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem velit fuga ut architecto tenetur blanditiis praesentium itaque ipsam quae ipsum consequuntur est eum, nam labore dolor veniam voluptates eveniet!",
                  },
                  { id: "test2", content: "This is a much shorter note." },
            ] 
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
              id = currentDate.toString();
          
            let note = {
              id,
              content: newNoteContent,
            };
          
            this.notes.unshift(note);
          },
          deleteNote(idToDelete) {
            this.notes = this.notes.filter(note => note.id != idToDelete)
          },
          updateNote(id, content) {
            // let index = this.notes.findIndex(note => {return note.id === id }) // Longer Version
            let index = this.notes.findIndex(note => note.id === id ) // Shorter Version
            this.notes[index].content = content
          }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => { 
                return state.notes.filter(note => note.id === id )[0].content 
            }
        },
        totalNotesCount: (state) => {
            return state.notes.length
        },
        totalCharCount: (state) => {
            let count = 0
            state.notes.forEach(note => { count += note.content.length })
            return count
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNotesStore, import.meta.hot))
}