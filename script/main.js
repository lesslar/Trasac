const data = {
    categorias: [
        {
            nombre: "Smartphones",
            productos: [
                {
                    nombre: "Samsung Galaxy S23 Ultra",
                    precio: 149990,
                    img: "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s23_ultra_cream_frente_5.png",
                    destacados: true,
                },
                {
                    nombre: "iPhone 14 Pro Max",
                    precio: 169990,
                    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HQ612_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1661963795075",
                    destacados: false,
                },
                {
                    nombre: "Xiaomi 13 Pro",
                    precio: 129990,
                    img: "https://techodyssey.co.uk/cdn/shop/files/1_91652a6f-44db-4493-82ea-8122863849d9.jpg?v=1690558323&width=493",
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
                    img: "https://storecba.com/wp-content/uploads/2022/02/macbook-pro-14.png",
                    destacados: true,
                },
                {
                    nombre: "Dell XPS 13 Plus",
                    precio: 199990,
                    img: "https://resizer.glanacion.com/resizer/v2/la-nueva-dell-xps-13-plus-en-sus-dos-75AYACAPZBC3FJPKNC25YW3OZE.jpg?auth=bb2779b0ff5304e138b38553db9206828c41bdc74ef2e1ac7aa655022d38e7df&width=780&height=520&quality=70&smart=true",
                    destacados: false,
                },
                {
                    nombre: "Lenovo ThinkPad X1 Carbon",
                    precio: 179990,
                    img: "https://www.lenovo.com/medias/lenovo-thinkpad-x1-carbon-2017-hero-LA.png?context=bWFzdGVyfHJvb3R8MTI4ODMwfGltYWdlL3BuZ3xoMDkvaDA1Lzk3NzU0NjM5MjM3NDIucG5nfGExNTQ1MjM4NWNhYTcxZjdmZTI0NjNjYWQxNjg1NjZjYWQ0NWE1NzU5MzM0Mzc2YmVkZGY2ZmYxZmE3YmEzMDM",
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
                    img: "https://www.reviews.org/app/uploads/2022/03/Samsung-QLED-2022-Header-300x158.png",
                    destacados: true,
                },
                {
                    nombre: "LG OLED C2",
                    precio: 349990,
                    img: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/bcb3f724-a01a-49e2-82f5-b0f5c2a2e16e/md08001960-DZ_03-jpg",
                    destacados: false,
                },
                {
                    nombre: "Sony Bravia XR A80L",
                    precio: 299990,
                    img: "https://www.networkhardwares.com/cdn/shop/products/1073002971_451a9e84-ddf6-423d-b884-a1e2e39c1ad4_1900x.jpg?v=1706697697",
                    destacados: false,
                },
            ],
        },
    ],
};

function getData() {

    data.categorias.map(cat => {

        cat.productos.map(pr => {

            if (pr.destacados) {
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
            else {
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
            }

        })
    })


    console.log(data)
}

getData();