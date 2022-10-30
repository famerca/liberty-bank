import React, { useState, useEffect } from "react"// , useRef, forwardRef, useImperativeHandle } from 'react'
import { VscError } from 'react-icons/vsc'
import { AiFillPlusCircle } from 'react-icons/ai'

let datosCategorias1 = [
  { nombre: "nombre1", tipo: "ingreso", id: 1 },
  { nombre: "nombre2", tipo: "ingreso", id: 1 },
  { nombre: "nombre3", tipo: "ingreso", id: 1 },
  { nombre: "nombre4", tipo: "ingreso", id: 1 },
  { nombre: "nombre5", tipo: "ingreso", id: 1 },
  { nombre: "nombre6", tipo: "ingreso", id: 1 },
  { nombre: "nombre7", tipo: "ingreso", id: 1 },
  { nombre: "nombre8", tipo: "ingreso", id: 1 },
  { nombre: "nombre9", tipo: "ingreso", id: 1 },
  { nombre: "nombre10", tipo: "ingreso", id: 1 },
  { nombre: "nombre11", tipo: "ingreso", id: 1 },
  { nombre: "nombre12", tipo: "ingreso", id: 1 },
  { nombre: "nombre13", tipo: "ingreso", id: 1 },
  { nombre: "nombre14", tipo: "ingreso", id: 1 },

]

let datosCuentas1 = [
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 2 },
]


const Movimientos = () => {
  const [datosCategorias, setDatosCategoria] = useState([])
  const [datosCuentas, setDatosCuentas] = useState([])
  useEffect(() => {
    fetch("/categorias/1")
      .then(response => response.json())
      .then(datos => {
        let data_ = [];
        datos.map(x => {
          const { id, nombre, tipo } = x
          data_.push({ nombre, tipo, id })
        })
        setDatosCategoria([...data_])
      })
  }, [])

  useEffect(() => {
    fetch("/cuentas/1")
      .then(response => response.json())
      .then(datos => {
        let data_ = [];
        datos.map(x => {
          const { id, nombre: nombreCuenta, numero, titular, banco } = x
          data_.push({ nombreCuenta, numero, titular, banco, id })
        })
        setDatosCuentas([...data_])
      })
  }, [])

  const tablesStyle = { width: "100% !important", height: "100% !important", display: "grid", gridTemplateColumns: "1fr 2fr", gridGap: "10px", padding: "20px", backgroundColor: "rgba(155,155,155,0.3)" }
  return (
    <div style={tablesStyle}>
      <Table type="movimientos" datos={datosCategorias} />
      <Table type="cuentas" datos={datosCuentas} />
    </div >
  )
}

const Table = (props) => {
  const [newRow, setNewRow] = useState(false)
  const [datos, setDatos] = useState([])
  const [tipo, setTipo] = useState("")

  const trStyle = { width: "auto", display: "grid", gridTemplateColumns: (tipo === "movimientos") ? "repeat(10,1fr)" : "repeat(18,1fr)", gridGap: "2px", textAlign: "start", position: "sticky", top: "51px", backgroundColor: "white" }
  const thStyle = { textAlign: "start", fontSize: "calc(55%)" }

  useEffect(() => {
    //   //fetch a api
    //   //api que va a traer datos del backend
    //   // se inicializan los datos en caso de existir
    setDatos([...props.datos])
    setTipo(props.type)
  }, [props.datos, props.type])


  const head = tipo === "movimientos" ?
    <tr style={trStyle}>
      <th style={{ gridColumn: "1/6", ...thStyle }} >Nombre</th>
      <th style={{ gridColumn: "6/9", ...thStyle }}>Tipo</th>
      <th style={{ gridColumn: "9", ...thStyle }}>Id</th>
      <th style={{ gridColumn: "10", ...thStyle }}>Accion</th>
    </tr >
    : <tr style={trStyle}>
      <th style={{ gridColumn: "1/6", ...thStyle }} >Nombre</th>
      <th style={{ gridColumn: "6/10", ...thStyle }} >Numero</th>
      <th style={{ gridColumn: "10/14", ...thStyle }} >Titular</th>
      <th style={{ gridColumn: "14/17", ...thStyle }} >Banco</th>
      <th style={{ gridColumn: "17", ...thStyle }} >id</th>
      <th style={{ gridColumn: "18", ...thStyle }} >Accion</th>
    </tr>

  const boxContainerStyle = { width: "100%", maxHeight: "85vh", borderWidth: "1px", borderStyle: "outset", borderColor: "black", borderRadius: "8px", padding: "5px", paddingTop: "0px", overflowY: "scroll", backgroundColor: "white" }
  const boxTitle = { display: "flex", position: "sticky", top: "0px", backgroundColor: "white", justifyContent: "space-between", padding: "0px 10px" }
  const h1Title = { fontWeight: 1000, fontSize: "20px" }
  const buttonTitleStyle = { border: "none", background: "none" }
  const tableStyle = { width: "100%", display: "flex", flexDirection: "column" }

  return (
    <div style={boxContainerStyle}>
      <div style={boxTitle}>
        <h1 style={h1Title} >{tipo === "movimientos" ? "Categorias" : "Cuentas"}</h1>
        <button onClick={() => setNewRow(true)} style={buttonTitleStyle}><AiFillPlusCircle size={20} /></button>
      </div>
      <table style={tableStyle}>
        {head}
        {datos.length === 0 ? <label> loading ....</label> :
          <Rows setShowNewRow={setNewRow} showNewRow={newRow} data={datos} tipo={tipo} />
        }
      </table>
    </div >

  )

}

const Rows = (props) => {

  const { setShowNewRow, showNewRow } = props

  const [deleteRow, setDeleteRow] = useState({ index: -1 })
  const [datos, setDatos] = useState([])
  const { tipo } = props
  useEffect(() => {
    setDatos([...props.data])
  }, [props.data])


  useEffect(() => {
    const addMovimiento = () => {
      const update = {
        id_usuario: 1
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
      };
      fetch('/categoria/add', options)
        .then(data => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        }).then(update => {
          console.log(update);
        }).catch(e => {
          console.log(e);
        });
      setDatos([{ nombre: "", tipo: "", id: 0 }, ...datos])
    }
    if (showNewRow) {
      // console.log(dtos);
      (tipo === "movimientos") ?
        addMovimiento() :
        setDatos([{ nombreCuenta: "", numero: "", titular: "", banco: "", id: 0 }, ...datos])

      setShowNewRow(false)
    }

  }, [showNewRow, datos, tipo, setShowNewRow])

  useEffect(() => {
    if (deleteRow.index !== -1) {
      console.log("borrar ", deleteRow.index);
      //borrar
      (deleteRow.index === 0) ?
        setDatos([...datos.slice(1)]) :
        (deleteRow.index === datos.length - 1) ?
          setDatos([...datos.slice(0, datos.length - 2)]) :
          setDatos([...datos.slice(0, deleteRow.index - 1), ...datos.slice(deleteRow.index + 1)])

      setDeleteRow({ index: -1 })
    }

  }, [deleteRow, datos])

  console.log(datos)
  return (
    <>
      {datos.map((row, index) => {
        return (
          <RowData index={index} key={index} type={tipo} row={row} setDeleteRow={setDeleteRow} />
        )
      })}
    </>

  )

}



const RowData = (props) => {// forwardRef((props, ref) => {
  const { index } = props
  const { type } = props
  const [nombre, setNombre] = useState("")
  const [tipo, setTipo] = useState("")
  const [id, setId] = useState("")
  const [numero, setNumero] = useState(0)
  const [titular, setTitular] = useState("")
  const [banco, setBanco] = useState("")

  const trStyle = { display: "grid", textAlign: "center", alignContent: "center", alignItems: "center", width: "100%", gridTemplateColumns: (type === "movimientos") ? "repeat(10,1fr)" : "repeat(18,1fr)", gridGap: "2px", borderTop: " 1px inset #000", borderBottom: " 1px inset #000" }
  const inputStyle = { width: "100%", backgroundColor: "transparent", border: "none" }
  const buttonStyle = { border: "none", background: "none" }

  const { type: type_, row } = props

  // const hiddenWhenVisible = { display: visible ? "none" : "" }
  // const showWhenVisible = { display: visible ? "" : "none" }

  useEffect(() => {
    setNombre(type_ === "movimientos" ? row.nombre : row.nombreCuenta)
    setTipo(row.tipo)
    setId(row.id)
    setNumero(row.numero)
    setTitular(row.titular)
    setBanco(row.banco)

  }, [row, type_])

  const handleDelete = (e) => {
    //aqui realizo una solicitud post cuando se modifiquen los datos  
    e.preventDefault()
    props.setDeleteRow({ index: index })
  }

  return (
    <>
      {type === "movimientos" ?
        <tr style={trStyle}>
          <td style={{ gridColumn: "1/6", textAlign: "start" }} ><input style={inputStyle} onChange={(e) => setNombre(e.target.value)} type="text" value={nombre} /> </td>
          <td style={{ gridColumn: "6/9", textAlign: "start" }}><input style={inputStyle} onChange={(e) => setTipo(e.target.value)} type="text" defaultValue={tipo} /></td>
          <td style={{ gridColumn: "9", fontSize: "calc(60%)", textAlign: "start" }}>{id}</td>
          <td style={{ gridColumn: "10", textAlign: "start" }} >  <button style={buttonStyle} onClick={handleDelete}  ><VscError size={20} /> </button> </td>
        </tr>
        :
        <tr style={trStyle}>
          <td style={{ gridColumn: "1/6", textAlign: "start" }} ><input style={inputStyle} onChange={(e) => setNombre(e.target.value)} type="text" defaultValue={nombre} /></td>
          <td style={{ gridColumn: "6/10", textAlign: "start" }} ><input style={inputStyle} onChange={(e) => setNumero(e.target.value)} type="text" defaultValue={numero} /></td>
          <td style={{ gridColumn: "10/14", textAlign: "start" }} ><input style={inputStyle} onChange={(e) => setTitular(e.target.value)} type="text" defaultValue={titular} /></td>
          <td style={{ gridColumn: "14/17", textAlign: "start" }} ><input style={inputStyle} onChange={(e) => setBanco(e.target.value)} type="text" defaultValue={banco} /></td>
          <td style={{ gridColumn: "17", fontSize: "calc(60%)", textAlign: "start" }}  >{id}</td>
          <td style={{ gridColumn: "18", textAlign: "start" }} ><button style={buttonStyle} onClick={handleDelete} > <VscError size={20} /></button></td>
        </tr>
      }
    </>
  )
}//)




export default Movimientos

