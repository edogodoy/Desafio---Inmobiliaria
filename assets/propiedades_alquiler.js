import { propiedades_alquiler } from './objetos.js';



const alquiler = document.querySelector('#alquiler');


let html = `
<h2>Propiedades en alquiler</h2>
<div class="row">`;
    
    let contalquiler = 0;
    for (const palquiler of propiedades_alquiler) {
        if (contalquiler === 50) {
            break;
        }

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
                        <p class="text-danger"><i class="fas fa-smoking-ban"></i> ${palquiler.smote}</p>
                        <p class="text-danger"><i class="fa-solid fa-ban"></i> ${palquiler.pets}</p>
                    </div>
                </div>
            </div>
        `;
        contalquiler++;
    }

    html += `</div>`;






    alquiler.innerHTML = html;
