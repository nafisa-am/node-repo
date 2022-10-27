console.log(process.argv);

const a = process.argv(2);
const b = process.argv(3);

if (a === b) console.log(true);
else console.log(false);

// ternary operator if a === b ? console.log(true) : console.log(false)
