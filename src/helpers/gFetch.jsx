const products = [
    {
        id: 1,
        name: "Playera Jaspeada roja",
        size: "M",
        stock: 10,
        img: "https://http2.mlstatic.com/D_NQ_NP_851253-MLM43327424686_082020-O.webp"
    },
    {
        id: 2,
        name: "Playera Jaspeada verde",
        size: "Ch",
        stock: 20,
        img: "https://http2.mlstatic.com/D_NQ_NP_613694-MLM43327406854_082020-O.webp"
    },
    {
        id: 3,
        name: "Playera Jaspeada azul",
        size: "G",
        stock: 15,
        img: "https://http2.mlstatic.com/D_NQ_NP_613661-MLM43327422789_092020-O.webp"
    },
    {
        id: 4,
        name: "Hoodie Blanco",
        size: "M",
        stock: 15,
        img: "https://http2.mlstatic.com/D_NQ_NP_649442-MLM43325873156_082020-O.webp"
    },
    {
        id: 5,
        name: "Hoodie Negro",
        size: "G",
        stock: 8,
        img: "https://http2.mlstatic.com/D_NQ_NP_833020-MLM43325869403_082020-O.webp"
    },
    {
        id: 6,
        name: "Hoodie Verde",
        size: "Ch",
        stock: 11,
        img: "https://http2.mlstatic.com/D_NQ_NP_676816-MLM47804809118_102021-O.webp"
    },
    ,
    {
        id: 7,
        name: "Pantalón de mezclilla azul",
        size: "G",
        stock: 15,
        img:"https://http2.mlstatic.com/D_NQ_NP_722165-MLM43338317771_092020-O.webp"
    },
    {
        id: 8,
        name: "Pantalón de vestir color negro",
        size: "M",
        stock: 19,
        img: "https://http2.mlstatic.com/D_NQ_NP_723562-MLM43338381155_092020-O.webp"
    },
    {
        id: 9,
        name: "Pantalón de vestir color café",
        size: "G",
        stock: 22,
        img: "https://http2.mlstatic.com/D_NQ_NP_878010-MLM43338376408_092020-O.webp"
    },
    ,
    {
        id: 10,
        name: "Camisa Oxford rosa",
        size: "M",
        stock: 11,
        img: "https://http2.mlstatic.com/D_NQ_NP_911115-MLM43338096426_092020-O.webp"
    },
    {
        id: 11,
        name: "Camisa Oxford blanca",
        size: "24 cm",
        stock: 24,
        img:"https://http2.mlstatic.com/D_NQ_NP_759294-MLM43338099341_092020-O.webp"
    },
    {
        id: 12,
        name: "Camisa Oxford azul",
        size: "Ch",
        stock: 16,
        img: "https://http2.mlstatic.com/D_NQ_NP_810751-MLM43338101239_092020-O.webp"
    }
]


const gFetch = () => {
  return new Promise((resolve, reject) => {
    if(products != []){
        setTimeout(() =>{
            resolve(products)
        }, 3000)
    } else {
        reject("Array vacío")
    }
  });
};

export default gFetch