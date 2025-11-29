import express from "express";

let app = express();

app.get("/api/items", (req, res) => {
    console.log("/slb called")
    res.send("Olá Express!");                          // Resposta: "Olá Express!" 
}
);

function f1(req, rsp, next) {
    console.log("F1 was called")
    next()
}

app.get("/api/items/:id/fixa/:slb", f1, (req, res) => {
    console.log("last mw was called also")
  const id = req.params.id;
  const id2 = req.params.slb
  const a = req.query.a
  const b = req.query.b
  /* obtém item por ID */res.json(
    { id,
      a,
      b,   
    nome: "Item exemplo" });
});

const PORT = 1904

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`); // Mensagem na consola
});
