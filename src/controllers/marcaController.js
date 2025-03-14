import {marca} from "../models/Marca.js";
import Produto from "../models/Produto.js";

class MarcaController {

    static async listarMarcas (req, res) {
        try {
            const listaMarcas = await marca.find({});
            res.status(200).json(listaMarcas);
        } catch(erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao buscar marcas`
            });
        }
    };

    static async listarMarcaPorId (req, res) {
        try{
            const id = req.params.id
            const marcaEncontrada = await marca.findById(id)
            res.status(200).json(marcaEncontrada);
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao buscar marca`
            });
        }
    };

    static async cadastrarMarca (req, res) {
        try{
            const novaMarca = await marca.create(req.body)
            res.status(201).json({
                message: "Criado com sucesso",
                marca: novaMarca
            });
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar marca`
            });
        }
    };

    static async atualizarMarca (req, res) {
        try{
            const id = req.params.id
            await marca.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Marca atualizado"});
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao atualizar marca`
            });
        }
    };

    static async deletarMarca(req, res) {
        try {
            const id = req.params.id;
            
            const produtosAssociados = await Produto.find({ marca: id });
            
            if (produtosAssociados.length > 0) {
                return res.status(400).json({
                    message: "Não é possível excluir marca com produtos associados"
                });
            }
            
            await marca.findByIdAndDelete(id);
            res.status(200).json({
                message: "Marca deletada com sucesso"
            });
        } catch(erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao deletar marca`
            });
        }
    };
};

export default MarcaController;