import express from "express";
import Produtos from "./produtosRoutes.js"
import marcas from "./marcaRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Noode.js"));
    app.use(express.json(), Produtos, marcas);
};

export default routes;