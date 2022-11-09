module.exports = [
  {
    client: [
      {
        personalID: 1520,
        name: "Pedro Sanchez",
        nationality: "Bulgaria",
        phoneNumber: 281,
        email: "pedrito@gmail.com",
        password: "pedrito123",
        observation: "",
      },
      {
        personalID: 3720,
        name: "Jose Malboro",
        nationality: "Argentina",
        phoneNumber: 280,
        email: "malboro@gmail.com",
        password: "malboro123",
        observation: "",
      },
      {
        personalID: 3314,
        name: "Miguel Carrasco",
        nationality: "Chile",
        phoneNumber: 112,
        email: "miguelito@gmail.com",
        password: "miguelITO123",
        observation: "",
      },
    ],
    rent: [
      {
        dateIn: "09/11/2022",
        dateOut: "18/11/2022",
        price: 6500,
        observation: "",
        status: true,
      },
      {
        dateIn: new Date(2023, 00, 05),
        dateOut: new Date(2023, 00, 10),
        price: 3500,
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
        bathroom: "privado",
        price: 3500.50,
        observation: "",
        status: true,
      },
      {
        beds: 4,
        description: "Habitacion simple con 2 cama cucheta",
        image:
          "https://milhousehostel.com/wp-content/uploads/2021/03/4476180-1394672_702_0_3538_2829_1000_800-605x605.jpg",
        bathroom: "publico",
        price: 1995.5,
        observation: "",
        status: false,
      },
      {
        beds: 6,
        description: "Habitacion simple con 3 cama cuchetas",
        image:
          "https://www.kayak.com.ar/rimg/himg/33/8a/40/expediav2-570549-15b4ae-819968.jpg?width=720&height=576&crop=true",
        bathroom: "publico",
        price: 2450.50,
        observation: "",
        status: true,
      },
    ],
  },
];
