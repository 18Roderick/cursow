const express = require("express");

const app = express();

app.use((req,res, next) => {

    console.log("Headers ",req.headers)
    next()
})

app.get("/", (req, res) => {
  res.json({
    mensaje: "Hola Mundo",
  });
});

app.get("/libros", (req, res) => {
  res.json({
    libros: [
      {
        titulo: "Principito",
      },
      {
        titulo: "Comedia",
      },
    ],
  });
});

app.listen(8000, () => {
  console.log("API Corriendo en el puerto 8000");
});
