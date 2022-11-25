import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import Faq from "./Faq";
import Reservas from "./Reservas";
import Reviews from "./Reviews";
import Contactanos from "./Contactanos";
import RedesSociales from "./RedesSociales";
export default function BotChat() {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "blue",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#eb3449",
    botFontColor: "#fff",
    userBubbleColor: "#0cb3c9",
    userFontColor: "#fff",
  };
  const steps = [
    {
      id: "0",
      message: "Bienvenido a Project Hostel. Por favor indiquenos su nombre",
      trigger: "pregunta-nombre",
    },
    {
      id: "pregunta-nombre",
      user: true,
      validator: (value) => {
        if (/^[a-zA-Z ]{2,20}$/.test(value)) {
          return true;
        } else {
          return "Su nombre solo puede incluir letras";
        }
      },
      trigger: "respuesta-nombre",
    },
    {
      id: "respuesta-nombre",
      message: `Hola {previousValue}, Bienvenido a Project Hostel!, en que le podemos ayudar?`,
      trigger: "seleccionOpcion",
    },
    {
      id: "seleccionOpcion",
      message: "Seleccione la opcion",
      trigger: "opciones",
    },
    //OPCIONES -------------------------------------------------------->>
    {
      id: "opciones",
      options: [
        { value: "reservas", label: "Reservas", trigger: "reservas" },
       
        { value: "reviews", label: "Reviews", trigger: "mostrar-reviews" },
        {
          value: "contactanos",
          label: "Contactanos",
          trigger: "mostrar-contactanos",
        },
        {
          value: "faq",
          label: "Preguntas Frecuentes",
          trigger: "mostrar-preguntasFrecuentes",
        },
        {
          value: "redesSociales",
          label: "Nuestras redes sociales",
          trigger: "mostrar-redesSociales",
        },
        { value: "salir", label: "Salir", trigger: "salirBot" },
      ],
    },
    //------------------------------------------------------------------------------
    {
      id: "reservas",
      component: <Reservas />,
      asMessage: true,
      trigger: "volver",
    },
    {
      id: "mostrar-comoLlegar",
      // message: "Mostrar preguntas frecuentes",
      // component:<Contacto/>,
      message: "Mostrar como llegar",
      trigger: "volver",
    },
    {
      id: "mostrar-reviews",
      component: <Reviews />,
      asMessage: true,
      trigger: "volver",
    },
    //CONTACTANOS
    {
      id: "mostrar-contactanos",
      component: <Contactanos />,
      asMessage: true,
      trigger: "volver",
    },

    //PREGUNTAS FRECUENTES
    {
      id: "mostrar-preguntasFrecuentes",
      component: <Faq />,
      asMessage: true,
      trigger: "volver",
    },
    //Redes sociales
    {
      id: "mostrar-redesSociales",
      component: <RedesSociales />,
      asMessage: true,
      trigger: "volver",
    },
    {
      id: "volver",
      options: [
        { value: "volver", label: "Volver a opciones", trigger: "opciones" },
      ],
    },
    
    {
      id: "salirBot",
      message: "Espero le haya sido de ayuda!. Saludos desde Dinamita Hostel",
      end: true,
    },
  ];
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps}></ChatBot>
      </ThemeProvider>
    </React.Fragment>
  );
}
