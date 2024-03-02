const data = {
    categorias: [
        {
            nombre: "Smartphones",
            productos: [
                {
                    nombre: "Samsung Galaxy S23 Ultra",
                    precio: 149990,
                    img: "",
                    destacados: true,
                },
                {
                    nombre: "iPhone 14 Pro Max",
                    precio: 169990,
                    img: "",
                    destacados: false,
                },
                {
                    nombre: "Xiaomi 13 Pro",
                    precio: 129990,
                    img: "",
                    destacados: false,
                },
            ],
        },
        {
            nombre: "Computadoras portátiles",
            productos: [
                {
                    nombre: "MacBook Pro 14",
                    precio: 249990,
                    img: "",
                    destacados: true,
                },
                {
                    nombre: "Dell XPS 13 Plus",
                    precio: 199990,
                    img: "",
                    destacados: false,
                },
                {
                    nombre: "Lenovo ThinkPad X1 Carbon",
                    precio: 179990,
                    img: "",
                    destacados: false,
                },
            ],
        },
        {
            nombre: "Televisores",
            productos: [
                {
                    nombre: "Samsung QLED 8K QN900B",
                    precio: 499990,
                    img: "",
                    destacados: true,
                },
                {
                    nombre: "LG OLED C2",
                    precio: 349990,
                    img: "",
                    destacados: false,
                },
                {
                    nombre: "Sony Bravia XR A80L",
                    precio: 299990,
                    img: "",
                    destacados: false,
                },
            ],
        },
    ],
};

function getData() {

    data.categorias.map(cat => {

        cat.productos.map(pr=>{
            document.querySelectorAll('.productos')[0].innerHTML += `<div class='card--container'>
            <div class='card--image'>
                <img src=${pr.img} width='120px' height='120px'/>
            </div>
            <div class='card--name'>
                ${pr.nombre}
            </div>
            <div class='card--price'>
                S/.${pr.precio}
            </div>
        </div>`;

        if(pr.destacados){
            document.querySelectorAll(".destacado")[0].innerHTML += `<div class='card--container'>
            <div class='card--image'>
                <img src=${pr.img} width='120px' height='120px'/>
            </div>
            <div class='card--name'>
                ${pr.nombre}
            </div>
            <div class='card--price'>
                S/.${pr.precio}
            </div>
        </div>`;
        }

        })
    })


    console.log(data)
}

getData();