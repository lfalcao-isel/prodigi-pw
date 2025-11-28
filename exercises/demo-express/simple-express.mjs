//1 - npm install
//2 - node demo-express.mjs

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/students', getStudents) //1 add function
app.get('/students/:id', getStudentById) //2 add template path


function getStudents(req, resp){
  console.log("Query parameter name = " + req.query.name)
  resp.json("getStudents")
}

function getStudentById(req, resp){
    console.log("Path parameter id = " + req.params.id)
    resp.json("getStudentId")
}


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
