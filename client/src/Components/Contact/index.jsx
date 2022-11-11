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
        <div className={`${style.bgWhites} container my-4`} >
            <div>
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
        </div>
    )
}

