import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData( idMambu, Nombre, Fechadeingreso, Numerodecama, Numerodepiso, Nota ) {
  return { idMambu, Nombre, Fechadeingreso, Numerodecama, Numerodepiso, Nota };
}

const rows = [
  createData(0, 'Elvis Presley', '25 Mar, 2020', "cama 1", "piso 2", "notas del doctor"),
  createData(1, 'Paul McCartney', '25 Mar, 2020', "cama 4", "piso 3", "notas del doctor"),
  createData(2, 'Tom Scholz', '25 Mar, 2020', "cama 5", "piso 3", "notas del doctor"),
  createData(3, 'Michael Jackson', '25 Mar, 2020', "cama 2", "piso 1", "notas del doctor"),
  createData(4, 'Bruce Springsteen', '25 Mar, 2020', "cama 3", "piso 1", "notas del doctor")
];




export default function Orders() {
  return (
    <React.Fragment>
      <p>Recent Orders</p>
      <div style={{textAlign: "center"}}>
      <Table size="small" style={{textAlign: "center"}}>
        <TableHead>
          <TableRow>
            <TableCell>Id-Mambu</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Fecha de ingreso</TableCell>
            <TableCell>Numero de cama</TableCell>
            <TableCell>Numero de piso</TableCell>
            <TableCell>Notas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.idMambu}</TableCell>
              <TableCell>{row.Nombre}</TableCell>
              <TableCell>{row.Fechadeingreso}</TableCell>
              <TableCell>{row.Numerodecama}</TableCell>
              <TableCell>{row.Numerodepiso}</TableCell>
              <TableCell>{row.Nota}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </React.Fragment>
  );
}