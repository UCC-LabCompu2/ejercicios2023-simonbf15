/**
 * Permite convertir unidades entre metros, pies, pulgadas y yardas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 * @return
 */

let conversorUnidades = (id, valor) => {
    let met, pul, pie, yard;

    // ver eso
if (valor.includes(",")) {
    valor = valor.replace("," , ".");
}

    if (isNaN(valor)) {
        met = "";
        yard = "";
        pul = "";
        pie = "";
        alert("El valor ingresado es incorrecto");
    } else if (id == "metro") {
        met = document.lasUnidades.unid_metro.value;
        yard = 1.09361 * valor;
        pul = 39.3701 * valor;
        pie = 3.28084 * valor;
    } else if (id == "pie") {
        met = 0.3048  * valor;
        yard = 0.333333 * valor;
        pul =  12 * valor;
        pie =  document.lasUnidades.unid_pie.value;

    } else if (id == "pulgada") {
        met = 0.0254 * valor;
        yard = 0.0277778 * valor;
        pul =  document.lasUnidades.unid_pulgada.value;
        pie =  0.0833333 * valor;

    } else if (id == "yarda") {
        met = 0.9144 * valor;
        yard = document.lasUnidades.unid_yarda.value;
        pul =   36 * valor;
        pie =  3 * valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yard*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;

}


/**
 * Permite convertir grados a radianes y viceversa.
 * @method convertirGR
 * @param {string} id - Id del input del formulario
 * @return
 */

let convertirGR = (id) => {
    let gr, rad;
    gr = document.getElementById("grados").value;
    rad = document.getElementById("radianes").value;

    if (isNaN(gr )|| isNaN(rad)){
    gr="";
    rad="";
        alert('Los valores ingresados no son números');
    } else {
        if (id === "grados") {
            gr = document.getElementById("grados").value;
            rad = (gr * Math.PI) / 180;
        } else {
            rad = document.getElementById("radianes").value;
            gr = rad * 180 / Math.PI;
        }
    }
    document.getElementById("radianes").value = rad;
    document.getElementById("grados").value = gr
}

/**
 * Permite mostrar u ocultar un div
 * @method mostrar_ocultar
 * @param {string} valor - valor asociado a un radio button del html
 */

let mostrar_ocultar = (valor) => {

    if (valor === "val_mostrar") {
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

let sumar = () => {
    let sumando1, sumando2, resultado;


    sumando1 = document.getElementById("nums1").value;
    sumando2 = document.getElementById("nums2").value;
    resultado = Number(sumando1) + Number(sumando2);
    document.getElementById("totalS").value=resultado;

}

let generarUrl =() => {
const dist = document.getElementById("distancia").value ;
const unid = document.getElementsByName("unidades")[0].value;
const urlComp = `segundaWeb.html#${dist}#${unid}`;
    // const urlComp = "segundaWeb.html#"+dis+"#"+unid; //    hacen lo mismo
window.open(urlComp,"_self");
}

let cargarValores = () => {
let urlCompleta = window.location.href;
urlCompleta = urlCompleta.split("#");

const distancia = urlCompleta[1];
const unidad = urlCompleta[2];

document.getElementById("dist").value=`${distancia} ${unidad}`;

}

let guardarDatosLS = () => {
    const dist = document.getElementById("distancia").value;
    const unid = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS",unid);
    window.open("web2.html");
}

let tomarDatosLS = () => {
    const cant = localStorage.getItem("distanciaLS");
    const unid = localStorage.getItem("unidadLS");

document.getElementById("dist").value = `${cant} ${unid}`;

}

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    ctx.fillStyle="#1513fa";
    ctx.arc(anchoMax/2,alturaMax/2,100,0,2*Math.PI);
    ctx.fill();

    ctx.fillRect(0,alturaMax-100,150,100);
    ctx.fill();
    ctx.stroke();
}

let limpiarCanvas = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

let dibujar = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown=function (){bandera=true};
    canvas.onmouseup = function () {bandera=false};
    if (bandera) {
        ctx.fillRect(posX - 10, posY - 100, 5, 5);
        ctx.fill();
    }

}