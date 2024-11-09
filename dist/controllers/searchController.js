"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAdvancedResponse = exports.searchAdvanced = exports.search = void 0;
const carros_1 = require("../modals/carros");
const search = (req, res) => {
    let query = req.query.q;
    let list = carros_1.Carros.getFromName(query);
    res.render("pages/page", {
        text: "Resultado Da Sua Busca:",
        modelo: "",
        subtext: "Todos os",
        color: "darkred",
        list,
        query
    });
};
exports.search = search;
const searchAdvanced = (req, res) => {
    let ano = parseInt(req.query.ano);
    let km = parseInt(req.query.km);
    ;
    let preco = parseInt(req.query.preco);
    res.render("pages/page", { ano, km, preco });
};
exports.searchAdvanced = searchAdvanced;
const searchAdvancedResponse = (req, res) => {
    let ano = parseInt(req.query.ano);
    let km = req.query.km;
    let preco = req.query.preco;
    let list = carros_1.Carros.getFromAdvanced(ano, km, preco);
    res.render("pages/resposta", {
        ano,
        km,
        preco,
        text: "Os Melhores",
        modelo: "Para Você",
        subtext: "Todos Os Melhores",
        color: "linear-gradient(darkred, red)",
        border: "border-bottom: 2px solid red",
        corBtn: "red",
        list
    });
};
exports.searchAdvancedResponse = searchAdvancedResponse;
