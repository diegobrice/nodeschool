const input =
  "R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1";

const arrayinput = input.split(", ");
let directions = "NESW";
let final_position = [0, 0];
for (let i = 0; i < arrayinput.length; i++) {
  const turnDirection = arrayinput[i][0];
  const numberSteps = arrayinput[i].slice(1);

  if (turnDirection === "R") {
    directions = rotate(directions);
  } else {
    directions = rotateInverse(directions);
  }

  curr_dir = directions[0];

  switch (curr_dir) {
    case "N":
      final_position[1] += parseInt(numberSteps);
      break;
    case "S":
      final_position[1] -= parseInt(numberSteps);
      break;
    case "E":
      final_position[0] += parseInt(numberSteps);
      break;
    default:
      final_position[0] -= parseInt(numberSteps);
  }
}

//console.log(final_position);

function rotate(string) {
  return string.slice(1, 4) + string[0];
}
function rotateInverse(string) {
  return string[3] + string.slice(0, 3);
}
