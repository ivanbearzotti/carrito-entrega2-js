let openMenu = document.querySelector('.bx-menu');

let closeMenu = document.querySelector('.bx-x');

let mobileMenu = document.querySelector('.mobile-menu');

let main = document.querySelector('.main');

let footer = document.querySelector('.footer');

openMenu.addEventListener('click', () => {
    openMenu.classList.add("hidden");
    closeMenu.classList.remove("hidden");
    mobileMenu.classList.remove("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
})

closeMenu.addEventListener('click', () => {
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    mobileMenu.classList.add("hidden");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
})

let productos = [
    {
        id: 0001,
        name: "Bandit XVI",
        type: "freeride",
        size: "8m",
        color: "orange",
        price: 899,
        stock: 10,
    },
    {
        id: 0002,
        name: "Bandit XVI",
        type: "freeride",
        size: "10m",
        color: "orange",
        price: 899,
        stock: 5,
    },
    {
        id: 0003,
        name: "Bandit XVI",
        type: "freeride",
        size: "12m",
        color: "orange",
        price: 899,
        stock: 7,
    },
    {
        id: 0004,
        name: "WTF?! V2",
        type: "freestyle",
        size: "8m",
        color: "orange",
        price: 899,
        stock: 10,
    },
    {
        id: 0005,
        name: "WTF?! V2",
        type: "freestyle",
        size: "10m",
        color: "orange",
        price: 899,
        stock: 5,
    },
    {
        id: 0006,
        name: "WTF?! V2",
        type: "freestyle",
        size: "12m",
        color: "orange",
        price: 899,
        stock: 7,
    },
    {
        id: 0007,
        name: "Bullit V2",
        type: "big air",
        size: "8m",
        color: "blue",
        price: 899,
        stock: 10,
    },
    {
        id: 0010,
        name: "Bullit V2",
        type: "big air",
        size: "8m",
        color: "blue",
        price: 899,
        stock: 5,
    },
    {
        id: 0011,
        name: "Bullit V2",
        type: "big air",
        size: "8m",
        color: "blue",
        price: 899,
        stock: 7,
    },
    {
        id: 0012,
        name: "Breeze V4",
        type: "ligth wind",
        size: "8m",
        color: "orange",
        price: 899,
        stock: 10,
    },
    {
        id: 0013,
        name: "Breeze V4",
        type: "ligth wind",
        size: "10m",
        color: "orange",
        price: 899,
        stock: 5,
    },
    {
        id: 0014,
        name: "Breeze V4",
        type: "ligth wind",
        size: "12m",
        color: "orange",
        price: 899,
        stock: 7,
    }
]

let entrada = prompt("Bienvenido a F-ONE. Si desea comprar ingrese 'SI', de lo contrario ingrese 'NO");

while((entrada.toLowerCase() != "no") && (entrada.toLowerCase() != "si")){
    entrada = prompt("Vuelva a intentarlo. Si desea comprar ingrese 'SI', de lo contrario ingrese 'NO");
}

while(entrada){
    if(entrada.toLowerCase() == "si"){

        let tipo = prompt("¿Qué tipo de kite te gustaría comprar? Existen: 'freeride', 'freestyle', 'big air' y 'ligth wind'");

        while((tipo.toLowerCase() != "freeride") && (tipo.toLowerCase() != "freestyle") && (tipo.toLowerCase() != "big air") && (tipo.toLowerCase() != "ligth wind")){
            tipo = prompt("Vuelva a intentarlo. ¿Qué tipo de kite te gustaría comprar? Existen: 'freeride', 'freestyle', 'big air' y 'ligth wind'");
        }

        if(tipo.toLowerCase() == "freeride"){
            alert("A continuación, se le mostrará los kite tipo " + tipo + " que dispone la empresa");

            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));

            let mensaje = "";
            filtrado.forEach((producto) => {
                mensaje += "ID: " + producto.id + "\n";
                mensaje += "Nombre: " + producto.name + "\n";
                mensaje += "Tipo: " + producto.type + "\n";
                mensaje += "Tamaño: " + producto.size + "\n";
                mensaje += "Color: " + producto.color + "\n";
                mensaje += "Precio: $" + producto.price + "\n";
                mensaje += "Stock: " + producto.stock + "\n\n";
            });

            alert(mensaje);

            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[0].size + ", 2: tamaño " + productos[1].size + ", 3: tamaño " + productos[2].size);

            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[0].size + ", 2: tamaño " + productos[1].size + ", 3: tamaño " + productos[2].size);
            }

            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[0].name);
            }
        }
        else if(tipo.toLowerCase() == "freestyle"){
            alert("A continuación, se le mostrará los kite tipo " + tipo + " que dispone la empresa");

            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));

            let mensaje = "";
            filtrado.forEach((producto) => {
                mensaje += "ID: " + producto.id + "\n";
                mensaje += "Nombre: " + producto.name + "\n";
                mensaje += "Tipo: " + producto.type + "\n";
                mensaje += "Tamaño: " + producto.size + "\n";
                mensaje += "Color: " + producto.color + "\n";
                mensaje += "Precio: $" + producto.price + "\n";
                mensaje += "Stock: " + producto.stock + "\n\n";
            });

            alert(mensaje);

            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[3].size + ", 2: tamaño " + productos[4].size + ", 3: tamaño " + productos[5].size);

            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[3].size + ", 2: tamaño " + productos[4].size + ", 3: tamaño " + productos[5].size);
            }

            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[3].name);
            }
        }
        else if(tipo.toLowerCase() == "big air"){
            alert("A continuación, se le mostrará los kite tipo " + tipo + " que dispone la empresa");

            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));

            let mensaje = "";
            filtrado.forEach((producto) => {
                mensaje += "ID: " + producto.id + "\n";
                mensaje += "Nombre: " + producto.name + "\n";
                mensaje += "Tipo: " + producto.type + "\n";
                mensaje += "Tamaño: " + producto.size + "\n";
                mensaje += "Color: " + producto.color + "\n";
                mensaje += "Precio: $" + producto.price + "\n";
                mensaje += "Stock: " + producto.stock + "\n\n";
            });

            alert(mensaje);

            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[6].size + ", 2: tamaño " + productos[7].size + ", 3: tamaño " + productos[8].size);

            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[6].size + ", 2: tamaño " + productos[7].size + ", 3: tamaño " + productos[8].size);
            }

            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[6].name);
            }
        }
        else if(tipo.toLowerCase() == "ligth wind"){
            alert("A continuación, se le mostrará los kite tipo " + tipo + " que dispone la empresa");

            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));

            let mensaje = "";
            filtrado.forEach((producto) => {
                mensaje += "ID: " + producto.id + "\n";
                mensaje += "Nombre: " + producto.name + "\n";
                mensaje += "Tipo: " + producto.type + "\n";
                mensaje += "Tamaño: " + producto.size + "\n";
                mensaje += "Color: " + producto.color + "\n";
                mensaje += "Precio: $" + producto.price + "\n";
                mensaje += "Stock: " + producto.stock + "\n\n";
            });

            alert(mensaje);

            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[9].size + ", 2: tamaño " + productos[10].size + ", 3: tamaño " + productos[11].size);

            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[9].size + ", 2: tamaño " + productos[10].size + ", 3: tamaño " + productos[11].size);
            }

            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[9].name);
            }
        }
        else{
            tipo = prompt("Vuelva a intentarlo. ¿Qué tipo de kite te gustaría comprar? Existen: 'freeride', 'freestyle', 'big air' y 'ligth wind'");
        }

        entrada = prompt("Si desea seguir comprando ingrese 'SI', de lo contrario ingrese 'NO'");
    }

    else if(entrada.toLowerCase() == "no"){
        alert("Vuelva pronto!");
        break;
    }

    else{
        entrada = prompt("Vuelva a intentarlo. Si desea comprar ingrese 'SI', de lo contrario ingrese 'NO");
    }
}
