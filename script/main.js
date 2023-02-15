'use strict';

import {validateString, vAvg } from './validate.js';
import {paintCard, addStudent, modalAlert} from './paint.js'

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

/*Generar evetos 
    1. colocando e nombre del metodo en el atributo onclick, onmouseover,
    onmouseout de la etiqueta
    2. mediante propedia 
    3. mediante el addevenlisterner
*/

btnAgregar.onclick = function (){
    //console.log('evento mediante propiedad');
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;

    //console.log(`${name} ${lastname} ${avg} ${op}`)

    if(validateString(name) && validateString(lastName) && op != 0){
        if((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name, lastName, avg);
            modalAlert("agregar")
        }else{
            document.querySelector('#promedio').value="";
            modalAlert("promedio Invalido");
        }

    }else{
        modalAlert("Datos Invalidos, revisar los datos")
    }
}

btnMostrar.addEventListener("click", function (){
    paintCard("ESTUDIANTE");
    /*agregar el modal 
    borrar los estudiantes despues de ingresados
    crear el card de los profesores 
    y uno de egresados 
    */
})