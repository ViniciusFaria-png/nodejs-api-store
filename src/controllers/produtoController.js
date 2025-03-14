import Produto from "../models/Produto.js";
import {marca} from "../models/Marca.js";
import mongoose from "mongoose";

class ProdutoController {

    static async listarProdutos (req, res) {
        try{
            const listaProdutos = await Produto.find({});
            res.status(200).json(listaProdutos);
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao buscar produtos`
            });
        }
    };

    static async listarProdutoPorId (req, res) {
        try{
            const id = req.params.id
            const produtoEncontrado = await Produto.findById(id);
            res.status(200).json(produtoEncontrado);
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao buscar produto`
            });
        }
    };

    static async cadastrarProduto (req, res) {
        try{
            const novoProduto = req.body;
            let marcaId;

            if(novoProduto.marca && typeof novoProduto.marca === 'string' && !mongoose.Types.ObjectId.isValid(novoProduto.marca)){
                const marcaEncontrada = await marca.findOne({nome: novoProduto.marca})

                if(!marcaEncontrada){
                    return res.status(400).json({
                        message: `Marca ${novoProduto.marca} não encontrada, verifique o nome ou cadastre essa marca primeiro`
                    });
                }
    
                marcaId = marcaEncontrada._id
            } else {

                marcaId = novoProduto.marca;

                const marcaExiste = await marca.findById(marcaId);
                if(!marcaExiste){
                    return res.status(400).json({
                        message: `Marca ${novoProduto.marca} não encontrada com este ID, verifique o nome ou cadastre essa marca primeiro`
                    });
                }
            }

            novoProduto.marca = marcaId;
            

            const produtoCriado = await Produto.create(novoProduto);
            await marca.findByIdAndUpdate(
                marcaId,
                {$push: {produtos: produtoCriado._id}}
            );

            const produtoFinal = await Produto.findById(produtoCriado._id).populate('marca');

            res.status(201).json({
                message: "Criado com sucesso",
                Produto: produtoFinal
            });
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar produto`
            });
        }
    };

    static async atualizarProduto (req, res) {
        try{
            const id = req.params.id
            const produtoAtual = await Produto.findById(id);


            if(!produtoAtual){
                return res.status(400).json({
                    message: "Produto não encontrado"
                });
            }

            if (req.body.marca && req.body.marca !== produtoAtual.marca.toString()){
                await marca.findByIdAndUpdate(
                    produtoAtual.marca,
                    {$pull: {produtos: id}}
                );
            }

            await Produto.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Produto atualizado"});
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao atualizar produto`
            });
        }
    };

    static async deletarProduto (req, res) {
        try{
            const id = req.params.id
            const produto = await Produto.findById(id);
        
            if (!produto) {
                return res.status(404).json({
                    message: "Produto não encontrado"
                });
            }

            await marca.findByIdAndUpdate(
                produto.marca,
                {$pull: {produtos: id}}
            );

            await Produto.findByIdAndDelete(id);
            res.status(200).json({
                message: "Produto deletado com sucesso"
            });
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao deletar produto`
            });
        }
    };
};

export default ProdutoController;