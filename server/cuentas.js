const {queryDB} = require("./db");
const mapearCuentas = (cuentas) =>{
    return new Promise((next) => {
        const idcuentas = cuentas.map(cuenta => cuenta.id);
        cuentas = cuentas.map( cuenta => {
            cuenta.transacciones = [];
            return cuenta;
        });
        obtenerMovimientoByCuenta(idcuentas).then(trccs => {
            console.log("transacciones: ", trccs);
            trccs.forEach(trc => {
                const index = trc.cuenta;
                trc.cuenta = cuentas[index].nombre;
                cuentas[index].transacciones.push(trc);
            });
            next(cuentas);
        });
        
    });
}

// Ingreso es 1
// Egreso es 0 
const obtenerMovimientoByCuenta = (id_cuentas) =>
{
    return  new Promise((next => {
        let ids = "";
        for(let i = 0; i < id_cuentas.length; i++) {
            if(i == 0)
                ids += `m.ID_cuenta = '${id_cuentas[i]}' `;
            else
                ids += ` OR m.ID_cuenta = '${id_cuentas[i]}'`;
        }

        queryDB(`SELECT m.concepto, m.ID_categoria as cat_n, m.referencia,
         m.fecha, m.monto, m.tipo, m.ID_cuenta as cuenta, c.nombre as categoria 
         FROM bd_movimiento as m, Categoria as c 
         WHERE c.id = m.ID_categoria AND (${ids}) ORDER BY m.fecha DESC`)
         .then(r => {
            next(
                r.map( mov => {
                    mov.cuenta = id_cuentas.indexOf(mov.cuenta);
                    mov.tipo = mov.tipo ? "ingreso" : "egreso";
                    return mov;
                })
            );
         });

    }))
}
module.exports.mapearCuentas = mapearCuentas;