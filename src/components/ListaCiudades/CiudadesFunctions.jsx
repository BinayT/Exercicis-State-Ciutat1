import React from "react";
import { CIUTATS_CAT_20K } from "../../datos";

const ordenarCiudadesAlfabeticamente = (x, y) => {
  if (x.municipi > y.municipi) {
    return 1;
  }
  if (x.municipi < y.municipi) {
    return -1;
  }
  return 0;
};

export const filas1rPaso = CIUTATS_CAT_20K.sort(
  ordenarCiudadesAlfabeticamente
).map((el, index) => (
  <tr key={index}>
    <td>{el.municipi}</td>
    <td>{el.provincia}</td>
    <td>{el.poblacio}</td>
  </tr>
));

const ordenarCiudadesPorPoblacion = (a, b) => {
  return b.poblacio - a.poblacio;
};

export const filas2oPaso = CIUTATS_CAT_20K.sort(
  ordenarCiudadesPorPoblacion
).map((el, index) => (
  <tr key={index}>
    <td>{el.municipi}</td>
    <td>{el.provincia}</td>
    <td>{el.poblacio}</td>
  </tr>
));

export const filas3rPaso = CIUTATS_CAT_20K.filter(
  (el) => el.poblacio >= 100000
).map((el, index) => (
  <tr key={index}>
    <td>{el.municipi}</td>
    <td>{el.provincia}</td>
    <td>{el.poblacio}</td>
    <td>{el.comarca}</td>
  </tr>
));
