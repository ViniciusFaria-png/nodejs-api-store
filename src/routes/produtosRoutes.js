import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", ProdutoController.listarProdutos);

///produtos/busca?modelo=
routes.get("/produtos/busca", ProdutoController.listarProdutosPorModelo);

routes.get("/produtos/:id", ProdutoController.listarProdutoPorId);
routes.post("/produtos", ProdutoController.cadastrarProduto);
routes.put("/produtos/:id", ProdutoController.atualizarProduto);
routes.delete("/produtos/:id", ProdutoController.deletarProduto);

export default routes;