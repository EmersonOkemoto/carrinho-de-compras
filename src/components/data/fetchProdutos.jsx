/*
    Aula: Funções para CRUD (Create Read Update Delete) de produtos
    - Criar um novo produto (POST)
    - Buscar todos os produtos (GET)
    - Deletar um produto (DELETE)
    - Atualizar um produto existente (POST)
*/

//Biblioteca axios para fazer requisições HTTP
import axios from "axios";

/**
 * Cria um novo produto no servidor.
 * @param {string} nome - Nome do produto
 * @param {number} valor - Valor do produto
 * @param {string} imagem - URL da imagem do produto
 */
export async function CriarProduto(nome, valor, imagem) {
    try {
        const response = await axios.post(
            "http://localhost:3000/produtos/criar", //Rota do backend para criar produto
            { nome, valor, imagem }, //Corpo da requisição (dados do produto)
            {
                headers: { "Content-Type": "application/json" }, //Define o tipo de conteúdo como JSON
            }
        );
        console.log("Sucesso em criar produto");
        return response.data; //Retorna a resposta da API
    } catch (error) {
        console.error("Erro ao criar produto:", error);
    }
}

/**
 * Busca todos os produtos no servidor e atualiza o estado com os dados.
 * @param {function} setProdutos - Função do React para atualizar o estado dos produtos
 */
export async function LerProdutos(setProdutos) {
    try {
        const response = await axios.get("http://localhost:3000/produtos/ler", {
            headers: { "Content-Type": "application/json" },
        });
        console.log("Sucesso em ler produtos");
        setProdutos(response.data); //Atualiza o estado com os produtos recebidos
    } catch (error) {
        console.error("Erro ao ler produtos:", error);
    }
}

/**
 * Deleta um produto pelo ID.
 * @param {number} id - ID do produto a ser deletado
 */
export async function DeletarProduto(id) {
    try {
        const response = await axios.delete(
            `http://localhost:3000/produtos/deletar/${id}`, //Envia o ID diretamente na URL
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        console.log("Sucesso em deletar produto");
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}

/**
 * Atualiza um produto existente no servidor.
 * @param {number} id - ID do produto a ser atualizado
 * @param {string} nome - Novo nome do produto
 * @param {number} valor - Novo valor do produto
 * @param {string} imagem - Nova imagem do produto
 */
export async function AtualizarProduto(id, nome, valor, imagem) {
    try {
        const response = await axios.post(
            `http://localhost:3000/produtos/editar`, //Rota para edição
            { id, nome, valor, imagem }, //Envia os dados atualizados
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        console.log("Sucesso em editar produto");
        return response.data;
    } catch (error) {
        console.error("Erro ao editar produto:", error);
    }
}
