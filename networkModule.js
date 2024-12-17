//- Interfaz
//- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

const os = require('node:os');

function myInterfaces () {
    const interfaces = os.networkInterfaces(); //?Obtengo un objeto con 2 arrays con subarrays
    //console.log(interfaces);
    //console.log(Object.entries(interfaces)[0][0]);
    
    //? Obtengo un array de objetos de cada interfaz
    const interface1 = Object.entries(interfaces)[0]; 
    const interface2 = Object.entries(interfaces)[1];

    //?Obtengo el nombre de cada interface
    const interface1Name = interface1[0]; 
    const interface2Name = interface2[0];
    //console.log(interfaces);

    //?Obtengo los arrays de cada interface
    const interface1Array = interface1[1];
    const interface2Array = interface2[1];

    let allInterfaces = [];

    //! 1ERA INTERFAZ
    for (const interfaceWifiArrays of interface1Array) {
        //console.log(interfaceWifiArrays);
        let wifiInterface = {
            Interface: interface1Name,
            Familia: interfaceWifiArrays.family,
            Dirección: interfaceWifiArrays.address,
            Interno: interfaceWifiArrays.internal
        }
        allInterfaces.push(wifiInterface);
    }
  
    //! 2DA INTERFAZ
    for (const interfaceLoopbackArrays of interface2Array) {
        let loopbackInterface = {
            Interface: interface2Name,
            Familia: interfaceLoopbackArrays.family,
            Dirección: interfaceLoopbackArrays.address,
            Interno: interfaceLoopbackArrays.internal
        }
        allInterfaces.push(loopbackInterface);
    }
    return allInterfaces;
}   

//myInterfaces();
module.exports = myInterfaces;