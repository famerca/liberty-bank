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
    <div style={{ display: "flex" }}>
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
    <tr >
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Id</th>
      <th>Acciones</th>
    </tr>
    : <tr>
      <th>Nombre</th>
      <th>Numero</th>
      <th>Titular</th>
      <th>Banco</th>
      <th>id</th>
      <th>Acciones</th>
    </tr>

  // console.log(datos)

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1 style={{ fontWeight: 1000, fontSize: "20px" }} >Categorias</h1>
        <button onClick={() => setNewRow(true)} style={{ border: "none" }}><AiFillPlusCircle size={20} /></button>
      </div>
      <table>
        <thead>
          {head}
        </thead>
        <tbody>
          {/* <Row data={datos} /> */}
          {datos.length === 0 ? <label> loading ....</label> :
            <Rows setShowNewRow={setNewRow} showNewRow={newRow} data={datos} tipo={tipo} />
          }
        </tbody>
      </table>
    </div>

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
      (tipo === "movimientos") ?
        setDatos([{ nombre: "", tipo: "", id: 0 }, ...datos]) :
        setDatos([{ nombreCuenta: "", numero: "", titular: "", banco: "", id: 0 }, ...datos])

      props.setShowNewRow(false)
    }

  }, [props.showNewRow])

  useEffect(() => {
    if (deleteRow.index !== -1) {
      //borrar
      (deleteRow.index === 0) ?
        setDatos([...datos.slice(0)]) :
        (deleteRow.index === datos.length - 1) ?
          setDatos([...datos.slice(0, datos.length - 1)]) :
          setDatos([...datos.slice(0, deleteRow.index), ...datos.slice(deleteRow.index)])

      setDeleteRow({ index: -1 })
    }

  }, [deleteRow])

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


  const hiddenWhenVisible = { display: visible ? "none" : "" }
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
    <tr style={hiddenWhenVisible}>
      {type === "movimientos" ?
        <>
          <td><input onChange={(e) => setNombre(e.target.value)} type="text" value={nombre} /></td>
          <td><input onChange={(e) => setTipo(e.target.value)} type="text" defaultValue={tipo} /></td>
          <td>{id}</td>
          <td><button onClick={handleDelete} ><VscError size={20} /> </button></td>
        </>
        :
        <>
          <td><input onChange={(e) => setNombre(e.target.value)} type="text" defaultValue={nombre} /></td>
          <td><input onChange={(e) => setNumero(e.target.value)} type="number" defaultValue={numero} /></td>
          <td><input onChange={(e) => setTitular(e.target.value)} type="text" defaultValue={titular} /></td>
          <td><input onChange={(e) => setBanco(e.target.value)} type="text" defaultValue={banco} /></td>
          <td>{id}</td>
          <td><button onClick={handleDelete} > <VscError size={20} /></button></td>
        </>
      }
    </tr>
  )
}//)




export default Movimientos

