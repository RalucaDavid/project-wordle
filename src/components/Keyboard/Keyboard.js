import React from "react";
import { range } from "../../utils";

function Keyboard({ letters }) {
  const rows = [
    letters.slice(0, 10),
    letters.slice(10, 19),
    letters.slice(19, 26),
  ];

  return (
    <div className="keyboard">
      {range(3).map((rowIndex) => {
        return (
          <div className="keyboard-row" key={rowIndex}>
            {rows[rowIndex].map(({ id, status, key }) => {
              return (
                <div key={id} className={`keyboard-cell ${status}`}>
                  {key}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
