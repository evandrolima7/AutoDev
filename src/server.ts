//importando as dependências 
import express, {Request, Response} from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";

//importando as rotas
import routerMain from "./routes/index";

//configurando o dotenv
dotenv.config()

//definindo o servidor 
const server = express();

//configurando o mustache 
server.set("view engine", "mustache");
server.set('views', path.join(__dirname, '../src/views')); // Apontando para src
server.engine("mustache", mustache());

//definindo a pagina de arquivos estáticos 
server.use(express.static(path.join(__dirname, "../public")));

//definindo as rotas no servidor 
server.use(routerMain);

//defindo pagina de erro 
server.use((req: Request, res: Response) => {
  res.send("página não encontrada!")
})

//definindo a minha porta padrão do projeto 
server.listen(process.env.PORT || 4000, () => {
  console.log("servidor rodando na porta 4000")
})