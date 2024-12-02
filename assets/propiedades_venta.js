import { propiedades_venta } from './objetos.js';



const venta = document.querySelector('#venta');
const fumar = '<span class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</span>';
const nofumar = '<span class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>';
const mascotas = '<span class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</span>';
const nomascotas = '<span class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';


let html = `
<h2>Propiedades en venta</h2>
<div class="row">`;

    let contventa = 0;
    for (const pventa of propiedades_venta) {
        if (contventa === 50) {
            break;
        }
        const smokeStatus = pventa.smoke ? fumar : nofumar;
        const petsStatus = pventa.pets ? mascotas : nomascotas;
        html += `
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

    html += `</div>`;




venta.innerHTML = html;
