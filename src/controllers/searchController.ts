import { Request, Response } from "express";
import { Carros } from "../modals/carros";


export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  let list = Carros.getFromName(query);

  res.render("pages/page", {
    text: "Resultado Da Sua Busca:",
    modelo: "",
    subtext:"Todos os",
    color: "darkred",
    list, 
    query
  })
}

export const searchAdvanced = (req: Request, res: Response) => {
  let ano = parseInt(req.query.ano as string);
  let km = parseInt(req.query.km as string);;
  let preco = parseInt(req.query.preco as string);

  res.render("pages/page", { ano, km, preco });
};

export const searchAdvancedResponse = (req: Request, res: Response) => {
  let ano = parseInt(req.query.ano as string);
  let km = req.query.km as string;
  let preco = req.query.preco as string;

  let list = Carros.getFromAdvanced(ano, km,preco);

  res.render("pages/resposta", { 
    
    ano, 
    km, 
    preco,
    text: "Os Melhores",
    modelo: "Para Você",
    subtext:"Todos Os Melhores",
    color: "linear-gradient(darkred, red)",
    border: "border-bottom: 2px solid red",
    corBtn: "red",
    list
  });
};