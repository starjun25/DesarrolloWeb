'use strict'

import { chAvg } from "./validate.js";
const cardE = document.getElementById('cardsEstudiantes');
const students = [];

const paintCard = (typ) =>{
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateS = document.getElementById('templateEstudiante').content;

    if (typ === 'ESTUDIANTE'){
        for (let i of students){
            const clonTem = templateS.cloneNode(true);
            clonTem.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
            clonTem.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDO: ${i.apellido.toUpperCase()}`;
            clonTem.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            clonTem.querySelector('.text-aprobado').innerHTML = `${chAvg(i.prom)}`;
            fragment.appendChild(clonTem);
        }
    }else{

    }

    cardE.appendChild(fragment);
};

const addStudent = (name, lastName, avg) => {
    //objeto literal de Js
    let student = {
        nom : name,
        apellido : lastName,
        prom : avg
    }
    
    students.push(student);
    alert('Se agrego estudiante');
};

const modalAlert = (cad) => {
    const alert = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');

    img.src = './img/eliminar-simbolo.png';
    img.className="close";

    texto.setAttribute("class", "textAlerta");
    alert.setAttribute("id", "textAlerta");
    alert.setAttribute("class", "alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;

    alert.appendChild(img);
    alert.appendChild(texto);

    document.body.appendChild(alert);
    img.onclick = function (){
        document.getElementById("textAlerta").remove();
    }
}

export {paintCard, addStudent, modalAlert}