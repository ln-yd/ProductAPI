const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "pet-DB";

require("./server/config/mongoose.config")(db_name);
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
require("./server/routes/pet.routes")(app);
app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
