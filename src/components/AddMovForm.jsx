import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import "../styles/Movform.scss";
import { useNavigate } from "react-router-dom";
//import { DatePicker } from "@material-ui/pickers";

export default function AddMovForm(props) {
  const { token } = props.user
  const [fecha, setFecha] = useState("")
  const [tipo, setTipo] = useState("ingreso");
  const [lista, setLista] = useState(null);
  const [datosCuentas, setDatosCuentas] = useState([])
  const [datosCategoria, setDatosCategoria] = useState([])
  const { register, handleSubmit } = useForm();
  // const [fechaini, fechaselec] = useState(new Date());

  const clicks = useNavigate();

  const onSubmit = data => {
    if (data === undefined) return;
    // fetch("/movimiento/save")
    // console.log(datosCategoria)
    const { tipo } = datosCategoria.find(x => x.id == data.Categoria)
    if (tipo === undefined) return;
    console.log(fecha)

    const insert = {
      monto: data.Monto,
      ID_categoria: data.Categoria,
      ID_cuenta: data.Cuenta,
      referencia: data.NoReferencia,
      fecha: fecha,
      concepto: data.Concepto,
      tipo: data.Tipo,
      id_usuario: token
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(insert),
    };
    fetch('/movimiento/save', options)
      .then(data => {
        if (!data.ok) {
          throw Error(data.status);
        }

        alert("Movimiento Agregado");
        clicks("/home");

        return true;
      }).catch(e => {
        console.log(e);
      });

    console.log(tipo)
    console.log(data);
  }


  useEffect(() => {
    fetch(`/categorias/${token}`)
      .then(response => (response.ok) ? response.json() : [])
      .then(datos => {
        let data_ = [];
        datos.forEach(x => {
          const { id, nombre, tipo } = x
          data_.push({ nombre, tipo, id })
        })
        setDatosCategoria([...data_])
      })
  }, [])

  useEffect(() => {
    fetch(`/cuentas/${token}`)
      .then(response => (response.ok) ? response.json() : [])
      .then(datos => {
        let data_ = [];
        datos.forEach(x => {
          const { id, nombre: nombreCuenta, numero, titular, banco } = x
          data_.push({ nombreCuenta, numero, titular, banco, id })
        })
        setDatosCuentas([...data_])
      })
  }, [])
  // console.log(fechaselec);


  useEffect(() => {

    const list = filtrarCats(datosCategoria, tipo).map((cat,index) => {
      return <option key={"cat-"+index} value={cat.id}>{cat.nombre}</option>
    });

    setLista(list);

  }, [tipo, datosCategoria])

  return (
    <div className="main-container-movform">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container-movform">

        <div className="input-movform">
          <label>Monto</label>
          <input {...register("Monto", { required: true, maxLength: 20 })} placeholder="0,00" />
        </div>


        <div className="input-movform">
          <label>Tipo</label>
          <select {...register("Tipo")} onChange={(e) => setTipo(e.target.value)} >
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>

          </select>
        </div>

        <div className="input-movform">
          <label>Categoria</label>
          <select defaultValue=""  {...register("Categoria")}>

            <option value="" disabled="disabled">Seleccione</option>
            {lista}
            {/* <option value="PagoLuz">Pago de Luz</option> */}
            {/* <option value="PagoAgua">Pago de Agua</option> */}
            {/* <option value="Renta">Renta</option> */}
            {/* <option value="NominaEmpleados">Nomina de empleados</option> */}
            {/* <option value="Otro">Otro</option> */}
          </select>
        </div>


        <div className="input-movform">
          <label>Cuenta</label>
          <select defaultValue={0} {...register("Cuenta")} >
            <option value={0} disabled="disabled">Seleccione</option>
            {datosCuentas.map((value, index) => {
              const { nombreCuenta, id } = value
              return (<option key={"cuenta-"+index} value={id}>{`${nombreCuenta}`}</option>)
            })}
            {/* <option value="CuentaPagos">Cuenta de Pagos</option> */}
            {/* <option value="CuentaCobros">Cuenta de Cobros</option> */}
            {/* <option value="CuentaDividendos">Cuenta de dividendos</option> */}
            {/* <option value="CuentaPrincipal">Cuenta Principal</option> */}
          </select>
        </div>

        <div className="input-movform">
          <label>Numero de Referencia</label>
          <input {...register("NoReferencia")} />
        </div>


        <div className="input-movform">
          <label>Fecha</label>
          <input {...register("fecha")} onChange={(e) => setFecha(e.target.value)} type="date" name="" id="" />
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

const filtrarCats = (cats, tipo) =>{
  if(tipo !== "todos")
  {
      console.log(cats);
      cats = cats.filter( cat => cat.tipo.toLowerCase() === tipo.toLowerCase());
      console.log(cats);
      return cats;
  }
  return cats;
}
