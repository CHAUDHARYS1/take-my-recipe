const router = require("express").Router();
const fs = require('fs');
const path = require('path');
//const uniqid = require('uniqid');
const { recipes } = require("../db/db.json");


// get /api/notes check db.json and returns all saved notes as json
router.get("/recipes", (req,res) => {
  console.log("Hello recipes!")
  res.json(recipes);
})
// post /api/notes receive a new note to save on the request and save to db.json then return new note to client
// router.post("/notes", (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = uniqid();
//   // if any data if invalid, send 400 error
//   if(!req.body.title || !req.body.text){
//     res.status(400).send('The note is not valid!')
//   } else {
//     const note = createNewNote(req.body);
//     res.json(note);
//   }
// });

// router.delete('/notes/:id', (req, res) => {
//   let id = req.params.id
//   for( var i = 0; i < notes.length; i++){
//     if(notes[i].id === id){
//       notes.splice(i, 1)
//       fs.writeFileSync(
//         path.join(__dirname, '../../db/db.json'),
//         JSON.stringify({ notes : notes}, null, 2)
//       );
//     }
//   }
//   return res.json(notes);
// })

// create new note function
function createNewNote(body) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({ notes : notes}, null, 2)
  );
  return notes;
}

module.exports = router;