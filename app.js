/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');
const cadena = fs.readFileSync('./tareas.json', 'utf-8');

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
    //const cadena = fs.readFileSync('./tareas.json', 'utf-8');
    let arr = [];
    arr = JSON.parse(cadena);
    return JSON.parse(cadena);
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    let cadena = fs.readFileSync('./tareas.json', 'utf-8');
    let cadenaArr = [];
    cadenaArr = JSON.parse(cadena);
    cadenaArr.push(tarea);
    const listaTareas = JSON.stringify(cadenaArr);
    fs.writeFileSync('./tareas.json', listaTareas, (err) => {
        if(err){
            throw err;
        } console.log('Se guardo');
    })
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
    let cadenaArr = [];
    cadenaArr = JSON.parse(cadena);
    let otroCadena = cadenaArr.filter((obj) => {
        return obj.status === estado;
    });
    return otroCadena;
}