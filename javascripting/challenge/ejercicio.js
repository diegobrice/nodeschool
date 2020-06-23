const input =
  "R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1";

const { pos } = input.split(",").reduce(
  ({ dir, pos }, item) => {
    const trimmed = item.trim();
    const turn = trimmed[0];
    const steps = parseInt(trimmed.slice(1), 10);
    const newDir =
      turn === "L" ? (dir === 0 ? 3 : dir - 1) : dir === 3 ? 0 : dir + 1;

    switch (newDir) {
      case 0: // N
        return { dir: newDir, pos: [pos[0], pos[1] + steps] };
      case 1: // E
        return { dir: newDir, pos: [pos[0] + steps, pos[1]] };
      case 2: // S
        return { dir: newDir, pos: [pos[0], pos[1] - steps] };
      case 3: // W
        return { dir: newDir, pos: [pos[0] - steps, pos[1]] };
    }
  },
  { dir: 0, pos: [0, 0] }
);

console.log(Math.abs(pos[0]) + Math.abs(pos[1]));
