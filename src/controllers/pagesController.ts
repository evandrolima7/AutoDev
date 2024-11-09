import { Request, Response } from "express";
import {Carros} from "../modals/carros"

export const home = (req: Request, res: Response) => {


  let list = Carros.getAll();
  
  res.render("pages/page", {
    text: "Os Melhores",
    modelo: "Carros",
    subtext:"Todos os",
    color: "linear-gradient(darkred, red)",
    list,
    border: "border-bottom: 2px solid red",
    corBtn: "red",
  })
}

export const hatchs = (req: Request, res: Response) => {
  let list = Carros.getType("Hatch")
  
  res.render("pages/page", {
    text: "Os Melhores",
    modelo: "Hatchs",
    subtext:"Todos os",
    color: "linear-gradient(darkblue, blue)",
    list,
    border: "border-bottom: 2px solid blue",
    corBtn: "blue",
  })
}

export const sedans = (req: Request, res: Response) => {
  let list = Carros.getType("Sedan")

  res.render("pages/page", {
    text: "Os Melhores",
    modelo: "Sedans",
    subtext:"Todos os",
    color: "linear-gradient(darkgreen, green)",
    list,
    border: "border-bottom: 2px solid green",
    corBtn: "green",
  })
}

export const suvs = (req: Request, res: Response) => {
  let list = Carros.getType("SUV")

  res.render("pages/page", {
    text: "Os Melhores",
    modelo: "Suvs",
    subtext:"Todos os",
    color: "linear-gradient(purple, black)",
    list,
    border: "border-bottom: 2px solid purple",
    corBtn: "purple",
  })
}

export const pickups = (req: Request, res: Response) => {
  let list = Carros.getType("Pickup")

  res.render("pages/page", {
    text: "As Melhores",
    modelo: "Pickups",
    subtext:"Todas as",
    color: "linear-gradient(black, gray)",
    list,
    border: "border-bottom: 2px solid black",
    corBtn: "black",
  })
}