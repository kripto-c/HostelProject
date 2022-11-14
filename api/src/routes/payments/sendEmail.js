const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.TOKENEMAIL, // generated ethereal user
    pass: process.env.PAS, // generated ethereal password
  },
});

const sendEmail = async ({
  email,
  name,
  status,
  dni,
  camas,
  idcompra,
  check_in,
  check_out,
}) => {
  await transporter.sendMail({
    from: '"Confirmacion de Pago" <dinamitaHostel@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Payment Dinamita", // Subject line
    text: "Dinamita hostel Payment", // plain text body
    html: `<div style="width:100%;background-color:#e3e3e3;padding-top:10px;margin:auto"><div class="adM">
        </div><div style="width:max-content;margin-top:20px;margin:auto;background:#fff"><div class="adM">
            </div><h1 style="font-family:sans-serif;background:linear-gradient(to left,#4e449b,#0b2086);font-size:20px;color:#fff;border:0;padding:10px 15px;text-align:center">Confirmacion de pago</h1><br>
            <div style="padding:20px 30px;height:max-content">
                <p>Hola ¡<b>${name}</b>! 👋👋</p>
                <p>Gracias por confiar en Hostel Dinamita</p>
                <label>Estado de pago: </label><b>${status}</b>
                <p>ID de la compra: ${idcompra}</p>
                <p>- - - - - - - -  - - - -</p>
                <p>Detalle de recerva</p>
                <p>Nombre: ${name}</p>
                <p>DNI: ${dni}</p>
                <p>Camas: ${camas} camas</p>
                <p>Desde: ${check_in}</p>
                <p>Hasta: ${check_out}</p>
                <p>- - - - - - - -  - - - -</p>
            </div>
        </div>
        <p style="width:300px;text-align:center;margin:auto;padding:15px">Para mas informacion <a href="#m_-7094310157701913741_">Contactenos</a></p><div class="yj6qo"></div><div class="adL">
    </div></div>`,
  });
};

module.exports = { sendEmail };