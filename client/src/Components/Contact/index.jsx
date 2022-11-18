import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.css'
import emailjs from 'emailjs-com'

export default function Contact() {
    function enviarMail(e){
        e.preventDefault()
        emailjs.sendForm('service_30dmxpw','template_ph17gpe',e.target,'RI99fLwUMn1TTaBI2')
        .then(res =>{
        alert('Se ha enviado correctamente')
        console.log(res)
        })//serviceId,TemplateId,objeto,key
    }
    return(
        <div>
            <div className={`${style.bgWhites} container my-4`} >
                <h4>Tenes alguna duda? escribinos</h4>
                <hr/>
                <form className="row g-3 needs-validation"  onSubmit={e=>enviarMail(e)}>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                        <input type="text" className="form-control" 
                        id="validationCustom01" name ='name' required />
                        <div className="valid-feedback">
                            ¡Se ve bien!
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="validationCustomUsername" className="form-label">Correo</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" 
                            id="validationCustomUsername" 
                            aria-describedby="inputGroupPrepend"  name ='email' required />
                            <div className="invalid-feedback">
                                Porfavor coloque su correo!
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="validationTextarea" name ='message'
                        required></textarea>
                        <div className="invalid-feedback">
                        Please enter a message in the textarea.
                        </div>
                    </div>
                    <div className="d-grid gap-2 my-4" >
                    <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>                
            </div>
            <div className={`${style.bgWhites} container my-4`} >
                <h2>Preguntas frecuentes</h2>
                <p className={style.question}>¿Puedo llevar mi mascota?</p>
                <p className={style.response}>Actualmente no aceptamos mascotas.</p>
                <hr/>
                <p className={style.question}>¿Puedo alquilar varias o todas las camas en una habitación?</p>
                <p className={style.response}>Sí, de ser necesario se pueden alquilar todas las camas dentro de la habitación.</p>
                <hr/>
                <p className={style.question}>¿Cualquier persona puede ser admitada en el Hostel?</p>
                <p className={style.response}>No hay restricción de generos ni ningún tipo de descriminación hacia una persona sin importar su procedencia. </p>
                <hr/>
                <p className={style.question}>¿Cual es la diferencia entre un Hostel y un Hotel?</p>
                <p className={style.response}>En un Hostel podés alquilar una cama, en vez de una habitación completa, ahorrando bastante dinero.</p>
                <hr/>
                <p className={style.question}>¿Tienen cuartos privados?</p>
                <p className={style.response}>Sí, en la sección de habitaciones puede encontrarlos, también puede verlos más rápido si utiliza el filtro de tipo de habitación.</p>
                <hr/>
                <p className={style.question}>¿Cuantas personas pueden haber en un cuarto a la vez?</p>
                <p className={style.response}>El número correspondiente a la cantidad de camas dentro de una habitación.</p>
                <hr/>
                <p className={style.question}>¿Dos (2) personas pueden compartir una cama?</p>
                <p className={style.response}>No, solo se permite una (1) persona por cama, ah no ser que sea una cama de dos plazas.</p>
                <hr/>
                <p className={style.question}>¿Su Hostel cuenta con seguridad?</p>
                <p className={style.response}>Sí, Nuestro hostel cuenta con 2 guardias con turnos rotativos que vigilan
                 la entrada y están a disposicion de cualquier inquietud con respecto a la seguridad de todos 
                 de los inquilinos.
                 Tambíen contamos con camaras de seguridad en areas comunitarias y afuera.</p>
                <hr/>
                <p className={style.question}>¿Donde puedo guardar mis cosas?</p>
                <p className={style.response}>Contamos con lockers individuales dentro de todas las habitaciónes con candados incluidos.</p>
                <hr/>
                <p className={style.question}>¿Puedo hacer la reserva en persona?</p>
                <p className={style.response}>Si, se puede hacer</p>
                <hr/>
                <p className={style.question}>¿Tengo que traer una toalla?</p>
                <p className={style.response}>No, a cada inquilino se le provee con una toalla.</p>
                <hr/>
                <p className={style.question}>¿El hostel cuenta con WIFI?</p>
                <p className={style.response}>Sí, contamos con servicio de WIFI y con una buena velocidad de internet, aparte de varios repetidores WIFI para que la señal llegue a todos los rincones del Hostel sin preocuparse por el rango de WIFI.</p>
                <hr/>
                <p className={style.question}>¿Hay toque de queda?</p>
                <p className={style.response}>No, los inquilinos pueden diambular por el hostel entre los horarios que ellos quieran, siempre y cuando no disturben el silencio general durante horarios de descanso.</p>
                <hr/>
                <p className={style.question}>¿La cama viene con almohada y sabanas?</p>
                <p className={style.response}>Sí, dependiendo de la epoca del año se les provee alcochado aunque el inquilino es libre de solicitar más, si así lo desea.</p>

            </div>
        </div>
        
    )
}

