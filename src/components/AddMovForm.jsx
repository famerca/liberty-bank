import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "../styles/Movform.scss";
//import { DatePicker } from "@material-ui/pickers";

export default function AddMovForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const [fechaini, fechaselec] = useState(new Date());

  console.log(fechaselec)

  return (
    <div className="main-container-movform">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container-movform">

        <div className="input-movform">
          <label>Monto</label>
          <input {...register("Monto", { required: true, maxLength: 20 })} placeholder="0,00" />
        </div>


        <div className="input-movform">
          <label>Tipo</label>
          <select {...register("Tipo")}>
            <option value="Ingreso">ingreso</option>
            <option value="Egreso">egreso</option>
          </select>
        </div>

        <div className="input-movform">
          <label>Categoria</label>
          <select {...register("Categoria")}>
            <option value="PagoLuz">Pago de Luz</option>
            <option value="PagoAgua">Pago de Agua</option>
            <option value="Renta">Renta</option>
            <option value="NominaEmpleados">Nomina de empleados</option>
            <option value="Otro">Otro</option>
          </select>
        </div>


        <div className="input-movform">
          <label>Cuenta</label>
          <select {...register("Cuenta")} >
            <option value="CuentaPagos">Cuenta de Pagos</option>
            <option value="CuentaCobros">Cuenta de Cobros</option>
            <option value="CuentaDividendos">Cuenta de dividendos</option>
            <option value="CuentaPrincipal">Cuenta Principal</option>
          </select>
        </div>

        <div className="input-movform">
          <label>Numero de Referencia</label>
          <input {...register("NoReferencia")} />
        </div>


        <div className="input-movform">
          <label>Fecha</label>
          <input type="date" name="" id="" />
        </div>


        <div className="input-movform">
          <label>Concepto</label>
          <input {...register("Concepto")} placeholder="Concepto" />
        </div>


        <input type="submit"
          className="button-movform"
          value="REGISTRAR" />
      </form>
    </div>
  );
}
