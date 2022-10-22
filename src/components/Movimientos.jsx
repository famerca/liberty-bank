import React, { useState, useEffect } from 'react'
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
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
  { nombreCuenta: "nombre de cuenta", numero: "0108-0113-0710823", titular: "bobby", banco: "jp morgan", id: 1 },
]

const Table = (props) => {
  const [datos, setDatos] = useState([])
  const tipo = useState(props.type)

  useEffect(() => {
    //   //fetch a api
    //   //api que va a traer datos del backend
    //   // se inicializan los datos en caso de existir
    setDatos([...props.datos])
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
        <button style={{ border: "none" }}><AiFillPlusCircle size={20} /></button>
      </div>
      <table>
        <thead>
          {head}
        </thead>
        <tbody>
          {/* <Row data={datos} /> */}
          {!datos ? <label> loading ....</label> :
            <Row data={datos} />
          }
        </tbody>
      </table>
    </div>

  )

}


const Row = (props) => {

  const [datos, setDatos] = useState([])
  useEffect(() => {
    setDatos([...props.data])
  }, [props.data])

  console.log(datos)
  const setField = (e) => {
    console.log(e)

  }
  // console.log(setDatos)
  // const datos_ = datos ? datos.map((dato, index) => {
  //   const values = Object.values(datos).map((value, index) => {
  //     return (<td key={index}><input onChange={setField} key={index} defaultValue={value} /></td>)
  //   })
  //   return (
  //     <tr key={index}>
  //       {values}
  //       <td><button><VscError size={20} /></button></td>
  //     </tr>
  //   )
  // }) : null

  return <div> hola</div>
}


const Movimientos = () => {
  return (
    <div style={{ display: "flex" }}>
      <Table type="movimientos" datos={datosCategorias} />
      <Table type="cuentas" datos={datosCuentas} />
    </div >
  )
}

export default Movimientos
// const TableCategory = (props) => {
//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <h1 style={{ fontWeight: 1000, fontSize: "20px" }} >Categorias</h1>
//         <button style={{ border: "none" }}><AiFillPlusCircle size={20} /></button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Tipo</th>
//             <th>id</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           <RowCategory data={datos} />
//         </tbody>
//       </table>
//     </div>

//   )


// }

