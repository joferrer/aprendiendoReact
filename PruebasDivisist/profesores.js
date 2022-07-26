
const pensum = require('./ing_sistemas_pensum.json');
const generarJsonProfesores = async (cookie)=>{

    console.log('PENSUM: '+pensum.programa);

    const materias = pensum.pensum;

    materias.forEach((materia)=>{
        
        //fetch('',);

    });

};

generarJsonProfesores();


module.exports = generarJsonProfesores;

