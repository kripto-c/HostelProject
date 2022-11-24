module.exports = [
  {
    type: [{ type: "Publico" }, { type: "Privado" }],
    client: [
      {
        personalID: "1520",
        name: "Pedro Sanchez",
        nationality: "Bulgaria",
        phoneNumber: "281",
        email: "pedrito@gmail.com",
        observation: "",
      },

      {
        personalID: "3720",
        name: "Jose Malboro",
        nationality: "Argentina",
        phoneNumber: "280",
        email: "malboro@gmail.com",
        observation: "",
      },
      {
        personalID: "3314",
        name: "Miguel Carrasco",
        nationality: "Chile",
        phoneNumber: "112",
        email: "miguelito@gmail.com",
        observation: "",
      },
    ],
    rent: [
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 05),
        price: 6580.2,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 05),
        dateOut: new Date(2023, 00, 10),
        price: 3500.5,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 20),
        price: 4000,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 05),
        price: 6580.2,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 05),
        dateOut: new Date(2023, 00, 10),
        price: 3500.5,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 20),
        price: 4000,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 05),
        price: 6580.2,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 05),
        dateOut: new Date(2023, 00, 10),
        price: 3500.5,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 20),
        price: 4000,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 05),
        price: 6580.2,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 07),
        dateOut: new Date(2023, 00, 10),
        price: 3500.5,
        observation: "",
        status: false,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 20),
        price: 4000,
        observation: "",
        status: false,
      },
    ],
    room: [
      {
        beds: 10,
        description: "Habitacion simple con 10 camas",
        image:
          "https://www.hostelclub.com/images/habitacion_compartidas_ppal.jpg",
        bathroom: false,

        price: 3500.5,
        observation: "",
        status: true,
        typeId: 1,
      },
      {
        beds: 4,
        description: "Habitacion simple con 2 cama cucheta",
        image:
          "https://milhousehostel.com/wp-content/uploads/2021/03/4476180-1394672_702_0_3538_2829_1000_800-605x605.jpg",
        bathroom: true,

        price: 1995.5,
        observation: "",
        status: false,
        typeId: 1,
      },

      {
        beds: 6,
        description: "Habitacion simple con 3 cama cuchetas",
        image:
          "https://www.kayak.com.ar/rimg/himg/33/8a/40/expediav2-570549-15b4ae-819968.jpg?width=720&height=576&crop=true",
        bathroom: false,
        price: 2450.5,
        observation: "",
        status: false,
        typeId: 1,
      },
      {
        beds: 1,
        description: "Habitacion con cama doble",
        image:
          "https://www.pensionjoakina.com/public/images/sites/2198-135177.jpg",
        bathroom: true,
        price: 4550.5,
        observation: "",
        status: false,
        typeId: 2,
      },
      {
        beds: 2,
        description: "Habitacion con cama doble y una cama simple",
        image:
          "https://previews.123rf.com/images/rilueda/rilueda1604/rilueda160400155/55280236-cama-individual-y-doble-en-la-habitaci%C3%B3n-de-hotel.jpg",
        bathroom: false,
        price: 6550.5,
        observation: "",
        status: true,
        typeId: 2,
      },
      {
        beds: 1,
        description: "Habitacion con 2 camas cuchetas",
        image:
          "https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/hostelEjemplo5.png?alt=media&token=2545fd82-f81b-4601-9b72-fbf02f12afdf",
        bathroom: false,
        price: 3500,
        observation: "",
        status: true,
        typeId: 2,
      },
      {
        beds: 3,
        description: "Habitacion con 3 camas",
        image:
          "https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/hostelejemplo6.png?alt=media&token=a06a610e-a24c-4947-9274-e89fd5b15cf8",
        bathroom: false,
        price: 3700,
        observation: "",
        status: true,
        typeId: 2,
      },
      {
        beds: 6,
        description: "Habitacion con 3 camas cuchetas",
        image:
          "https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/hostelEjemplo11.png?alt=media&token=40bb1bee-0d7b-4b07-b1a7-7defc17cea3c",
        bathroom: false,
        price: 2500,
        observation: "",
        status: true,
        typeId: 2,
      },
      {
        beds: 6,
        description: "Habitacion con 3 camas cuchetas",
        image:
          "https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/hostelEjemplo13.png?alt=media&token=3d77598d-538d-42d0-8003-a718d57cdaa7",
        bathroom: false,
        price: 2100,
        observation: "",
        status: true,
        typeId: 2,
      },
      {
        beds: 4,
        description: "Habitacion con 2 camas cuchetas",
        image:
          "https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/hostelEjemplo12.png?alt=media&token=1ad420e7-761a-4939-aa74-1a1f551558aa",
        bathroom: false,
        price: 3600,
        observation: "",
        status: true,
        typeId: 2,
      },
      {
        beds: 6,
        description: "Habitacion con 3 camas cuchetas",
        image:
          "https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/hostelEjemplo16.png?alt=media&token=0fc62769-41f6-4e40-a6dd-351cabe18b14",
        bathroom: false,
        price: 1900,
        observation: "",
        status: true,
        typeId: 2,
      },
      {
        beds: 2,
        description: "Habitacion con 2 camas",
        image:
          "https://firebasestorage.googleapis.com/v0/b/imgs-b915c.appspot.com/o/hostelEjemplo9.png?alt=media&token=fb2fa7ac-2d64-42b5-a359-62a7eaa72fbc",
        bathroom: false,
        price: 7500,
        observation: "",
        status: true,
        typeId: 2,
      },
    ],
    country: [
      {country: "Afganistan"},
      {country: "Albania"},
      {country: "Alemania"},
      {country: "Andorra"},
      {country: "Angola"},
      {country:"Antigua y Barbuda"},
      {country:"Arabia Saudita / Arabia Saudí"},
      {country:"Argelia"},
      {country:"Argentina"},
      {country:"Armenia"},
      {country:"Australia"},
      {country:"Austria"},
      {country:"Azerbaiyán"},
      {country:"Bahamas"},
      {country:"Bangladés"},
      {country:"Barbados"},
      {country:"Baréin"},
      {country:"Bélgica"},
      {country:"Belice"},
      {country:"Bielorrusia"},
      {country:"Benín"},
      {country:"Birmania / Myanmar"},
      {country:"Bolivia"},
      {country:"Bosnia y Herzegovina / Bosnia-Herzegovina"},
      {country:"Botsuana"},
      {country:"Brasil"},
      {country:"Brunei"},
      {country:"Bulgaria"},
      {country:"Burkina Faso"},
      {country:"Burundi"},
      {country:"Bután"},
      {country:"Cabo Verde"},
      {country:"Camboya"},
      {country:"Camerún"},
      {country:"Canadá"},
      {country:"Catar"},
      {country:"República Centroafricana"},
      {country:"Chad"},
      {country:"República Checa / Chequia"},
      {country:"Chile"},
      {country:"China"},
      {country:"Chipre"},
      {country:"Colombia"},
      {country:"Comoras"},
      {country:"República del Congo"},
      {country:"República Democrática del Congo"},
      {country:"Corea del Norte"},
      {country:"Corea del Sur"},
      {country:"Costa de Marfil"},
      {country:"Costa Rica"},
      {country:"Croacia"},
      {country:"Cuba"},
      {country:"Dinamarca"},
      {country:"Dominica"},
      {country:"República Dominicana"},
      {country:"Ecuador"},
      {country:"Egipto"},
      {country:"El Salvador"},
      {country:"Emiratos Árabes Unidos"},
      {country:"Eritrea"},
      {country:"Eslovaquia"},
      {country:"Eslovenia"},
      {country:"España"},
      {country:"Estados Unidos"},
      {country:"Estonia"},
      {country:"Etiopía"},
      {country:"Filipinas"},
      {country:"Finlandia"},
      {country:"Fiyi"},
      {country:"Francia"},
      {country:"Gabón"},
      {country:"Gambia"},
      {country:"Georgia"},
      {country:"Ghana"},
      {country:"Granada"},
      {country:"Grecia"},
      {country:"Guatemala"},
      {country:"Guinea"},
      {country:"Guinea-Bisáu"},
      {country:"Guinea Ecuatorial"},
      {country:"Guyana"},
      {country:"Haití"},
      {country:"Honduras"},
      {country:"Hungría"},
      {country:"India"},
      {country:"Indonesia"},
      {country:"Irak"},
      {country:"Irán"},
      {country:"Irlanda"},
      {country:"Islandia"},
      {country:"Israel"},
      {country:"Italia"},
      {country:"Jamaica"},
      {country:"Japón"},
      {country:"Jordania"},
      {country:"Kazajistán"},
      {country:"Kenia"},
      {country:"Kirguistán"},
      {country:"Kiribati"},
      {country:"Kuwait"},
      {country:"Laos"},
      {country:"Lesoto"},
      {country:"Letonia"},
      {country:"Líbano"},
      {country:"Liberia"},
      {country:"Libia"},
      {country:"Liechtenstein"},
      {country:"Lituania"},
      {country:"Luxemburgo"},
      {country:"Macedonia del Norte"},
      {country:"Madagascar"},
      {country:"Malasia"},
      {country:"Malaui"},
      {country:"Maldivas"},
      {country:"Mali / Malí"},
      {country:"Malta"},
      {country:"Marruecos"},
      {country:"Islas Marshall"},
      {country:"Mauricio"},
      {country:"Mauritania"},
      {country:"México"},
      {country:"Micronesia"},
      {country:"Moldavia"},
      {country:"Mónaco"},
      {country:"Mongolia"},
      {country:"Montenegro"},
      {country:"Mozambique"},
      {country:"Namibia"},
      {country:"Nauru"},
      {country:"Nepal"},
      {country:"Nicaragua"},
      {country:"Níger"},
      {country:"Nigeria"},
      {country:"Noruega"},
      {country:"Nueva Zelanda / Nueva Zelandia"},
      {country:"Omán"},
      {country:"Países Bajos"},
      {country:"Pakistán"},
      {country:"Palaos"},
      {country:"Palestina"},
      {country:"Panamá"},
      {country:"Papúa Nueva Guinea"},
      {country:"Paraguay"},
      {country:"Perú"},
      {country:"Polonia"},
      {country:"Portugal"},
      {country:"Reino Unido"},
      {country:"Ruanda"},
      {country:"Rumania / Rumanía"},
      {country:"Rusia"},
      {country:"Islas Salomón"},
      {country:"Samoa"},
      {country:"San Cristóbal y Nieves"},
      {country:"San Marino"},
      {country:"San Vicente y las Granadinas"},
      {country:"Santa Lucía"},
      {country:"Santo Tomé y Príncipe"},
      {country:"Senegal"},
      {country:"Serbia"},
      {country:"Seychelles"},
      {country:"Sierra Leona"},
      {country:"Singapur"},
      {country:"Siria"},
      {country:"Somalia"},
      {country:"Sri Lanka"},
      {country:"Suazilandia / Esuatini"},
      {country:"Sudáfrica"},
      {country:"Sudán"},
      {country:"Sudán del Sur"},
      {country:"Suecia"},
      {country:"Suiza"},
      {country:"Surinam"},
      {country:"Tailandia"},
      {country:"Tanzania"},
      {country:"Tayikistán"},
      {country:"Timor Oriental"},
      {country:"Togo"},
      {country:"Tonga"},
      {country:"Trinidad y Tobago"},
      {country:"Túnez"},
      {country:"Turkmenistán"},
      {country:"Turquía"},
      {country:"Tuvalu"},
      {country:"Ucrania"},
      {country:"Uganda"},
      {country:"Uruguay"},
      {country:"Uzbekistán"},
      {country:"Vanuatu"},
      {country:"Ciudad del Vaticano"},
      {country:"Venezuela"},
      {country:"Vietnam"},
      {country:"Yemen"},
      {country:"Yibuti"},
      {country:"Zambia"},
      {country:"Zimbabue"}
        
    ],

    faq:[
      {
        question:"¿Puedo alquilar varias o todas las camas en una habitación?",
        anwser:"Sí, de ser necesario se pueden alquilar todas las camas dentro de la habitación."
      },
      {
        question:"¿Cualquier persona puede ser admitada en el Hostel?",
        anwser:"No hay restricción de generos ni ningún tipo de descriminación hacia una persona sin importar su procedencia."
      },
      {
        question:"¿Cual es la diferencia entre un Hostel y un Hotel?",
        anwser:"En un Hostel podés alquilar una cama, en vez de una habitación completa, ahorrando bastante dinero."
      },
      {
        question:"¿Tienen cuartos privados?",
        anwser:"Sí, en la sección de habitaciones puede encontrarlos, también puede verlos más rápido si utiliza el filtro de tipo de habitación."
      },
      {
        question:"¿Cuantas personas pueden haber en un cuarto a la vez?",
        anwser:"El número correspondiente a la cantidad de camas dentro de una habitación."
      },
      {
        question:"¿Dos (2) personas pueden compartir una cama?",
        anwser:"No, solo se permite una (1) persona por cama, ah no ser que sea una cama de dos plazas."
      },
      {
        question:"¿Su Hostel cuenta con seguridad?",
        anwser:"Sí, Nuestro hostel cuenta con 2 guardias con turnos rotativos que vigilan la entrada y están a disposicion de cualquier inquietud con respecto a la seguridad de todos de los inquilinos. Tambíen contamos con camaras de seguridad en areas comunitarias y afuera."
      },
      {
        question:"¿Donde puedo guardar mis cosas?",
        anwser:"Contamos con lockers individuales dentro de todas las habitaciónes con candados incluidos."
      },

      {
        question:"¿Puedo hacer la reserva en persona?",
        anwser:"Si, se puede hacer"
      },
      {
        question:"¿Tengo que traer una toalla?",
        anwser:"No, a cada inquilino se le provee con una toalla."
      },
      {
        question:"¿El hostel cuenta con WIFI?",
        anwser:"Sí, contamos con servicio de WIFI y con una buena velocidad de internet, aparte de varios repetidores WIFI para que la señal llegue a todos los rincones del Hostel sin preocuparse por el rango de WIFI."
      },
      {
        question:"¿Hay toque de queda?",
        anwser:"No, los inquilinos pueden diambular por el hostel entre los horarios que ellos quieran, siempre y cuando no disturben el silencio general durante horarios de descanso."
      },
      {
        question:"¿La cama viene con almohada y sabanas?",
        anwser:"Sí, dependiendo de la epoca del año se les provee alcochado aunque el inquilino es libre de solicitar más, si así lo desea."
      }

    ]
  },
];
// usuario de prueba para la pasarela
// TETE5257626 user
// 5Np4jmaDGd pass