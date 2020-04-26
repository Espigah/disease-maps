/* eslint-disable no-use-before-define */
import React from "react";
import DropDown from "./DropDown";

export default function DropDownCity({ value, onChange }) {
  return (
    <DropDown
      onChange={onChange}
      id="combo-box-city"
      options={top100Films}
      label="Cidade"
      value={value}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Acre" },
  { title: "Alogaos" },
  { title: "Amapa" },
  { title: "Amazonas" },
  { title: "Bahia" },
  { title: "Ceará" },
  { title: "Distrito Federal" },
  { title: "Espirito Santo" },
  { title: "Goiás" },
  { title: "Maranhão" },
  { title: "Mato Grosso" },
  { title: "Mato Grosso do Sul" },
  { title: "Minas Gerais" },
  { title: "Pará" },
  { title: "Paraíba" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
  { title: "" },
];

//https://politicaracional.fandom.com/pt/wiki/Unidades_Federativas_do_Brasil