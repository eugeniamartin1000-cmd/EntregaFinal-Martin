  const productos = [
    {
        id:'1',
        name:'Servidor SOPHIA 1C',
        description: "SI-RAS-1C ",
        stock: 20,
        price: 1046.49,
        category: 'Servidores',
        subcategory: 'Legacy',
        img:'../img/RAS-SPY-SRC-LRC.svg',
    },
    {
        id:'2',
        name:'Servidor SOPHIA Light',
        description: "SI-RASL ",
        stock: 20,
        price: 1056.49,
        category: 'Servidores',
        subcategory: 'Legacy',
        img:'../img/RAS-SPY-SRC-LRC.svg',
    },
    {
        id:'3',
        name:'Servidor SOPHIA Full',
        description: "SI-RASF ",
        stock: 20,
        price: 2629.06,
        category: 'Servidores',
        subcategory: 'Legacy',
        img:'../img/RAS-SPY-SRC-LRC.svg',
    },
    {
        id:'4',
        name:'Servidor de Acceso Remoto WiBus 15',
        description: "SI-WBAS15",
        stock: 20,
        price: 490.00,
        category: 'Servidores',
        subcategory: 'WIBUS',
        img:'../img/RAW.svg'
    },
    {
        id:'5',
        name:'Servidor de Acceso Remoto WiBus 30',
        description: "SI-WBAS30",
        stock: 20,
        price: 930.00,
        category: 'Servidores',
        subcategory: 'WIBUS',
        img:'../img/RAW.svg'
    },
    {
        id:'6',
        name:'Servidor de Acceso Remoto WiBus 60',
        description: "SI-WBAS60",
        stock: 20,
        price: 1522.00,
        category: 'Servidores',
        subcategory: 'WIBUS',
        img:'../img/RAW.svg'
    },
    {
        id:'7',
        name:'Servidor de Acceso Remoto WiBus Full',
        description: "SI-WBAS",
        stock: 20,
        price: 1890.00,
        category: 'Servidores',
        subcategory: 'WIBUS',
        img:'../img/RAW.svg'
    },
    {
        id:'8',
        name:'Servidor de Spotify',
        description: "SI-SPY",
        stock: 20,
        price: 271.38,
        category: 'Servidores',
        subcategory: 'LEGACY',
        img:'../img/RAS-SPY-SRC-LRC.svg',
    },
    {
        id:'9',
        name:'Bridge LAN a WiBus',
        description: "SI-LWB",
        stock: 20,
        price: 129.00,
        category: 'Repetidores',
        subcategory: 'WIBUS',
        img:'../img/LWB.svg'
    },
    {
        id:'10',
        name:'Extensor/Repetidor de WiBus',
        description: "SI-WBRE",
        stock: 20,
        price: 39.00,
        category: 'Repetidores',
        subcategory: 'WIBUS',
        img:'../img/WBRE.svg'
    },
    {
        id:'11',
        name:'Controladora de Ambiente',
        description: "SI-RC882RD",
        stock: 20,
        price: 803.68,
        category: 'Controladoras',
        subcategory: 'Legacy',
        img:'../img/RC-RA.svg'
    },
    {
        id:'12',
        name:'Controlador Bus Remoto',
        description: "SI-SBC",
        stock: 20,
        price: 561.33,
        category: 'Controladoras',
        subcategory: 'Legacy',
        img:'../img/SBC-RAC-MBA-RB.svg'
    },
    {
        id:'13',
        name:'Zona de Audio Estéreo 50W',
        description: "SI-RA50",
        stock: 20,
        price: 452.84,
        category: 'Controladoras',
        subcategory: 'Legacy',
        img:'../img/RC-RA.svg'
    },
    {
        id:'14',
        name:'Zona de Audio Estéreo 50w',
        description: "SI-RA50W",
        stock: 20,
        price: 450.00,
        category: 'Controladoras',
        subcategory: 'Legacy',
        img:'../img/RAW.svg'
    },
    {
        id:'15',
        name:'Zona de Audio Estéreo 100w',
        description: "SI-RA100W",
        stock: 20,
        price: 561.33,
        category: 'Controladoras',
        subcategory: 'Legacy',
        img:'../img/RAW.svg'
    },
    {
        id:'16',
        name:'Zona de Audio Estéreo 150w',
        description: "SI-RA150W",
        stock: 20,
        price: 749.00,
        category: 'Controladoras',
        subcategory: 'Legacy',
        img:'../img/RAW.svg'
    },
    {
        id:'17',
        name:'Led inteligente Blanco cálido',
        description: "SI-SL07W",
        stock: 20,
        price: 18.28,
        category: 'Smart-led',
        subcategory: 'Legacy',
        img:'../img/SL07.svg'
    },
    {
        id:'18',
        name:'Led inteligente RGBW',
        description: "SI-SL86",
        stock: 20,
        price: 24.67,
        category: 'Smart-led',
        subcategory: 'Legacy',
        img:'../img/SL86.svg',
    },
    {
        id:'19',
        name:'Led inteligente Blanco cálido AR111',
        description: "SI-SL006W AR111W",
        stock: 20,
        price: 42.28,
        category: 'Smart-led',
        subcategory: 'Legacy',
        img:'../img/SL006W.svg',
    },
    {
        id:'20',
        name:'Led inteligente RGBW AR111',
        description: "SI-SL166FC AR111",
        stock: 20,
        price: 73.22,
        category: 'Smart-led',
        subcategory: 'Legacy',
        img:'../img/SL166FC.svg',
    },
    {
        id:'21',
        name:'Smart Led WiBus',
        description: "SI-SL01GU10",
        stock: 20,
        price: 25.00,
        category: 'Smart-led',
        subcategory: 'WIBUS',
        img:'../img/SL01.svg'
    },
    {
        id:'22',
        name:'Smart Led WiBus RGBW',
        description: "SI-SL01FCGU10",
        stock: 20,
        price: 32.00,
        category: 'Smart-led',
        subcategory: 'WIBUS',
        img:'../img/SL01.svg'
    },
    {
        id:'23',
        name:'Controladora de Cortinas',
        description: "SI-CC5A",
        stock: 20,
        price: 58.94,
        category: 'Controladores-perisfericos',
        subcategory: 'Legacy',
        img:'../img/CC5A-RR5A-BIR-WAC-WACDI.svg'
    },
    {
        id:'24',
        name:'Controladora de Cargas Generales',
        description: "SI-RR5A",
        stock: 20,
        price: 58.94,
        category: 'Controladores-perisfericos',
        subcategory: 'Legacy',
        img:'../img/CC5A-RR5A-BIR-WAC-WACDI.svg'
    },
    {
        id:'25',
        name:'Emisor IR ',
        description: "SI-BIR",
        stock: 20,
        price: 108.28,
        category: 'Controladores-perisfericos',
        subcategory: 'Legacy',
        img:'../img/CC5A-RR5A-BIR-WAC-WACDI.svg'
    },
    {
        id:'26',
        name:'Adaptador Bus a sistema de Acceso Wiegand',
        description: "SI-WAC",
        stock: 20,
        price: 209.21,
        category: 'Controladores-perisfericos',
        subcategory: 'Legacy',
        img:'../img/CC5A-RR5A-BIR-WAC-WACDI.svg'
    },
    {
        id:'27',
        name:'Adaptador Bus a sistema de Acceso Wiegand con entrada Digital',
        description: "SI-WACDI",
        stock: 20,
        price: 230.13,
        category: 'Controladores-perisfericos',
        subcategory: 'Legacy',
        img:'../img/CC5A-RR5A-BIR-WAC-WACDI.svg'
    },
    {
        id:'28',
        name:'Controladora de Cortinas WiBus',
        description: "SI-CC5AW",
        stock: 20,
        price: 78.00,
        category: 'Controladores-perisfericos',
        subcategory: 'WiBus',
        img:'../img/CC5AW-RR5AW-BIRW-WACW.svg',
    },
    {
        id:'29',
        name:'Controladora de Cargas Generales WiBus',
        description: "SI-RR5AW",
        stock: 20,
        price: 78.00,
        category: 'Controladores-perisfericos',
        subcategory: 'WiBus',
        img:'../img/CC5AW-RR5AW-BIRW-WACW.svg',
    },
    {
        id:'30',
        name:'Emisor IR WiBus ',
        description: "SI-BIRW",
        stock: 20,
        price: 98.00,
        category: 'Controladores-perisfericos',
        subcategory: 'WiBus',
        img:'../img/CC5AW-RR5AW-BIRW-WACW.svg',
    },
    {
        id:'31',
        name:'Adaptador Bus a sistema de Acceso Wiegand WiBus',
        description: "SI-WACW",
        stock: 20,
        price: 249.00,
        category: 'Controladores-perisfericos',
        subcategory: 'WiBus',
        img:'../img/CC5AW-RR5AW-BIRW-WACW.svg',
    },
    {
        id:'32',
        name:'Controladora de Tira LED',
        description: "SI-LSC10A",
        stock: 20,
        price: 37.32,
        category: 'Controladores-perisfericos',
        subcategory: 'Legacy',
        img:'../img/LSC10A.svg'
    },
    {
        id:'33',
        name:'Controladora de Tira LED WiBus',
        description: "SI-LSC10AW",
        stock: 20,
        price: 43.00,
        category: 'Controladores-perisfericos',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },


    {
        id:'34',
        name:'Expansor Bus',
        description: "SI-RT244",
        stock: 20,
        price: 199.00,
        category: 'Controladores-perisfericos',
        subcategory: 'Legacy',
        img:'../img/RT244.svg'
    },
    {
        id:'35',
        name:'Expansor Bus WiBus',
        description: "SI-RT244W",
        stock: 20,
        price: 229.00,
        category: 'Controladores-perisfericos',
        subcategory: 'WiBus',
        img:'../img/RT244W.svg'
    },
    {
        id:'36',
        name:'Tecla GAIA 2CH Blanca',
        description: "SI-GAIA2-WI",
        stock: 20,
        price: 115.00,
        category: 'Smart-touch',
        subcategory: 'Legacy',
        img:'../img/GAIA2.svg'
    },
    {
        id:'37',
        name:'Tecla GAIA 4CH Blanca',
        description: "SI-GAIA4-WI",
        stock: 20,
        price: 169.00,
        category: 'Smart-touch',
        subcategory: 'Legacy',
        img:'../img/GAIA4.svg'
    },
    {
        id:'38',
        name:'Tecla GAIA 2CH Negra',
        description: "SI-GAIA2-BL",
        stock: 20,
        price: 115.00,
        category: 'Smart-touch',
        subcategory: 'Legacy',
        img:'../img/GAIA2BL.svg'
    },
    {
        id:'39',
        name:'Tecla GAIA 4CH Negra',
        description: "SI-GAIA4-BL",
        stock: 20,
        price: 169.00,
        category: 'Smart-touch',
        subcategory: 'Legacy',
        img:'../img/GAIA4BL.svg'
    },
      {
        id:'40',
        name:'Tecla GAIA 2CH Blanca WiBus',
        description: "SI-GAIA2W-WI",
        stock: 20,
        price: 115.00,
        category: 'Smart-touch',
        subcategory: 'WiBus',
        img:'../img/GAIA2W.svg'
    },
    {
        id:'41',
        name:'Tecla GAIA 4CH Blanca WiBus',
        description: "SI-GAIA4W-WI",
        stock: 20,
        price: 169.00,
        category: 'Smart-touch',
        subcategory: 'WiBus',
        img:'../img/GAIA4W.svg'
    },
    {
        id:'42',
        name:'Tecla GAIA 2CH Negra WiBus',
        description: "SI-GAIA2W-BL",
        stock: 20,
        price: 115.00,
        category: 'Smart-touch',
        subcategory: 'WiBus',
        img:'../img/GAIAW2BL.svg'
    },
    {
        id:'43',
        name:'Tecla GAIA 4CH Negra WiBus',
        description: "SI-GAIA4W-BL",
        stock: 20,
        price: 169.00,
        category: 'Smart-touch',
        subcategory: 'WiBus',
        img:'../img/GAIAW4BL.svg'
    },
    {
        id:'44',
        name:'Panel de Control 4" Hogar',
        description: "SI-SP4",
        stock: 20,
        price: 349.00,
        category: 'Smart-touch',
        subcategory: 'WiBus',
        img:'../img/SP.svg'
    },
    {
        id:'45',
        name:'Panel de Control 4" Hotel',
        description: "SI-SP4H",
        stock: 20,
        price: 349.00,
        category: 'Smart-touch',
        subcategory: 'WiBus',
        img:'../img/SPH.svg'
    },
    {
        id:'46',
        name:'Panel de Control 11"',
        description: "SI-SP11",
        stock: 20,
        price: 549.00,
        category: 'Smart-touch',
        subcategory: 'WiBus',
        img:'../img/SP11.svg'
    },
    {
        id:'47',
        name:'Módulo GAIA 2 Canales Réle (Fail Safe)',
        description: "SI-FSM2R",
        stock: 20,
        price: 49.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'48',
        name:'Módulo GAIA 4 Canales Réle (Fail Safe)',
        description: "SI-FSM4R",
        stock: 20,
        price: 59.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'49',
        name:'Módulo GAIA 2 Canales Dimmer (Fail Safe)',
        description: "SI-FSM2T",
        stock: 20,
        price: 69.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'50',
        name:'Módulo GAIA 4 Canales Dimmer (Fail Safe)',
        description: "SI-FSM4T",
        stock: 20,
        price: 79.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'51',
        name:'Fuente de Alimentación Tecla Gaia',
        description: "SI-GPSU",
        stock: 20,
        price: 39.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'52',
        name:'Módulo de Control de Tecla Estándar 2 Switches Dimmer',
        description: "SI-SS2CHT",
        stock: 20,
        price: 65.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'53',
        name:'Módulo de Control de Tecla de Estándar 2 Switches Réle',
        description: "SI-SS2CHR",
        stock: 20,
        price: 55.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'54',
        name:'Módulo de Control de Tecla de Estándar 4 Switches Dimmer',
        description: "SI-SS4CHT",
        stock: 20,
        price: 95.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'55',
        name:'Módulo de Control de Tecla de Estándar 4 Switches Triac',
        description: "SI-SS4CHR",
        stock: 20,
        price: 75.00,
        category: 'Modulos-extensores',
        subcategory: 'WiBus',
        img:'../img/LSC10AW-FSM-SS-GPSU.svg',
    },
    {
        id:'56',
        name:'Cerradura Digital Protocolo SOPHIA',
        description: "SI-DLT-S",
        stock: 20,
        price: 219.00,
        category: 'Smart-locks',
        subcategory: 'WiBus',
        img:'../img/DLT.svg'
    },
    {
        id:'57',
        name:'Cerradura Digital Protocolo TUYA',
        description: "SI-DLT-T",
        stock: 20,
        price: 219.00,
        category: 'Smart-locks',
        subcategory: 'WiBus',
        img:'../img/DLT.svg'
    },
    {
        id:'58',
        name:'Cerradura Digital Semi-automática Protocolo SOPHIA',
        description: "SI-DLSA-S",
        stock: 20,
        price: 195.00,
        category: 'Smart-locks',
        subcategory: 'WiBus',
        img:'../img/DLSA.svg'
    },
    {
        id:'59',
        name:'Cerradura Digital Semi-automática Protocolo TTLOCK',
        description: "SI-DLSA-TL",
        stock: 20,
        price: 195.00,
        category: 'Smart-locks',
        subcategory: 'WiBus',
        img:'../img/DLSA.svg'
    },
    {
        id:'60',
        name:'Cerradura Digital Automática Full Protocolo SOPHIA',
        description: "SI-DLFA-S",
        stock: 20,
        price: 295.00,
        category: 'Smart-locks',
        subcategory: 'WiBus',
        img:'../img/DLFA.svg'
    },
    {
        id:'61',
        name:'Controladora Lyra by SOPHIA',
        description: "SI-SRC",
        stock: 20,
        price: 423.83,
        category: 'Smart-Roof',
        subcategory: 'WiBus',
        img:'../img/RAS-SPY-SRC-LRC.svg',
    },
    {
        id:'62',
        name:'Controladora Livo by SOPHIA',
        description: "SI-LRC",
        stock: 20,
        price: 423.83,
        category: 'Smart-Roof',
        subcategory: 'WiBus',
        img:'../img/RAS-SPY-SRC-LRC.svg',
    },
    {
        id:'63',
        name:'Panel Lyra by SOPHIA',
        description: "SI-RP",
        stock: 20,
        price: 123.24,
        category: 'Smart-Roof',
        subcategory: 'WiBus',
        img:'../img/RP.svg'
    },
    {
        id:'64',
        name:'Panel Livo by SOPHIA',
        description: "SI-IRC",
        stock: 20,
        price: 45.96,
        category: 'Smart-Roof',
        subcategory: 'WiBus',
        img:'../img/IRP.svg'
    },
    //VER QUE CATEGORIA PONER
    {
        id:'65',
        name:'Capturadora de Audio Remoto',
        description: "SI-RAC",
        stock: 20,
        price: 314.07,
        category: 'Otros',
        subcategory: 'Legacy',
        img:'../img/SBC-RAC-MBA-RB.svg',
    },
    {
        id:'66',
        name:'Adaptador Mod Bus',
        description: "SI-MBA",
        stock: 20,
        price: 358.94,
        category: 'Otros',
        subcategory: 'Legacy',
        img:'../img/SBC-RAC-MBA-RB.svg',
    },
    {
        id:'67',
        name:'Filtro Snubber',
        description: "SI-SNBF",
        stock: 20,
        price: 34.83,
        category: 'Otros',
        subcategory: 'Legacy',
        img:'../img/SNBF.svg'
    },
    {
        id:'68',
        name:'Adaptador RS232/RS485/TTL',
        description: "SI-RB",
        stock: 20,
        price: 314.07,
        category: 'Otros',
        subcategory: 'Legacy',
        img:'../img/SBC-RAC-MBA-RB.svg',
    },




]


let error = false
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (error) {
      reject('Hubo un error, intente más tarde');
    } else {
      resolve(productos);
    }
  });
};




export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productos.find((prod) => prod.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Producto no encontrado");
      }
    }, 500);
  });
};
