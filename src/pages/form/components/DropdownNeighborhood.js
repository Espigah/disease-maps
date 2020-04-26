/* eslint-disable no-use-before-define */
import React from "react";
import DropDown from "./DropDown";

export default function DropdownNeighborhood({ value }) {
  return (
    <DropDown
      id="combo-box-neighborhood"
      options={top100Films}
      label="Bairro"
      value={value}
    />
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];
