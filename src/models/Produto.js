import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true },
    marca: { type: mongoose.Schema.Types.ObjectId, ref: "marcas", required: true },
    modelo: { type: String, required: true },
    capacidade: { type: String, required: true },
    precisao: { type: String, required: true },   
    preco: { type: Number, required: true },
    estoque: { type: Number, required: true },
    categoria: { type: String, required: true },
    descricao: { type: String, required: true },
    fornecedor: { type: String, required: true }
}, {versionKey: false});

const Produto = mongoose.model("produtos", produtoSchema);

export default Produto;