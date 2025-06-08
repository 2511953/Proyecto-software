

function mostrarMensajeSocio() {
    const mensaje = document.getElementById("mensajeSocio");
    if (mensaje) {
        mensaje.textContent = "Felicitaciones, usted es oficialmente socio de nuestra heladería";
    }
}

function cotizarPedido() {

    const cantidad = document.querySelector("select").value;
    const saboresElegidos = [...document.querySelectorAll('input[name="sabor"]:checked')]
        .map(el => el.value);
    const formaPago = document.getElementById("formaPago").value;

    let base = 0;
    if (cantidad === "1/4 kilo") base = 3000;
    else if (cantidad === "1/2 kilo") base = 5500;
    else if (cantidad === "1 kilo") base = 10000;

    let adicional = saboresElegidos.length > 2 ? 500 : 0;
    let total = base + adicional;

    let descuento = (formaPago === "efectivo" || formaPago === "debito") ? 0.1 : 0;
    let totalFinal = total * (1 - descuento);

    let mensaje = "Seleccionaste: " + saboresElegidos.join(", ") +
        "<br>Total base: $" + base +
        (adicional ? "<br>Adicional por más de 2 sabores: $500" : "") +
        (descuento ? "<br>Descuento 10% por pagar con " + formaPago + ": -$" + (total * descuento).toFixed(0) : "") +
        "<br><b>Total a pagar: $" + totalFinal.toFixed(0) + "</b><br>";

    const pasosExtras = document.getElementById("pasosExtras");

    if (formaPago === "efectivo") {
        mensaje += "Paga en el local.";
        pasosExtras.innerHTML = "<p>Muchas gracias por su compra, lo esperamos.</p>";
    } else {
        mensaje += "Seleccione si desea pagar online o en el local:";
        pasosExtras.innerHTML = `
            <button onclick="pagoLocal()">Pagar en local</button>
            <button onclick="pagoOnline()">Pagar online</button>
        `;
    }

    document.getElementById("resultadoCotizacion").innerHTML = mensaje;
}

function pagoLocal() {
    document.getElementById("pasosExtras").innerHTML = "<p>Muchas gracias por su compra, lo esperamos.</p>";
}

function pagoOnline() {
    document.getElementById("pasosExtras").innerHTML = `
        <p>Seleccione método:</p>
        <button onclick="retiraLocal()">Retirar en local</button>
        <button onclick="delivery()">Delivery</button>
    `;
}

function retiraLocal() {
    document.getElementById("pasosExtras").innerHTML = `
        <button onclick="confirmarRetiro()">Pagar</button>
    `;
}

function confirmarRetiro() {
    document.getElementById("pasosExtras").innerHTML = "<p>Muchas gracias por su compra, lo esperamos.</p>";
}

function delivery() {
    document.getElementById("pasosExtras").innerHTML = `
        <p>Ingrese su dirección:</p>
        <input type="text" id="direccion" placeholder="Dirección">
        <button onclick="confirmarDelivery()">Pagar</button>
    `;
}

function confirmarDelivery() {
    const dir = document.getElementById("direccion").value;
    if (dir.trim() === "") {
        alert("Por favor ingrese una dirección válida.");
        return;
    }
    document.getElementById("pasosExtras").innerHTML = "<p>Muchas gracias por su compra, su pedido llegará en 10 minutos.</p>";
}


