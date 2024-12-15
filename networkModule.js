//- Interfaz
//- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

const os = require('node:os');

function myInterfaces () {
    const interfaces = os.networkInterfaces(); //?Obtengo un objeto con 2 arrays con subarrays
    //console.log(interfaces);
    //console.log(Object.entries(interfaces)[0][0]);
    
    //! 1ERA INTERFAZ
    const interface1 = Object.entries(interfaces)[0]; //? Obtengo un array de objetos de la primera interfaz

    //*Wifi1
    const interface1Name = interface1[0]; //?Obtengo el nombre de la primera interface
    interface1.shift();
    //console.log(interface1);

    let allInterfaces = [];
    
    for (const interfaceWifiArrays of interface1) {
        for (const interfaceWifi of interfaceWifiArrays) {
            const wifiFamily = interfaceWifi.family;
            const wifiAddress = interfaceWifi.address;
            const wifiInternal = interfaceWifi.internal;
            //console.log(wifiInternal);
            let wifiInterface = {
                Interface: interface1Name,
                Familia: wifiFamily,
                Dirección: wifiAddress,
                Interno: wifiInternal
            }
            allInterfaces.push(wifiInterface);
        }
        
    }
  
    //! 2DA INTERFAZ
    //* Loopback Pseudo-Interface 1
    const interface2 = Object.entries(interfaces)[1]; //? Obtengo un array de objetos de la segunda interfaz
    //console.log(interface2);
    
    const interface2Name = interface2[0]; //?Obtengo el nombre de la primera interface
    interface2.shift();
    //console.log(interface2);
    
    for (const interfaceLoopbackArrays of interface2) {
        for (const interfaceLoopback of interfaceLoopbackArrays) {
            const loopbackFamily = interfaceLoopback.family;
            const loopbackAddress = interfaceLoopback.address;
            const loopbackInternal = interfaceLoopback.internal;
            //console.log(wifiInternal);
            let loopbackInterface = {
                Interface: interface2Name,
                Familia: loopbackFamily,
                Dirección: loopbackAddress,
                Interno: loopbackInternal
            }
            allInterfaces.push(loopbackInterface);
        }
        
    }
    
    return allInterfaces;
}   

//console.log(myInterfaces());

module.exports = myInterfaces;