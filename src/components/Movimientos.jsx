import React, { useState, useEffect } from "react"// , useRef, forwardRef, useImperativeHandle } from 'react'
import { VscError } from 'react-icons/vsc'
import { AiFillPlusCircle } from 'react-icons/ai'

let datosCategorias = [
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

let datosCuentas = [
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
  return (
    <div style={{ width: "100% !important", height: "100% !important", display: "grid", gridTemplateColumns: "1fr 2fr", gridGap: "10px", padding: "20px", backgroundColor: "rgba(155,155,155,0.3)" }}>
      <Table type="movimientos" datos={datosCategorias} />
      <Table type="cuentas" datos={datosCuentas} />
    </div >
  )
}

const Table = (props) => {
  const [newRow, setNewRow] = useState(false)
  const [datos, setDatos] = useState([])
  const [tipo, setTipo] = useState("")

  useEffect(() => {
    //   //fetch a api
    //   //api que va a traer datos del backend
    //   // se inicializan los datos en caso de existir
    setDatos([...props.datos])
    setTipo(props.type)
  }, [props.datos, props.type])


  const head = tipo === "movimientos" ?
    <tr style={{ width: "auto", display: "grid", gridTemplateColumns: "repeat(10,1fr)", gridGap: "2px", textAlign: "start", position: "sticky", top: "51px", backgroundColor: "white" }}>
      <th className="startText" style={{ gridColumn: "1/6" }} >Nombre</th>
      <th className="startText" style={{ gridColumn: "6/9" }}>Tipo</th>
      <th className="startText" style={{ gridColumn: "9" }}>Id</th>
      <th className="startText" style={{ gridColumn: "10" }}>Accion</th>
    </tr >
    : <tr style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(18,1fr)", gridGap: "2px", textAlign: "start", position: "sticky", top: "51px", backgroundColor: "white" }}>
      <th className="startText" style={{ gridColumn: "1/6" }} >Nombre</th>
      <th className="startText" style={{ gridColumn: "6/10" }} >Numero</th>
      <th className="startText" style={{ gridColumn: "10/14" }} >Titular</th>
      <th className="startText" style={{ gridColumn: "14/17" }} >Banco</th>
      <th className="startText" style={{ gridColumn: "17" }} >id</th>
      <th className="startText" style={{ gridColumn: "18" }} >Accion</th>
    </tr>

  // console.log(datos)

  return (
    <div style={{ width: "100%", maxHeight: "85vh", borderWidth: "1px", borderStyle: "outset", borderColor: "black", borderRadius: "8px", padding: "5px", paddingTop: "0px", overflowY: "scroll", backgroundColor: "white" }}>
      <div style={{ display: "flex", position: "sticky", top: "0px", backgroundColor: "white", justifyContent: "space-between", padding: "0px 10px" }}>
        <h1 style={{ fontWeight: 1000, fontSize: "20px" }} >{tipo === "movimientos" ? "Categorias" : "Cuentas"}</h1>
        <button onClick={() => setNewRow(true)} style={{ border: "none", background: "none" }}><AiFillPlusCircle size={20} /></button>
      </div>
      <table className="" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {head}
        {/* <Row data={datos} /> */}
        {datos.length === 0 ? <label> loading ....</label> :
          <Rows setShowNewRow={setNewRow} showNewRow={newRow} data={datos} tipo={tipo} />
        }
      </table>
    </div >

  )

}

const Rows = (props) => {

  const [deleteRow, setDeleteRow] = useState({ index: -1 })
  const [datos, setDatos] = useState([])
  const { tipo } = props
  useEffect(() => {
    setDatos([...props.data])
  }, [props.data])



  useEffect(() => {
    if (props.showNewRow) {
      // console.log(dtos);
      (tipo === "movimientos") ?
        setDatos([{ nombre: "", tipo: "", id: 0 }, ...datos]) :
        setDatos([{ nombreCuenta: "", numero: "", titular: "", banco: "", id: 0 }, ...datos])

      props.setShowNewRow(false)
    }

  }, [props.showNewRow])

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

  }, [deleteRow])

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
  const [visible, setVisible] = useState(false)
  const { type } = props
  const [nombre, setNombre] = useState("")
  const [tipo, setTipo] = useState("")
  const [id, setId] = useState("")
  const [numero, setNumero] = useState(0)
  const [titular, setTitular] = useState("")
  const [banco, setBanco] = useState("")


  // const hiddenWhenVisible = { display: visible ? "none" : "" }
  // const showWhenVisible = { display: visible ? "" : "none" }

  useEffect(() => {
    setNombre(props.type === "movimientos" ? props.row.nombre : props.row.nombreCuenta)
    setTipo(props.row.tipo)
    setId(props.row.id)
    setNumero(props.row.numero)
    setTitular(props.row.titular)
    setBanco(props.row.banco)

  }, [props.row.nombre, props.row.tipo, props.row.id, props.row.numero, props.row.titular, props.row.banco])

  const handleDelete = (e) => {
    //aqui realizo una solicitud post cuando se modifiquen los datos 
    e.preventDefault()
    props.setDeleteRow({ index: index })
    setVisible(true)
  }

  return (
    <>
      {type === "movimientos" ?
        <tr className="row" style={{ display: "grid", width: "100%", gridTemplateColumns: "repeat(10,1fr)", gridGap: "2px", borderTop: " 1px inset #000", borderBottom: " 1px inset #000" }}>
          <td className="startText" style={{ gridColumn: "1/6" }} ><input className="inputRow" onChange={(e) => setNombre(e.target.value)} type="text" value={nombre} /> </td>
          <td className="startText" style={{ gridColumn: "6/9" }}><input className="inputRow" onChange={(e) => setTipo(e.target.value)} type="text" defaultValue={tipo} /></td>
          <td className="startText" style={{ gridColumn: "9", fontSize: "calc(60%)" }}>{id}</td>
          <td className="startText" style={{ gridColumn: "10" }} >  <button style={{ border: "none", background: "none" }} onClick={handleDelete}  ><VscError size={20} /> </button> </td>
        </tr>
        :
        <tr className="row" style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(18,1fr)", gridGap: "2px", borderTop: " 1px inset #000", borderBottom: " 1px inset #000" }}>
          <td className="startText" style={{ gridColumn: "1/6" }} ><input className="inputRow" onChange={(e) => setNombre(e.target.value)} type="text" defaultValue={nombre} /></td>
          <td className="startText" style={{ gridColumn: "6/10" }} ><input className="inputRow" onChange={(e) => setNumero(e.target.value)} type="text" defaultValue={numero} /></td>
          <td className="startText" style={{ gridColumn: "10/14" }} ><input className="inputRow" onChange={(e) => setTitular(e.target.value)} type="text" defaultValue={titular} /></td>
          <td className="startText" style={{ gridColumn: "14/17" }} ><input className="inputRow" onChange={(e) => setBanco(e.target.value)} type="text" defaultValue={banco} /></td>
          <td className="startText" style={{ gridColumn: "17", fontSize: "calc(60%)" }}  >{id}</td>
          <td className="startText" style={{ gridColumn: "18" }} ><button style={{ border: "none", background: "none" }} onClick={handleDelete} > <VscError size={20} /></button></td>
        </tr>
      }
    </>
  )
}//)




export default Movimientos

