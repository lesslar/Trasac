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
                    precioDescuento: 10000
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
                    precioDescuento: 20000
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
                    precioDescuento: 50000
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
                let desc = (pr.precioDescuento * 100) / pr.precio;
                document.querySelectorAll(".destacado")[0].innerHTML += `<div class='card--container'>
                <div class="descuento">${Math.floor(desc)}% OFF</div>
            <div class='card--image'>
                <img src=${pr.img} width='120px' height='120px'/>
            </div>
            <div class='card--name'>
                ${pr.nombre}
            </div>
            <s class='oldPrice'>S/${pr.precio}</s>
            <div class='card--price'>
                S/${pr.precio - pr.precioDescuento}
            </div>
            <div>
                <button class="card--buttons" >Comprar</button>
            </div>
            <div>
                <button class="card--buttons" >Añadir al carrito</button>
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
                S/${pr.precio}
            </div>
            <div>
                <button class="card--buttons" >Comprar</button>
            </div>
            <div>
                <button class="card--buttons" >Añadir al carrito</button>
            </div>
        </div>`;
            }

        })
    });


    if (document.querySelectorAll('.card--buttons') != null) {
        let btns = document.querySelectorAll('.card--buttons');

        for (let ii = 0; ii < btns.length; ii++) {
            btns[ii].addEventListener("click", (e) => {
                time = 2000;
                let key = e.target.innerText.toLowerCase() == "comprar"
                if (key) {

                    AlertSuccess(`<span class="material-symbols-outlined">
                                    done
                                  </span>La compra ha sido exitosa`, 
                                  time, ".header--alert");
                }
                else {
                    AlertSuccess(`<span class="material-symbols-outlined">
                                    done
                                </span>Se ha añadido al carrito exitosamente`, 
                                time, ".header--alert-cart");
                }
            })
        }
    }
}

async function AlertSuccess(text, time, id) {
    let before;
    let after;
    if (id != ".header--alert") {
        before = document.querySelector('.header--alert-cart');
        after = document.querySelector('.header--alert');
    }
    else {
        before = document.querySelector('.header--alert');
        after = document.querySelector('.header--alert-cart');
    }

    await setTimeout(() => {
        before.animation = "success-hide 1s steps(300) normal"
        before.opacity = "0";
        before.right = "0%";
    }, 10)

    await setTimeout(() => {
        after.animation = "success-hide 1s steps(300) normal"
        after.opacity = "0";
        after.right = "0%";
    }, 10)

    let alerting = document.querySelector(id);

    alerting.innerHTML = text;
    alerting.style.opacity = "1";
    alerting.style.animation = "success 1s steps(300)"

    await setTimeout(() => {
        alerting.style.animation = "success-hide 1s steps(300) normal"
        alerting.style.opacity = "0";
        alerting.style.right = "0%";
    }, time)
}

getData();