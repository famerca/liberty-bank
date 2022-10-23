import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { VscError } from 'react-icons/vsc'
import { AiFillPlusCircle } from 'react-icons/ai'

let datosCategorias = [
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },
  { nombre: "pago de algo", tipo: "ingreso", id: 1 },

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
  }, [])

  const head = tipo == "movimientos" ?
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
          {datos.length == 0 ? <label> loading ....</label> :
            <Rows setShowNewRow={setNewRow} showNewRow={newRow} data={datos} tipo={tipo} />
          }
        </tbody>
      </table>
    </div>

  )

}

const Rows = (props) => {

  const ref = useRef()
  const [datos, setDatos] = useState([])
  const { tipo } = props
  useEffect(() => {
    setDatos([...props.data])
  }, [props.data])

  // if (props.showNewRow) {
  //   setDatos([{}, ...datos])
  // }

  // useEffect(() => {
  //   setDatos([{}, ...datos])
  // })


  useEffect(() => {
    console.log(tipo)
    if (props.showNewRow) {
      (tipo === "movimientos") ?
        setDatos([{ nombre: "d", tipo: "s", id: 0 }, ...datos]) :
        setDatos([{ nombreCuenta: "", numero: "", titular: "", banco: "", id: 0 }, ...datos])

      props.setShowNewRow(false)
    }

  }, [props.showNewRow])

  console.log(datos)
  // console.log(ref)

  return (
    <>
      {datos.map((row, index) => {
        return (
          <RowData ref={ref} index={index} key={index} type={tipo} row={row} />
        )
      })}
    </>

  )

}



const RowData = forwardRef((props, ref) => {
  const { index } = props
  const [visible, setVisible] = useState(false)
  const { type } = props
  const [nombre, setNombre] = useState(props.type == "movimientos" ? props.row.nombre : props.row.nombreCuenta)
  const [tipo, setTipo] = useState(props.row.tipo)
  const [id] = useState(props.row.id)
  const [numero, setNumero] = useState(props.row.numero)
  const [titular, setTitular] = useState(props.row.titular)
  const [banco, setBanco] = useState(props.row.banco)

  const hiddenWhenVisible = { display: visible ? "none" : "" }
  const showWhenVisible = { display: visible ? "" : "none" }


  // console.log(index)
  //aqui realizo una solicitud post cuando se modifiquen los datos 
  function handleDelete(e) {
    e.preventDefault()
    setVisible(true)
    console.log("you clicked")
    return index
  }

  useImperativeHandle(ref, () => {
    return handleDelete
  }, [])

  return (
    <tr style={hiddenWhenVisible}>
      {type == "movimientos" ?
        <>
          <td><input onChange={(e) => setNombre(e.target.value)} defaultValue={nombre} /></td>
          <td><input onChange={(e) => setTipo(e.target.value)} defaultValue={tipo} /></td>
          <td>{id}</td>
          <td><button onClick={handleDelete} ><VscError size={20} /> </button></td>
        </>
        :
        <>
          <td><input onChange={(e) => setNombre(e.target.value)} defaultValue={nombre} /></td>
          <td><input onChange={(e) => setNumero(e.target.value)} defaultValue={numero} /></td>
          <td><input onChange={(e) => setTitular(e.target.value)} defaultValue={titular} /></td>
          <td><input onChange={(e) => setBanco(e.target.value)} defaultValue={banco} /></td>
          <td>{id}</td>
          <td><button onClick={handleDelete} > <VscError size={20} /></button></td>
        </>
      }
    </tr>
  )
})




export default Movimientos

