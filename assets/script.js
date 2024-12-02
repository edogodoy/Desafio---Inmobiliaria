import { propiedades_venta, propiedades_alquiler } from './objetos.js';

// Resto de tu código

const venta = document.querySelector('#venta');
const alquiler = document.querySelector('#alquiler');

const fumar = '<span class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</span>';
const nofumar = '<span class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>';
const mascotas = '<span class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</span>';
const nomascotas = '<span class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';

let htmlv = `
<h2>Propiedades en venta</h2>
<div class="row">`;

let contventa = 0;
for (const pventa of propiedades_venta) {
    if (contventa === 3) {
        break;
    }
    const smokeStatus = pventa.smoke ? fumar : nofumar;
    const petsStatus = pventa.pets ? mascotas : nomascotas;
    htmlv += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${pventa.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                    <h5 class="card-title">${pventa.nombre}</h5>
                    <p class="card-text">${pventa.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${pventa.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${pventa.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${pventa.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i>${pventa.costo}</p>
                    <p>${smokeStatus}</p>
                    <p>${petsStatus}</p>
                </div>
            </div>
        </div>
    `;
    contventa++;
}
htmlv += `</div>`;
htmlv += `<a href="./propiedades_venta.html" class="btn btn-dark">Ver todas las propiedades en venta</a>`;




let htmla = `
<h2>Propiedades en alquiler</h2>
<div class="row">`;

let contalquiler = 0;
for (const palquiler of propiedades_alquiler) {
    if (contalquiler === 3) {
        break;
    }
    const smokeStatus = palquiler.smoke ? fumar : nofumar;
    const petsStatus = palquiler.pets ? mascotas : nomascotas;
    htmla += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${palquiler.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                    <h5 class="card-title">${palquiler.nombre}</h5>
                    <p class="card-text">${palquiler.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${palquiler.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${palquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${palquiler.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i>${palquiler.costo}</p>
                    <p>${smokeStatus}</p>
                    <p>${petsStatus}</p>
                </div>
            </div>
        </div>
    `;
    contalquiler++;
}
htmla += `</div>`;
htmla += `<a href="./propiedades_alquiler.html" class="btn btn-dark">Ver todas las propiedades en alquiler</a>`;





venta.innerHTML = htmlv;
alquiler.innerHTML = htmla;

