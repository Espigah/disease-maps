import React, { useState } from "react";

function Question(props) {
  const handleClick = (event) => {
    const checked = event.currentTarget.checked;
    props.onChange(checked);
  };

  return (
    <div>
      <label for="huey">
        Você esta infectado
        <input
          type="checkbox"
          id="huey"
          name="drone"
          onChange={handleClick}
          checked={props.infected}
        />
      </label>
    </div>
  );
}

export default Question;
