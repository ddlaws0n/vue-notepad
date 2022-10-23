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
                  { id: "test3", content: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." },
                  { id: "test4", content: "Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself...\""},
                  { id: "test5", content: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo." },
                  { id: "test5", content: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together." },
                  { id: "test5", content: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover" },
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