type DataTipo = "Sedan" | "SUV" | "Pickup" | "Hatch"

type Data = {
    nome: string,
    marca:string,
    cor:string,
    ano:number,
    km:string,
    preco:string,
    imagem:string,
    tipo: DataTipo,
}


const data:Data[] = [
    {
        nome: "Honda Civic",
        marca: "Honda",
        cor: "Branco",
        ano: 2019,
        km: "30.000",
        preco: "85.000,00",
        imagem: "/images/civic2019.jpeg",
        tipo: "Sedan"
    },
    {
        nome: "Toyota Hilux",
        marca: "Toyota",
        cor: "Cinza",
        ano: 2021,
        km: "15.000",
        preco: "200.000,00",
        imagem: "/images/hilux.jpeg",
        tipo: "Pickup"
    },
    {
        nome: "Ford Ranger",
        marca: "Ford",
        cor: "Azul",
        ano: 2020,
        km: "22.000",
        preco: "180.000,00",
        imagem: "/images/ranger2020.jpeg",
        tipo: "Pickup"
    },
    {
        nome: "Fiat Argo",
        marca: "Fiat",
        cor: "Cinza",
        ano: 2020,
        km:" 18.000",
        preco: "45.000,00",
        imagem: "/images/argo2020.jpeg",
        tipo: "Hatch"
    },
    {
        nome: "Chevrolet Onix Plus",
        marca: "Chevrolet",
        cor: "Preto",
        ano: 2021,
        km: "50.000",
        preco:"70.000,00",
        imagem: "/images/onixplus.jpeg",
        tipo: "Hatch"
    },
    {
        nome: "Toyota Corolla",
        marca: "Toyota",
        cor: "Branco",
        ano: 2023,
        km: "13.000",
        preco: "130.000,00",
        imagem: "/images/corolla2023.jpeg",
        tipo: "Sedan"
    },
    {
        nome: "Toyota SW4",
        marca: "Toyota",
        cor: "Branco",
        ano: 2022,
        km: "20.000",
        preco: "150.000,00",
        imagem: "/images/sw42022.jpeg",
        tipo: "SUV"
    },
    {
        nome: "Porsche 911 GT3",
        marca: "Porsche",
        cor: "Branco",
        ano: 2021,
        km: "5.000",
        preco: "900.000,00",
        imagem: "/images/porche.jpeg",
        tipo: "Hatch"
    },
    {
        nome: "Volkswagen Golf GTI",
        marca: "Volkswagen",
        cor: "Azul",
        ano: 2021,
        km: "60.000",
        preco: "90.000,00",
        imagem: "/images/Golf.jpeg",
        tipo: "Hatch"
    },
    {
        nome: "BYD Seal",
        marca: "BYD",
        cor: "Vermelho",
        ano: 2023,
        km: "15.000",
        preco: "400.000,00",
        imagem: "/images/byd.jpeg",
        tipo: "SUV"
    },
    {
        nome: "Volkswagen Jetta",
        marca: "Volkswagen",
        cor: "Azul",
        ano: 2020,
        km: "20.000",
        preco: "80.000,00",
        imagem: "/images/jetta2022.jpeg",
        tipo: "Sedan"
    },
    {
        nome: "Tesla Model S",
        marca: "Tesla",
        cor: "Vermelho",
        ano: 2024,
        km: "11.000",
        preco: "500.000,00",
        imagem: "/images/tesla.jpeg",
        tipo: "Sedan"
    },
    {
        nome: "Mitsubishi Pajero",
        marca: "Mitsubishi",
        cor: "Branco",
        ano: 2023,
        km: "3.000",
        preco: '100.000,00',
        imagem: "/images/pajero2021.jpeg",
        tipo: "SUV"
    },
    {
        nome: "Ford Fusion",
        marca: "Ford",
        cor: "vermelho",
        ano: 2023,
        km: "9.000",
        preco: "120.000,00",
        imagem: "/images/fusion2024.jpeg",
        tipo: "Sedan"
    },
    {
        nome: "Honda HRV",
        marca: "Honda",
        cor: "Vermelho",
        ano: 2022,
        km: "25.000",
        preco: "140.000,00",
        imagem: "/images/hrv2023.jpeg",
        tipo: "SUV"
    },
    {
        nome: "Lamborghini Huracan",
        marca: "Lamborghini",
        cor: "Azul",
        ano: 2023,
        km: "5.000",
        preco: "1.200.000,00",
        imagem: "/images/huracan.jpeg",
        tipo: "Hatch"
    },
    {
        nome: "Ford Ka",
        marca: "Ford",
        cor: "Branco",
        ano: 2019,
        km: "40.000",
        preco: "50.000,00",
        imagem: "/images/fodka.jpeg",
        tipo: "Hatch"
    },
    {
        nome: "BMW M440i xDRIVER",
        marca: "BMW",
        cor: "Azul",
        ano: 2023,
        km: "6.000",
        preco: "700.000,00",
        imagem: "/images/bmw2024.jpeg",
        tipo: "Sedan"
    }
];

export const Carros = {
    getAll: ():Data[] => {
        return data
    },
    getType: (tipo:DataTipo): Data[] => {
        return data.filter(item => item.tipo === tipo)
    },
    getFromName:(nome:string): Data[] => {
        return data.filter(item => 
            item.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1
        )
    },
    getFromAdvanced: (ano: number, km: string, preco: string): Data[] => {
        return data.filter(item =>
            (ano ? item.ano === ano : true) &&
            (km ? item.km <= km : true) &&
            (preco ? item.preco <= preco : true)
        );
    }
};