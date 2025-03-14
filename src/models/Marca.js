import mongoose from "mongoose";

const marcaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true, unique: true},
    pais_origem: { type: String },
    descricao: { type: String },
    produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Produto" }]
}, {versionKey: false});

const marca = mongoose.model("marcas", marcaSchema);

export {marca, marcaSchema};