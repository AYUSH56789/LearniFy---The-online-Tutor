const express=require('express');
const { handleAddNote } = require('../controllers/notes/addNotes');
const { handleGetNotes } = require('../controllers/notes/getNotes');
const { handleDeleteNote } = require('../controllers/notes/deleteNotes');
const { handleUpdateNote } = require('../controllers/notes/updateNotes');
const notesRouter=express.Router();

notesRouter.post('/add_notes',handleAddNote);
notesRouter.put('/update_notes',handleUpdateNote);
notesRouter.delete('/delete_notes',handleDeleteNote);
notesRouter.get('/get_notes',handleGetNotes);


module.exports={
    notesRouter
}