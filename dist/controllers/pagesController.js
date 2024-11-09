"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickups = exports.suvs = exports.sedans = exports.hatchs = exports.home = void 0;
const carros_1 = require("../modals/carros");
const home = (req, res) => {
    let list = carros_1.Carros.getAll();
    res.render("pages/page", {
        text: "Os Melhores",
        modelo: "Carros",
        subtext: "Todos os",
        color: "linear-gradient(darkred, red)",
        list,
        border: "border-bottom: 2px solid red",
        corBtn: "red",
    });
};
exports.home = home;
const hatchs = (req, res) => {
    let list = carros_1.Carros.getType("Hatch");
    res.render("pages/page", {
        text: "Os Melhores",
        modelo: "Hatchs",
        subtext: "Todos os",
        color: "linear-gradient(darkblue, blue)",
        list,
        border: "border-bottom: 2px solid blue",
        corBtn: "blue",
    });
};
exports.hatchs = hatchs;
const sedans = (req, res) => {
    let list = carros_1.Carros.getType("Sedan");
    res.render("pages/page", {
        text: "Os Melhores",
        modelo: "Sedans",
        subtext: "Todos os",
        color: "linear-gradient(darkgreen, green)",
        list,
        border: "border-bottom: 2px solid green",
        corBtn: "green",
    });
};
exports.sedans = sedans;
const suvs = (req, res) => {
    let list = carros_1.Carros.getType("SUV");
    res.render("pages/page", {
        text: "Os Melhores",
        modelo: "Suvs",
        subtext: "Todos os",
        color: "linear-gradient(purple, black)",
        list,
        border: "border-bottom: 2px solid purple",
        corBtn: "purple",
    });
};
exports.suvs = suvs;
const pickups = (req, res) => {
    let list = carros_1.Carros.getType("Pickup");
    res.render("pages/page", {
        text: "As Melhores",
        modelo: "Pickups",
        subtext: "Todas as",
        color: "linear-gradient(black, gray)",
        list,
        border: "border-bottom: 2px solid black",
        corBtn: "black",
    });
};
exports.pickups = pickups;
