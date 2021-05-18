/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
     
    /*const formatoTareas = [
        {"titulo":"tarea 1","status":"pendiente"},
        {"titulo":"tarea 2","status":"terminada"}
    ];*/  
    const listado = fs.readFileSync('./tareas.json', 'utf-8');
    console.log(listado);
    return listado;
    
    //return formatoTareas;
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    /*let listado = fs.readFileSync('tareas.json', 'utf-8');
    let listadoArr = [];
    console.log(JSON.parse(listado));
    listadoArr = JSON.parse(listado);
    typeof listadoArr;
    console.log(typeof listadoArr);
    listadoArr.push(tarea);
    const tareasMod = JSON.stringify(listadoArr);
    fs.writeFileSync('./tareas.json', tareasMod, (err) => {
        if(err){
            throw err;
        }console.log('Guardado');
    })*/
    return tarea;

}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   //return estado;
   //return filtrarTareasPorEstado();
}