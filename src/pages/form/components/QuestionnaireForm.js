import React, { useState } from "react";
import Place from "./Place";
function QuestionnaireForm() {
  return (
    <div>
      <p>Tempo contamida?</p>
      <div>
        <p>
          Adcione os ultimo lugares que voc frenquentou (iniciando do ultimo
          lugar)
        </p>

        <Place></Place>
      </div>
    </div>
  );
}

export default QuestionnaireForm;
