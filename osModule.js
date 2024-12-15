//- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
//- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

const os = require('node:os');

function myPC () {
    const osName = os.platform(); //nombre del SO.
    const osType = os.type(); //tipo del SO
    const osVersion = os.release(); //versión del SO
    const osPro = os.arch(); //Arquitectura
    const cpus = os.cpus().length; //CPUs
    const osMemory = `${(os.totalmem() / 1000000).toFixed(2)} MB`;
    const osFreeMemory = `${(os.freemem() / 1000000).toFixed(2)} MB`;
    //console.log(osFreeMemory);

    return {
        Nombre: osName,
        Tipo: osType,
        Versión: osVersion,
        Arquitectura: osPro,
        CPUs: cpus,
        MemoriaTotal : osMemory,
        MemoriaLibre: osFreeMemory
    }
}

//console.log(myPC());

module.exports = myPC;