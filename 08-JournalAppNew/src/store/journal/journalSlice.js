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

        },
        setNotes: (state, action) => {

        },
        setSaving: (state, action) => {

        },
        updateNotes: (state, action) => {

        },
        deleteNodeById: (state, action) => {

        },

    }
});

export const {
    savigNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNotes,
    deleteNodeById
} = journalSlice.actions;