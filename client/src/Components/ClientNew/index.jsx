import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.css'

export default function ClientNew() {

    return (
        <div className={`${style.bgWhites} container my-4`} >
            <form className="row g-3 needs-validation" >
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            ¡Se ve bien!
                        </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                            ¡Se ve bien!
                        </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Correo</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" 
                        aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Porfavor coloque su correo!
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Provincia</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Por favor indique su Provincia
                        </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">DNI</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Por favor coloque su numero de documento.
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                        <div className="invalid-feedback">
                            Por favor coloque su numero de telefono.
                        </div>
                </div>
                <div className="d-grid gap-2 my-4" >
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}