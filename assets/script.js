

const notas = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
const escala = document.querySelector('#escala');
let html = '';

for (const nota of notas) {
    html += `<li>${nota}</li>`;
}
escala.innerHTML = html;



