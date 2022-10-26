import { defineStore, acceptHMRUpdate } from "pinia";
import { collection, onSnapshot, 
        doc, addDoc, deleteDoc, updateDoc,
        query, orderBy } from "firebase/firestore";
import { db } from "@/js/firebase.js"

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy("createdDate", "desc"))

export const useNotesStore = defineStore('notes', {
    state: () => {
        return { 
            notes: [] 
        }
    },
    actions: {
        async getNotes() {
            const unsubscribe = onSnapshot(notesCollectionQuery, (querySnapshot) => {
            let notes = []
            querySnapshot.forEach((doc) => {
            let note = {
                id: doc.id,
                content: doc.data().content,
                createdDate: doc.data().createdDate
              }
              notes.push(note)
                })
                this.notes = notes
              });
              
        },
          async addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
              createdDate = currentDate.toString();

            await addDoc(notesCollectionRef, {
                content: newNoteContent,
                createdDate
            })
          },
          async deleteNote(idToDelete) {
            // this.notes = this.notes.filter(note => note.id != idToDelete)
            await deleteDoc(doc(notesCollectionRef, idToDelete));
          },
          async updateNote(id, content) {
            await updateDoc(doc(notesCollectionRef, id), {
                content
              })
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