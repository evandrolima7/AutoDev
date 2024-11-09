"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando as dependências 
const express_1 = __importDefault(require("express"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
//importando as rotas
const index_1 = __importDefault(require("./routes/index"));
//configurando o dotenv
dotenv_1.default.config();
//definindo o servidor 
const server = (0, express_1.default)();
//configurando o mustache 
server.set("view engine", "mustache");
server.set('views', path_1.default.join(__dirname, '../src/views')); // Apontando para src
server.engine("mustache", (0, mustache_express_1.default)());
//definindo a pagina de arquivos estáticos 
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
//definindo as rotas no servidor 
server.use(index_1.default);
//defindo pagina de erro 
server.use((req, res) => {
    res.send("página não encontrada!");
});
//definindo a minha porta padrão do projeto 
server.listen(process.env.PORT || 4000, () => {
    console.log("servidor rodando na porta 4000");
});
