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
        status: true,
      },
      {
        dateIn: new Date(2023, 00, 05),
        dateOut: new Date(2023, 00, 10),
        price: 3500.5,
        observation: "",
        status: true,
      },
      {
        dateIn: new Date(2023, 00, 01),
        dateOut: new Date(2023, 00, 20),
        price: 4000,
        observation: "",
        status: true,
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
        typeId: 2,
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
        typeId: 2,
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
        typeId: 1,
      },
    ],
    // type: [{ type: "Publico" }, { type: "Privado" }],
    // type: [{ type: "Publico" }, { type: "Privado" }],
    // type: [{ type: "Publico" }, { type: "Privado" }],
  },
];
