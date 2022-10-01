import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,

        // {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 12345,
        //     imageURls: [],

        // },

    },
    reducers: {
        savigNewNote: (state) => {
            state.isSaving = true;

        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;

        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';

        },
        setNotes: (state, action) => {
            state.notes = action.payload;

        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
            //TODO: Mensaje de error

        },
        updateNotes: (state, action) => {
            
            state.notes = state.notes.map( note => {
                
                if(note.id === action.payload.id) {
                    return action.payload.remove(note.id)
                }
                return note;

                
            });

            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;

        },
        setPhotosToActiveNote: (state, action) =>{
            state.active.imageURls = [ ... state.active.imageURls, ...action.payload ];
            state.isSaving = false;

        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;

        },
        deleteNoteById: (state, action) => {
            state.active = null; 
            state.notes = state.notes.filter( note => note.id !== action.payload );

        },

    }
});

export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savigNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNotes,
} = journalSlice.actions;