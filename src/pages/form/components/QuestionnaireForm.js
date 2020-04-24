import React, { useState } from "react";
import Location from "./Location";
function QuestionnaireForm() {
  return (
    <div>
      <p>Tempo contamida?</p>
      <div>
        <p>
          Adcione os ultimo lugares que voc frenquentou (iniciando do ultimo
          lugar)
        </p>

        <Location></Location>
      </div>
    </div>
  );
}

export default QuestionnaireForm;
