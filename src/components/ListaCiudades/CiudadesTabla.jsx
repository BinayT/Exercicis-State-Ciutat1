import React from "react";
import "./ciutats.css";
import { filas1rPaso, filas2oPaso, filas3rPaso } from "./CiudadesFunctions";

export const CiudadesTabla = () => {
  return (
    <div className="tabla-ciudades">
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Municipi</th>
              <th>Provincia</th>
              <th>Població</th>
            </tr>
          </thead>
          <tbody>{filas1rPaso}</tbody>
        </table>
      </div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Municipi</th>
              <th>Provincia</th>
              <th>Població</th>
            </tr>
          </thead>
          <tbody>{filas2oPaso}</tbody>
        </table>
      </div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Municipi</th>
              <th>Provincia</th>
              <th>Població</th>
              <th>Comarca</th>
            </tr>
          </thead>
          <tbody>{filas3rPaso}</tbody>
        </table>
      </div>
    </div>
  );
};
