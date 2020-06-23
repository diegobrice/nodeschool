const input = `R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1`;

//O/N/E/S
let dondeMira = "N";
let positionX = 0;
let positionY = 0;
const movimientos = input.split(", ");

const cambiarMira = (moverHacia, pasos) => {
  const movimientoDeMirada = dondeMira + moverHacia;
  // console.log({ pasos });
  if (movimientoDeMirada === "SR" || movimientoDeMirada === "NL") {
    //-X
    dondeMira = "O";
    positionX -= Number(pasos);
    return;
  }
  if (movimientoDeMirada === "ER" || movimientoDeMirada === "OL") {
    //-Y
    dondeMira = "S";
    positionY -= Number(pasos);
    return;
  }
  if (movimientoDeMirada === "NR" || movimientoDeMirada === "SL") {
    //+X
    dondeMira = "E";
    positionX += Number(pasos);
    return;
  }
  if (movimientoDeMirada === "OR" || movimientoDeMirada === "EL") {
    //+Y
    dondeMira = "N";
    positionY += Number(pasos);
    return;
  }
};

movimientos.forEach((mov) => {
  cambiarMira(mov[0], mov.substring(1));
});

console.log(
  {
    positionX,
    positionY,
  },
  "Suma => ",
  positionX + positionY
);
