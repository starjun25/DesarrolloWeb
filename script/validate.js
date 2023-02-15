'use strict';

const validateString = (cad) =>{
    //ternario -> abreviacion de if y else
    let response = (cad.length>3) ? true : false;
    return response; 
}

const validateAvg = (num) =>{
    //ternario -> abreviacion de if y else
    let response = (num >= 0 && num <= 5) ? true : false;
    return response;
}

const checkAvg = (value) => {
    let result = (value >= 3 && value <= 5) ? 'APROBADO' : 'REPROBADO';
    return result;
}

export {validateAvg as vAvg, validateString , checkAvg as chAvg};
