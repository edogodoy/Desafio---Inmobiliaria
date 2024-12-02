import { propiedades_alquiler } from './objetos.js';



const alquiler = document.querySelector('#alquiler');
const fumar = '<span class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</span>';
const nofumar = '<span class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>';
const mascotas = '<span class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</span>';
const nomascotas = '<span class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>';


let html = `
<h2>Propiedades en alquiler</h2>
<div class="row">`;
    
    let contalquiler = 0;
    for (const palquiler of propiedades_alquiler) {
        if (contalquiler === 50) {
            break;
        }
        const smokeStatus = palquiler.smoke ? fumar : nofumar;
        const petsStatus = palquiler.pets ? mascotas : nomascotas;
        html += `
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

    html += `</div>`;






    alquiler.innerHTML = html;
