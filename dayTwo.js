const originalInput = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,23,6,27,2,9,27,31,1,5,31,35,1,35,10,39,1,39,10,43,2,43,9,47,1,6,47,51,2,51,6,55,1,5,55,59,2,59,10,63,1,9,63,67,1,9,67,71,2,71,6,75,1,5,75,79,1,5,79,83,1,9,83,87,2,87,10,91,2,10,91,95,1,95,9,99,2,99,9,103,2,10,103,107,2,9,107,111,1,111,5,115,1,115,2,119,1,119,6,0,99,2,0,14,01,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0'.split(',').map(n => +n);

function part1(replacement1, replacement2) {
  const input = originalInput.slice();
  input[1] = replacement1;
  input[2] = replacement2;

  let position = 0;

  while (input[position] !== 99) {
    const xIdx = input[position + 1];
    const yIdx = input[position + 2];
    const x = input[xIdx];
    const y = input[yIdx];

    const outputIndex = input[position + 3];
    const output = input[position] === 1 ? x + y : x * y;

    input[outputIndex] = output;
    position += 4;
  }

  return input[0];
}


function part2(expected) {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const result = part1(noun, verb);

      if (result === expected) {
        return 100 * noun + verb;
      }
    }
  }
}

module.exports = {
    part1,
    part2
}

console.log(part2(19690720))