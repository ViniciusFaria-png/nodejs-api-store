import express from "express";
import MarcaController from "../controllers/marcaController.js";

const routes = express.Router();

routes.get("/marcas", MarcaController.listarMarcas);
routes.get("/marcas/:id", MarcaController.listarMarcaPorId);
routes.post("/marcas", MarcaController.cadastrarMarca);
routes.put("/marcas/:id", MarcaController.atualizarMarca);
routes.delete("/marcas/:id", MarcaController.deletarMarca);

export default routes;