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
    //console.log(interface1);
    const interfaceWifi = interface1.join(); //?Saco la familia wifi del array. Ahora tengo 4 objetos.
    const interfaceWifiFamily1 = interface1[1][0]; //? Accedo al array de la primera familia.
    const wifiFamily1 = interfaceWifiFamily1.family; //TODO familia 1 Wifi
    const wifiAddress1 = interfaceWifiFamily1.address; //TODO dirección 1 Wifi
    const wifiInternal1 = interfaceWifiFamily1.internal; //TODO interno 1 Wifi
    

    const interfaceWifiFamily2 = interface1[1][1]; //? Accedo al array de la segunda familia.
    const wifiFamily2 = interfaceWifiFamily2.family; //TODO familia 2 Wifi
    const wifiAddress2 = interfaceWifiFamily2.address; //TODO dirección 2 Wifi
    const wifiInternal2 = interfaceWifiFamily2.internal; //TODO interno 2 Wifi
    //console.log(wifiAddress2);

    const interfaceWifiFamily3 = interface1[1][2]; //? Accedo al array de la segunda familia.
    const wifiFamily3 = interfaceWifiFamily3.family; //TODO familia 3 Wifi
    const wifiAddress3 = interfaceWifiFamily3.address; //TODO dirección 3 Wifi
    const wifiInternal3 = interfaceWifiFamily3.internal; //TODO interno 3 Wifi
   // console.log(interfaceWifiFamily3);

    const interfaceWifiFamily4 = interface1[1][3]; //? Accedo al array de la segunda familia.
    const wifiFamily4 = interfaceWifiFamily4.family; //TODO familia 4 Wifi
    const wifiAddress4 = interfaceWifiFamily4.address; //TODO dirección 4 Wifi
    const wifiInternal4 = interfaceWifiFamily4.internal; //TODO interno 4 Wifi
    //console.log(interfaceWifiFamily4);

    //! 2DA INTERFAZ
    const interface2 = Object.entries(interfaces)[1]; //? Obtengo un array de objetos de la segunda interfaz
    //console.log(interface2);

    //* Loopback Pseudo-Interface 1
    const interface2Name = interface2[0]; //?Obtengo nombre de la segunda interface
    //console.log(interface2Name);
    const interfaceLoopback = interface2.join(); //?Saco la familia wifi del array. Ahora tengo 4 objetos.
    const interfaceLoopbackFamily1 = interface2[1][0]; //? Accedo al array de la primera familia.
    const LoopbackFamily1 = interfaceLoopbackFamily1.family; //TODO familia 1 Loopback
    const LoopbackAddress1 = interfaceLoopbackFamily1.address; //TODO dirección 1 Loopback
    const LoopbackInternal1 = interfaceLoopbackFamily1.internal; //TODO interno 1 Loopback
    console.log(LoopbackAddress1);
}   

myInterfaces();