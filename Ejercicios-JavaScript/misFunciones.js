/**
 * Permite convertir unidades entre metros, pies, pulgadas y yardas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 * @return
 */

let conversorUnidades = (id, valor) => {
    let met, pul, pie, yard;

if (valor.includes(",")) {
    valor = valor.replace(",",".");
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


/**
 * Permite sumar 2 numeros
 * @method sumar
 * @return
 */
let sumar = () => {
    let sumando1, sumando2, resultado;

    sumando1 = document.getElementById("nums1").value;
    sumando2 = document.getElementById("nums2").value;
    resultado = Number(sumando1) + Number(sumando2);
    document.getElementById("totalS").innerHTML=resultado;
}
/**
 * Permite restar 2 numeros
 * @method restar
 * @return
 */
let restar = () => {
    let num1, num2, resultado;

    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;
    resultado = Number(num1) - Number(num2);
    document.getElementById("totalR").innerHTML=resultado;
}

/**
 * Permite multiplicar 2 numeros
 * @method multiplicar
 * @return
 */
let multiplicar = () => {
    let factor1, factor2, resultado;

    factor1 = document.getElementById("numm1").value;
    factor2 = document.getElementById("numm2").value;
    resultado = Number(factor1) * Number(factor2);
    document.getElementById("totalM").innerHTML=resultado;
}
/**
 * Permite dividir 2 numeros
 * @method dividir
 * @return
 */
let dividir = () => {
    let dividendo, divisor, cociente;


    dividendo = document.getElementById("numd1").value;
    divisor = document.getElementById("numd2").value;
    cociente = Number(dividendo) / Number(divisor);
    document.getElementById("totalD").innerHTML=cociente;

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

    var margen =5;

    ctx.fillRect(0 + margen,alturaMax-100 - margen,150,100);
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


let dibujarCuadriculado = () => {
    var canvas= document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");

    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

    ctx.beginPath();
    for( var i=0 ; i < alturaMax;) {
    ctx.moveTo(0, i);
    ctx.lineTo(anchoMax, i);
    ctx.strokeStyle = "#ffffff"
    ctx.stroke();
    i=i+20;
}
    ctx.closePath();

    ctx.beginPath();

    for( var i=0 ; i < anchoMax ;) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, alturaMax);
    ctx.strokeStyle = "#ffffff"
    ctx.stroke();
    i=i+20;
}
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle="#af1e1e";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle="#af1e1e";
    ctx.stroke();
    ctx.closePath();
}


function dibujarImagen (posX , posY)  {
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var img= new Image();

img.src= "images/auto.png";
canvas.width=canvas.width;

img.onload=function() {
    ctx.drawImage(img, posX, posY);
}

}

x=0;
dx=2;
let animarAuto = ()=> {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img= new Image();

    img.src= "images/auto.png";

    img.onload=function() {
        ctx.drawImage(img, x, 100);
    }

    if (x>canvas.width){
        x=0;
    }
    x+=dx;

}

var intervalId;
let detenerAuto = () => {
    console.log("Se detuvo el auto")
    clearInterval(intervalId);
}


let comenzarAnimacion = () => {
    console.log("Se llamo a comenzar animacion")
    intervalId = setInterval(animarAuto, 10);
    setTimeout(detenerAuto, 6000);
}



let animarAutonuevo = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;

        ctx.drawImage(img, x, 100);
        requestAnimationFrame(animarAutonuevo);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

let animarNuevo = () => {
    requestAnimationFrame(animarAutonuevo);
}


var animationId;
let animarAuto3 = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        animationId = requestAnimationFrame(animarAuto3);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

let animarNuevo2 = () => {
    setTimeout(cancelarAnimacion, 6000);
    requestAnimationFrame(animarAuto3);
}

let cancelarAnimacion = () => {
    cancelAnimationFrame(animationId); // Cancelar la animación utilizando el ID almacenado
};