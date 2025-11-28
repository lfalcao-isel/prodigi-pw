import express from 'express';

// Pre-populated in-memory shopping lists
const lists = [
  {
    id: 1,
    name: "Saturday groceries",
    items: [
      { product: "Milk", quantity: 2 },
      { product: "Bread", quantity: 6 }
    ]
  },
  {
    id: 2,
    name: "Sunday market",
    items: [
      { product: "Eggs", quantity: 12 },
      { product: "Butter", quantity: 1 }
    ]
  }
];

const app = express();
const PORT = 3000;

// GET /lists?limit=number
app.get('/lists', ) //1
// GET /lists/:id
app.get(, getListById) //2


function getLists(req, resp){
  const limit = //3
  if (limit && !isNaN(limit)) {
    resp.json(lists.slice(0, limit))
  } else {
    //4
  }
}

function getListById(req, resp){
     const id =  //5
     const list = lists.find(l => l.id == id)
     if (list) {
        //6
    } else {
        resp.status(404).json({ error: 'List not found' })
    }
}


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
